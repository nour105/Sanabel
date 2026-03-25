<?php
ini_set('display_errors', '0');
error_reporting(0);
header('Content-Type: application/json');

function sanitize_input($value) {
  $value = htmlspecialchars($value ?? '', ENT_QUOTES, 'UTF-8');
  $value = str_replace(["=", "+", "-", "@"], "'", $value);
  return trim($value);
}

$required_fields = ['offer_preference', 'preferred_time'];
$optional_fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content', 'latitude', 'longitude'];

$data = [];
foreach ($required_fields as $field) {
  if (empty($_POST[$field])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
    exit;
  }
  $data[$field] = sanitize_input($_POST[$field]);
}

foreach ($optional_fields as $field) {
  $data[$field] = sanitize_input($_POST[$field] ?? '');
}

$timestamp = sanitize_input($_POST['submission_timestamp'] ?? date('c'));
$ip_address = sanitize_input($_SERVER['REMOTE_ADDR'] ?? '');
$user_agent = sanitize_input($_SERVER['HTTP_USER_AGENT'] ?? '');

$csv_file = __DIR__ . '/submissions.csv';
$file_exists = file_exists($csv_file);
if ($file_exists && !is_writable($csv_file)) {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'Unable to save submission.']);
  exit;
}

$handle = fopen($csv_file, 'a');
if ($handle === false) {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'Unable to save submission.']);
  exit;
}

$header = ['timestamp', 'offer_preference', 'preferred_time', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content', 'latitude', 'longitude', 'ip_address', 'user_agent'];
if (!$file_exists) {
  fputcsv($handle, $header, ',', '"', '\\');
} else {
  $existing_header = null;
  if (is_readable($csv_file)) {
    $read_handle = fopen($csv_file, 'r');
    if ($read_handle !== false) {
      $existing_header = fgetcsv($read_handle);
      fclose($read_handle);
    }
  }
  if (is_array($existing_header) && count($existing_header) === 11) {
    $file_contents = file($csv_file, FILE_IGNORE_NEW_LINES);
    if ($file_contents !== false && count($file_contents) <= 1) {
      file_put_contents($csv_file, implode(',', $header) . PHP_EOL);
    }
  }
}

fputcsv($handle, [
  $timestamp,
  $data['offer_preference'],
  $data['preferred_time'],
  $data['utm_source'],
  $data['utm_medium'],
  $data['utm_campaign'],
  $data['utm_id'],
  $data['utm_term'],
  $data['utm_content'],
  $data['latitude'],
  $data['longitude'],
  $ip_address,
  $user_agent
], ',', '"', '\\');

fclose($handle);

echo json_encode(['success' => true]);
