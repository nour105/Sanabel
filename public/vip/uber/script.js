const offerButtons = document.querySelectorAll('.option-button');
const timeButtons = document.querySelectorAll('.time-button');
const offerInput = document.getElementById('offer_preference');
const timeInput = document.getElementById('preferred_time');
const offerError = document.getElementById('offer-error');
const timeError = document.getElementById('time-error');
const submitError = document.getElementById('submit-error');
const form = document.getElementById('lead-form');
const submitButton = document.getElementById('submit-button');
const thankYou = document.getElementById('thank-you');
const confettiCanvas = document.getElementById('confetti-canvas');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const languageButtons = document.querySelectorAll('.language-button');

const textByLanguage = {
  ar: {
    offerError: 'يرجى اختيار العرض.',
    timeError: 'يرجى اختيار الوقت المفضل.',
    submitError: 'تعذر إرسال الطلب. يرجى المحاولة مرة أخرى.',
    submissionFailed: 'تعذر إرسال الطلب.'
  },
  en: {
    offerError: 'Please select an offer.',
    timeError: 'Please select a preferred time.',
    submitError: 'Submission failed. Please try again.',
    submissionFailed: 'Submission failed.'
  }
};

const getCurrentLanguage = () => document.body.dataset.language || 'ar';

const applyLanguage = (language) => {
  const nextLanguage = language === 'en' ? 'en' : 'ar';
  document.body.dataset.language = nextLanguage;
  document.documentElement.lang = nextLanguage;
  document.documentElement.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr';
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === nextLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  window.localStorage.setItem('landing-language', nextLanguage);
};

const setSelection = (buttons, selectedButton, input) => {
  buttons.forEach((button) => {
    button.classList.remove('selected');
    button.setAttribute('aria-checked', 'false');
  });
  selectedButton.classList.add('selected');
  selectedButton.setAttribute('aria-checked', 'true');
  input.value = selectedButton.dataset.value;
};

offerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setSelection(offerButtons, button, offerInput);
    offerError.textContent = '';
  });
});

timeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setSelection(timeButtons, button, timeInput);
    timeError.textContent = '';
  });
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
  });
});

const setUtmFields = () => {
  const params = new URLSearchParams(window.location.search);
  const fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'];
  fields.forEach((field) => {
    const input = document.getElementById(field);
    input.value = params.get(field) || '';
  });
};

const runConfetti = () => {
  if (typeof confetti !== 'function') {
    return;
  }

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confettiInstance = confetti.create(confettiCanvas, { resize: true, useWorker: true });
  const duration = 2500;
  const end = Date.now() + duration;

  const frame = () => {
    confettiInstance({
      particleCount: 5,
      spread: 80,
      startVelocity: 35,
      origin: { x: Math.random(), y: Math.random() * 0.4 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

const captureLocation = () => new Promise((resolve) => {
  if (!navigator.geolocation) {
    resolve();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitudeInput.value = position.coords.latitude.toFixed(6);
      longitudeInput.value = position.coords.longitude.toFixed(6);
      resolve();
    },
    () => {
      // Optional: ignore denied/failed location requests.
      resolve();
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
});

const validateForm = () => {
  const language = getCurrentLanguage();
  let valid = true;
  offerError.textContent = '';
  timeError.textContent = '';
  submitError.textContent = '';

  if (!offerInput.value) {
    offerError.textContent = textByLanguage[language].offerError;
    valid = false;
  }

  if (!timeInput.value) {
    timeError.textContent = textByLanguage[language].timeError;
    valid = false;
  }

  return valid;
};

const serializeForm = (formElement) => {
  const formData = new FormData(formElement);
  return new URLSearchParams(formData);
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }

  await captureLocation();

  submitButton.classList.add('loading');
  submitButton.disabled = true;
  document.getElementById('submission_timestamp').value = new Date().toISOString();

  try {
 const response = await fetch('https://admin.sanabelauto.com/api/v1/landingLeads', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    offer_preference: offerInput.value,
    preferred_time: timeInput.value,
    utm_source: document.getElementById('utm_source').value,
    utm_medium: document.getElementById('utm_medium').value,
    utm_campaign: document.getElementById('utm_campaign').value,
    utm_id: document.getElementById('utm_id').value,
    utm_term: document.getElementById('utm_term').value,
    utm_content: document.getElementById('utm_content').value,
    submission_timestamp: document.getElementById('submission_timestamp').value,
    latitude: latitudeInput.value,
    longitude: longitudeInput.value,
    language: getCurrentLanguage()
  })
});

    const responseText = await response.text();
    let result = {};
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error(textByLanguage[getCurrentLanguage()].submitError);
    }
    if (!response.ok || !result.success) {
      throw new Error(result.message || textByLanguage[getCurrentLanguage()].submissionFailed);
    }

    form.reset();
    offerButtons.forEach((button) => button.classList.remove('selected'));
    timeButtons.forEach((button) => button.classList.remove('selected'));
    offerButtons.forEach((button) => button.setAttribute('aria-checked', 'false'));
    timeButtons.forEach((button) => button.setAttribute('aria-checked', 'false'));
    form.classList.add('submitted');
    thankYou.hidden = false;
  } catch (error) {
    submitError.textContent = error.message;
  } finally {
    submitButton.classList.remove('loading');
    submitButton.disabled = false;
  }
});

