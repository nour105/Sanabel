export async function trackCTA({ cta, car }) {
  try {
    await fetch(`https://sanabelauto.com/api/v1/cta-click`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cta,
        car_id: car?.id ?? null,
        car_name: car?.name ?? null,
      }),
    });
  } catch (e) {
    console.log('CTA tracking failed');
  }
}
