// lib/utils.js
export function getLocalized(obj, locale = "en") {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  if (typeof obj[locale] === "string") return obj[locale];
  if (typeof obj.en === "string") return obj.en; // fallback
  return "";
}