window.addEventListener('load', () => {
  applyLanguage(window.localStorage.getItem('landing-language') || 'ar');
  setUtmFields();
  runConfetti();
});

window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
const BRANCHES = [
  {
    city:{en:'Jeddah',ar:'جدة'},
    locations:[
      {name:{en:'Automall',ar:'أوتومول'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Automall&output=embed',link:'https://maps.app.goo.gl/fAGRDGCDMYx1nLot7'},
      {name:{en:'Al Sulimaniya',ar:'السليمانية'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Sulimaniya&output=embed',link:'https://maps.app.goo.gl/MoPpz356Dyeo1xYE6'},
      {name:{en:'Car Gate',ar:'كار جيت'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Car+Gate&output=embed',link:'https://maps.app.goo.gl/x63RBHiURhkrxDUd6'}
    ]
  },
  {
    city:{en:'Riyadh',ar:'الرياض'},
    locations:[
      {name:{en:'Khurais',ar:'خريص'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Riyadh+Khurais&output=embed',link:'https://maps.app.goo.gl/YbK6qJhE4asoq5Zc7'},
      {name:{en:'North Ring Road',ar:'الدائري الشمالي'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Riyadh+North+Ring+Road&output=embed',link:'https://maps.app.goo.gl/2rCaT814idCoutE67'}
    ]
  },
  {
    city:{en:'Dammam',ar:'الدمام'},
    locations:[
      {name:{en:'Main Branch',ar:'الفرع الرئيسي'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Dammam&output=embed',link:'https://maps.app.goo.gl/qAr6RaNZHa45NXS66'}
    ]
  },
  {
    city:{en:'Makkah',ar:'مكة'},
    locations:[
      {name:{en:'Main Branch',ar:'الفرع الرئيسي'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Makkah&output=embed',link:'https://maps.app.goo.gl/fMbXCchNSzDuoxnf6'}
    ]
  },
  {
    city:{en:'Medina',ar:'المدينة'},
    locations:[
      {name:{en:'Main Branch',ar:'الفرع الرئيسي'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Medina&output=embed',link:'https://maps.app.goo.gl/Rf1NY4mr2E7TL1Df7'}
    ]
  },
  {
    city:{en:'Jizan',ar:'جازان'},
    locations:[
      {name:{en:'Main Branch',ar:'الفرع الرئيسي'},embed:'https://www.google.com/maps?q=Sanabel+Auto+Jizan&output=embed',link:'https://maps.app.goo.gl/DqDwDwhmqkEjWgGWA'}
    ]
  }
];

let activeCity = 0;
let activeBranch = 0;

function renderMap(){

  const langBtn = document.querySelector('.language-button.active');
  const lang = langBtn ? langBtn.dataset.language : 'ar';

  const cityContainer = document.getElementById('city-buttons');
  const branchContainer = document.getElementById('branch-buttons');
  const frame = document.getElementById('map-frame');
  const link = document.getElementById('map-link');

  if(!cityContainer || !branchContainer || !frame) return;

  cityContainer.innerHTML='';
  branchContainer.innerHTML='';

  BRANCHES.forEach((city,i)=>{
    const btn=document.createElement('button');
    btn.textContent=city.city[lang];
    if(i===activeCity) btn.classList.add('active');

    btn.onclick=()=>{
      activeCity=i;
      activeBranch=0;
      renderMap();
    };

    cityContainer.appendChild(btn);
  });

  BRANCHES[activeCity].locations.forEach((branch,i)=>{
    const btn=document.createElement('button');
    btn.textContent=branch.name[lang];
    if(i===activeBranch) btn.classList.add('active');

    btn.onclick=()=>{
      activeBranch=i;
      renderMap();
    };

    branchContainer.appendChild(btn);
  });

  const selected = BRANCHES[activeCity].locations[activeBranch];

  frame.src = selected.embed;
  link.href = selected.link;
  link.textContent = lang === 'ar'
    ? 'افتح الموقع على خرائط Google'
    : 'Open in Google Maps';
}

document.addEventListener('DOMContentLoaded',renderMap);

document.querySelectorAll('.language-button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    setTimeout(renderMap,50);
  });
});