const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
// export async function submitLeadSearch(payload) {
//   const res = await fetch(
//     `${API_BASE_URL}/lead-search`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(payload),
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch results");
//   }

//   return res.json();
// }
export async function submitLeadSearch(payload) {
  const res = await fetch(`${API_BASE_URL}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}

export async function getBrands() {
  const res = await fetch(`${API_BASE_URL}/brands`, { cache: 'no-store' });
  const json = await res.json();
  return json.data;
}

export async function getBrand(id) {
  const res = await fetch(`${API_BASE_URL}/brands/${id}`, { cache: 'no-store' });
  const json = await res.json();
  return json.data;
}

export async function getCarsByBrand(brandId) {
  const res = await fetch(
    `${API_BASE_URL}/cars?brand_id=${brandId}`,
    { cache: 'no-store' }
  );
  const json = await res.json();
  return json.data;
}
export async function getHomePage() {
  const res = await fetch(`${API_BASE_URL}/pages`, {
    cache: 'no-store',
  });

  const json = await res.json();

  return json.data.find(page => page.slug === 'home-page');
}
export async function getCarBySlug(slug) {
  const res = await fetch(
    `${API_BASE_URL}/cars/slug/${slug}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error(`Car not found: ${slug}`);
  }

  const json = await res.json();
  return json.data;
}

export async function getOffers() {
  const response = await fetch(`${API_BASE_URL}/offers`);
  if (!response.ok) {
    throw new Error('Failed to fetch offers');
  }
  const data = await response.json();
  return data.data;
}

export async function getCars() {
  const response = await fetch(`${API_BASE_URL}/cars`);
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  const data = await response.json();
  return data.data;
}

export async function getCar(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/cars/slug/${slug}`);
  if (!res.ok) throw new Error('Car not found');
  const data = await res.json();
  return data.data; // لأن الـ API بيرجع data داخل object
}

// export async function getBrand(id) {
//   const response = await fetch(`${API_BASE_URL}/brands/${id}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch brand');
//   }
//   const data = await response.json();
//   return data.data;
// }
export async function getBrandBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/brands`, {
    cache: 'no-store',
  });

  const json = await res.json();

  return json.data.find(brand => brand.slug === slug) || null;
}

export async function getAllOffers() {
  try {
    const res = await fetch(`${API_BASE_URL}/offers`, { 
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch offers: ${res.status}`);
    }

    const json = await res.json();
    const offers = Array.isArray(json) ? json : json.data || [];
    
    return offers.map(offer => ({
      ...offer,
      slug: offer.slug || offer.id?.toString(),
    }));
  } catch (error) {
    console.error('Error fetching offers:', error);
    return [];
  }
}
export async function getAllcars() {
  try {
    const res = await fetch(`${API_BASE_URL}/cars`, { 
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch offers: ${res.status}`);
    }

    const json = await res.json();
    const offers = Array.isArray(json) ? json : json.data || [];
    
    return offers.map(offer => ({
      ...offer,
      slug: offer.slug || offer.id?.toString(),
    }));
  } catch (error) {
    console.error('Error fetching offers:', error);
    return [];
  }

}
export async function getCarsByBrandId(brandId) {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/cars/brand/${brandId}`);
  const data = await res.json();
  return data.success ? data.data : [];
}
export async function getOfferBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/offers/slug/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Offer not found: ${slug}`);
  }

  const json = await res.json();
  return json.data; // <-- single object, NOT array
}



export async function getPageBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/pages`, { cache: 'no-store' });
  const json = await res.json();
  return json.data.find(page => page.slug === slug);
}

export async function getCarsByBrandSlug(slug) {
  const res = await fetch(
    `${API_BASE_URL}/cars?brand_slug=${slug}`,
    { cache: 'no-store' }
  );

  const json = await res.json();
  return json.data || [];
}

export async function getOffer(id) {
  const response = await fetch(`${API_BASE_URL}/offers/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch offer');
  }
  const data = await response.json();
  return data.data;
}

// export async function getCar(id) {
//   const response = await fetch(`${API_BASE_URL}/cars/${id}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch car');
//   }
//   const data = await response.json();
//   return data.data;
// }
