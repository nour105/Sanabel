export async function trackCTA({ cta, car }) {
  try {
    const lang =
      typeof document !== 'undefined'
        ? document.documentElement.lang || 'en'
        : 'en';

    await fetch(`https://sanabelauto.com/api/v1/cta-click`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cta,
        car_id: car?.id ?? null,
        car_name:
          typeof car?.name === 'string'
            ? car.name
            : car?.name?.[lang] ??
              car?.name?.en ??
              car?.name?.ar ??
              null,
      }),
    });
  } catch (e) {
    console.log('CTA tracking failed');
  }
}

