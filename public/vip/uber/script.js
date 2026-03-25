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
  let valid = true;
  offerError.textContent = '';
  timeError.textContent = '';
  submitError.textContent = '';

  if (!offerInput.value) {
    offerError.textContent = 'Please select an offer.';
    valid = false;
  }

  if (!timeInput.value) {
    timeError.textContent = 'Please select a preferred time.';
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
const response = await fetch(
  "https://admin.sanabelauto.com/api/v1/landingLeads",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(new FormData(form))),
  }
);

    const responseText = await response.text();
    let result = {};
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error('Submission failed. Please try again.');
    }
    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Submission failed.');
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
  setUtmFields();
  runConfetti();
});

window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

const BRANCHES = [
{
city:{ar:'جدة',en:'Jeddah'},
locations:[
{
name:{ar:'أوتومول',en:'Automall'},
embed:'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Automall&output=embed',
link:'https://maps.app.goo.gl/fAGRDGCDMYx1nLot7'
},
{
name:{ar:'السليمانية',en:'Al Sulimaniya'},
embed:'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Sulimaniya&output=embed',
link:'https://maps.app.goo.gl/MoPpz356Dyeo1xYE6'
},
{
name:{ar:'كار جيت',en:'Car Gate'},
embed:'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Car+Gate&output=embed',
link:'https://maps.app.goo.gl/x63RBHiURhkrxDUd6'
}
]
},
{
city:{ar:'الرياض',en:'Riyadh'},
locations:[
{
name:{ar:'خريص',en:'Khurais'},
embed:'https://www.google.com/maps?q=Sanabel+Auto+Riyadh+Khurais&output=embed',
link:'https://maps.app.goo.gl/YbK6qJhE4asoq5Zc7'
},
{
name:{ar:'الدائري الشمالي',en:'North Ring Road'},
embed:'https://www.google.com/maps?q=Sanabel+Auto+Riyadh+North+Ring+Road&output=embed',
link:'https://maps.app.goo.gl/2rCaT814idCoutE67'
}
]
},
{
city:{ar:'الدمام',en:'Dammam'},
locations:[
{
name:{ar:'الفرع الرئيسي',en:'Main Branch'},
embed:'https://www.google.com/maps?q=Sanabel+Auto+Dammam&output=embed',
link:'https://maps.app.goo.gl/qAr6RaNZHa45NXS66'
}
]
}
];

const cityButtons = document.querySelectorAll('.city-btn');
const branchList = document.getElementById('branch-list');
const mapFrame = document.getElementById('branch-map');
const mapLink = document.getElementById('map-link');

let activeCity = 0;

function renderBranches(cityIndex){

branchList.innerHTML='';

BRANCHES[cityIndex].locations.forEach((branch,index)=>{

const btn=document.createElement('button');

btn.innerHTML = `
<span class="ar">${branch.name.ar}</span>
<span class="en">${branch.name.en}</span>
`;

if(index===0) btn.classList.add('active');

btn.addEventListener('click',()=>{

document.querySelectorAll('#branch-list button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');

mapFrame.src=branch.embed;
mapLink.href=branch.link;

});

branchList.appendChild(btn);

});

mapFrame.src=BRANCHES[cityIndex].locations[0].embed;
mapLink.href=BRANCHES[cityIndex].locations[0].link;

}

cityButtons.forEach(btn=>{
btn.addEventListener('click',()=>{

cityButtons.forEach(b=>b.classList.remove('active'));
btn.classList.add('active');

activeCity=btn.dataset.city;

renderBranches(activeCity);

});
});

renderBranches(0);
