


  // ── Tier pricing map ──────────────────────────────────────────────────────
  // Keys must match destination ids defined below
  const TIER_PRICES = {
    delhi:    { t1: 5000,  t2: 4000,  t3: 2500,  t4: 2000  },
    agra:     { t1: 7500,  t2: 6500,  t3: 5000,  t4: 4000  },
    mathura:  { t1: 7500,  t2: 6500,  t3: 5000,  t4: 4000  },
    jaipur:   { t1: 8000,  t2: 7000,  t3: 5500,  t4: 4500  },
    haridwar: { t1: 8000,  t2: 7000,  t3: 5500,  t4: 4500  },
    amritsar: { t1: 9000,  t2: 8000,  t3: 6500,  t4: 5500  },
    varanasi: { t1: 11000, t2: 10000, t3: 8500,  t4: 7500  },
    corbett:  { t1: 11000, t2: 10000, t3: 8500,  t4: 7500  },
    golden:   { t1: 11000, t2: 10000, t3: 8500,  t4: 7500  },
    shimla:   { t1: 13500, t2: 12500, t3: 11000, t4: 10000 }
  };

  const TIERS = [
    { id: 't1', label: '1 – 2 People',  paxOptions: ['Solo', '2 People'] },
    { id: 't2', label: '3 – 4 People',  paxOptions: ['3 People', '4 People'] },
    { id: 't3', label: '5 – 6 People',  paxOptions: ['5 People', '6 People'] },
    { id: 't4', label: '7 – 10 People', paxOptions: ['7','8','9','10'].map(n => n + ' People') }
  ];

  const DESTINATIONS = {
    dayTours: [
      { id: 'delhi',    name: 'Delhi',              ancils: [
        {name:'Red Fort',price:0,type:'Incl.'},{name:'Humayun Tomb',price:0,type:'Incl.'},{name:'Qutub Minar',price:300,type:'per person'},
        {name:'India Gate',price:0,type:'Incl.'},{name:'Lotus Temple',price:200,type:'per person'},{name:'Akshardham',price:350,type:'per person'},
        {name:'Old Delhi Walk',price:400,type:'per person'},{name:'Rickshaw Ride',price:500,type:'per person'},{name:'Food Walk',price:700,type:'per person'},
        {name:'Dilli Haat',price:400,type:'per person'},{name:'Photographer',price:3500,type:'per group'}
      ]},
      { id: 'agra',     name: 'Agra',               ancils: [
        {name:'Taj Mahal',price:0,type:'Incl.'},{name:'Agra Fort',price:0,type:'Incl.'},{name:'Baby Taj',price:300,type:'per person'},
        {name:'Mehtab Bagh',price:200,type:'per person'},{name:'Fatehpur Sikri',price:600,type:'per person'},{name:'Heritage Walk',price:800,type:'per person'},
        {name:'Sunrise Taj',price:500,type:'per person'},{name:'VIP Entry',price:500,type:'per person'},{name:'Photographer',price:3500,type:'per group'},
        {name:'Tonga Ride',price:800,type:'per person'},{name:'Petha Making',price:600,type:'per person'},{name:'Mughal Dinner',price:1200,type:'per person'}
      ]},
      { id: 'mathura',  name: 'Mathura & Vrindavan', ancils: [
        {name:'Janmabhoomi',price:0,type:'Incl.'},{name:'Dwarkadhish',price:0,type:'Incl.'},{name:'Banke Bihari',price:0,type:'Incl.'},{name:'ISKCON',price:300,type:'per person'},
        {name:'Boat Ride',price:500,type:'per person'},{name:'E-Rickshaw',price:500,type:'per person'},{name:'Satvik Food',price:700,type:'per person'},{name:'Flower Ceremony',price:400,type:'per person'},
        {name:'Puja Kit',price:350,type:'per person'},{name:'Govardhan Walk',price:1200,type:'per person'},{name:'Holi Colour',price:1500,type:'per person'},{name:'Evening Aarti',price:300,type:'per person'}
      ]},
      { id: 'jaipur',   name: 'Jaipur',             ancils: [
        {name:'Amber Fort',price:0,type:'Incl.'},{name:'City Palace',price:0,type:'Incl.'},{name:'Hawa Mahal',price:0,type:'Incl.'},
        {name:'Jantar Mantar',price:250,type:'per person'},{name:'Nahargarh',price:400,type:'per person'},{name:'Jal Mahal',price:150,type:'per person'},
        {name:'Balloon Sunrise',price:9500,type:'per person'},{name:'Elephant Ride',price:800,type:'per person'},{name:'Camel Ride',price:600,type:'per person'},
        {name:'Block Printing',price:800,type:'per person'},{name:'Pottery',price:900,type:'per person'},{name:'Turban Tying',price:400,type:'per person'},
        {name:'Royal Dinner',price:2500,type:'per person'},{name:'Jewellery Walk',price:500,type:'per person'}
      ]},
      { id: 'haridwar', name: 'Haridwar & Rishikesh', ancils: [
        {name:'Laxman Jhula',price:0,type:'Incl.'},{name:'Har Ki Pauri',price:0,type:'Incl.'},{name:'Ganga Aarti',price:0,type:'Incl.'},
        {name:'Triveni Ghat',price:300,type:'per person'},{name:'Neelkanth Temple',price:600,type:'per person'},{name:'Rafting G1-3',price:1500,type:'per person'},
        {name:'Rafting G4',price:2200,type:'per person'},{name:'Bungee',price:3500,type:'per person'},{name:'Yoga',price:1200,type:'per person'},
        {name:'Camping',price:3500,type:'per person'},{name:'Massage',price:1800,type:'per person'},{name:'Flying Fox',price:1200,type:'per person'},{name:'Cliff Jump',price:800,type:'per person'}
      ]},
      { id: 'amritsar', name: 'Amritsar',            ancils: [
        {name:'Golden Temple',price:0,type:'Incl.'},{name:'Jallianwala Bagh',price:0,type:'Incl.'},{name:'Wagah Border',price:0,type:'Incl.'},
        {name:'Partition Museum',price:400,type:'per person'},{name:'Gobindgarh Fort',price:500,type:'per person'},{name:'Langar',price:0,type:'Incl.'},
        {name:'Food Walk',price:700,type:'per person'},{name:'Wagah VIP',price:600,type:'per person'},{name:'Turban Tying',price:400,type:'per person'}
      ]}
    ],
    multiDay: [
      { id: 'varanasi', name: 'Varanasi',         recommendedDays: 2, ancils: [
        {name:'Boat Dawn',price:2500,type:'per person'},{name:'Silk Workshop',price:900,type:'per person'},{name:'Ganga Aarti Seating',price:800,type:'per person'},
        {name:'Blessing Ceremony',price:1500,type:'per person'},{name:'Cooking Class',price:1500,type:'per person'},{name:'Photography',price:4000,type:'per person'},
        {name:'Pind Daan',price:3500,type:'per person'},{name:'Overnight Ganges',price:6500,type:'per person'}
      ]},
      { id: 'corbett',  name: 'Jim Corbett',      recommendedDays: 2, ancils: [
        {name:'Dhikala Safari',price:0,type:'Incl.'},{name:'Nature Walk',price:0,type:'Incl.'},{name:'Bijrani Safari',price:1200,type:'per person'},
        {name:'River Walk',price:500,type:'per person'},{name:'Elephant Safari',price:2500,type:'per person'},{name:'Birdwatching',price:1500,type:'per person'},
        {name:'Night Safari',price:3000,type:'per person'},{name:'Camp Stay',price:5500,type:'per person'},{name:'Fishing',price:2000,type:'per person'},
        {name:'Photo Tour',price:4500,type:'per person'}
      ]},
      { id: 'golden',   name: 'Golden Triangle',  recommendedDays: 3, ancils: [
        {name:'Balloon Ride',price:9500,type:'per person'},{name:'Street Food Walk',price:700,type:'per person'},{name:'Royal Dinner',price:2500,type:'per person'}
      ]},
      { id: 'shimla',   name: 'Shimla & Manali',  recommendedDays: 4, ancils: [
        {name:'Paragliding',price:2500,type:'per person'},{name:'Biking',price:1500,type:'per person'},{name:'Snow Sports',price:2000,type:'per person'},
        {name:'Spa',price:1800,type:'per person'},{name:'Camping',price:4500,type:'per person'},{name:'Home Meal',price:800,type:'per person'}
      ]}
    ]
  };

  // ── State ─────────────────────────────────────────────────────────────────
  let activeTourId   = null;
  let activeAncils   = [];
  let tourDays       = {};
  let activeTierId   = null;   // which group-size tier is selected
  let activePax      = null;   // exact pax choice within the tier
  // guideChoice: 'english' | 'none' | 'other' | null (unselected)
  let guideChoice    = null;
  // airportServices: set of selected service ids
  let airportSvcs    = new Set();

  // ── Travel Details state ──────────────────────────────────────────────────
  let tdStart      = null;   // Date object
  let tdEnd     = null;   // Date object
  let tdHoverDate    = null;   // for range preview
  let tdCalYear      = new Date().getFullYear();
  let tdCalMonth     = new Date().getMonth();
  let tdSelectingEnd = false;  // true after first click, waiting for checkout
  let tdArrFlight    = '';
  let tdDepFlight    = '';
  let tdFirstIndia   = null;   // true | false | null
  let tdGroupType    = '';     // family | couple | friends | solo | corporate
  let tdTags         = new Set(); // honeymoon | anniversary | birthday | medical
  let tdConfirmed    = true;   // sections visible by default; calendar collects info non-blocking
  let tdCalViewMonth = null;   // tracks which month is showing

  // ── Accommodation state ───────────────────────────────────────────────────
  const SERPAPI_KEY  = 'YOUR_SERPAPI_KEY'; // ← replace with your SerpAPI key
  let hotelTier      = null;   // '3star' | '4star' | '5star'
  let hotelResults   = null;   // null | 'loading' | 'error' | array
  let selectedHotel  = null;   // hotel object for single-city tours

  // Multi-city hotel selections — keyed by sub-city id
  // Golden Triangle: delhi, agra, jaipur
  // Shimla & Manali: shimla, manali
  // Haridwar & Rishikesh: haridwar, rishikesh
  // Mathura & Vrindavan: mathura, vrindavan
  let multiCityTier     = {};   // { cityId: '3star'|'4star'|'5star' }
  let multiCityResults  = {};   // { cityId: null|'loading'|array }
  let multiCitySelected = {};   // { cityId: hotelObject }
  let multiCityNote     = {};   // { cityId: string } — preferred city note for split destinations

  // Destinations that need multi-city hotel selection
  const MULTI_CITY_DESTS = {
    golden:   {
      label: 'Golden Triangle',
      cities: [
        { id: 'delhi',  name: 'Delhi',  note: null },
        { id: 'agra',   name: 'Agra',   note: null },
        { id: 'jaipur', name: 'Jaipur', note: null },
      ]
    },
    shimla:   {
      label: 'Shimla & Manali',
      cities: [
        { id: 'shimla',  name: 'Shimla',  note: 'Choose your preferred base — Shimla or Manali' },
        { id: 'manali',  name: 'Manali',  note: null },
      ]
    },
    haridwar: {
      label: 'Haridwar & Rishikesh',
      cities: [
        { id: 'haridwar',  name: 'Haridwar',  note: 'Choose your preferred base — Haridwar or Rishikesh' },
        { id: 'rishikesh', name: 'Rishikesh', note: null },
      ]
    },
    mathura:  {
      label: 'Mathura & Vrindavan',
      cities: [
        { id: 'mathura',   name: 'Mathura',   note: 'Choose your preferred base — Mathura or Vrindavan' },
        { id: 'vrindavan', name: 'Vrindavan', note: null },
      ]
    },
  };
  // Custom itinerary mode
  let customMode     = false;
  let ciPickup       = '';
  let ciDrop         = '';
  let ciPickupPlaceId = null;
  let ciDropPlaceId   = null;
  let ciNightHalt    = false;
  let ciNotes        = '';
  let ciResult       = null;  // null | 'loading' | 'error' | {breakdown object}
  let ciErrorMsg     = '';

  DESTINATIONS.multiDay.forEach(t => { tourDays[t.id] = t.recommendedDays; });

  // ── Helpers ───────────────────────────────────────────────────────────────
  function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }

  function activeTour() {
    if (!activeTourId) return null;
    return [...DESTINATIONS.dayTours, ...DESTINATIONS.multiDay].find(t => t.id === activeTourId);
  }

  // ── Renderers ─────────────────────────────────────────────────────────────
  var iaTrackedOpen = false;
  function render() {
    const app = document.getElementById('ivory-arc-app');
    if (!iaTrackedOpen) { iaTrackedOpen = true; iaTrack('estimator_open'); }
    const locked = customMode ? 'section-locked' : '';

    app.innerHTML = `

      <div class="section-head">Your Travel Details</div>
      ${travelDetailsSection()}

      ${ tdConfirmed ? `

        <div class="section-head">Private Day Tours</div>
        <div class="${locked}"><div class="grid">${DESTINATIONS.dayTours.map(t => destCard(t, false)).join('')}</div></div>

        <div class="section-head">Multi-Day Tours</div>
        <div class="${locked}"><div class="grid">${DESTINATIONS.multiDay.map(t => destCard(t, true)).join('')}</div></div>

        <div class="section-head">Custom Itinerary</div>
        ${customItinerarySection()}

        <div class="section-head" style="${customMode?'opacity:0.3':''}">Group Size &amp; Pricing Tier</div>
        <div class="${locked}">${groupSizeSection()}</div>

        <div class="section-head" style="${customMode?'opacity:0.3':''}">Guide Preference</div>
        <div class="${locked}">${guideSection()}</div>

        <div class="section-head" style="${customMode?'opacity:0.3':''}">Airport Services</div>
        <div class="${locked}">${airportSection()}</div>

        <div class="section-head">Accommodation</div>
        ${accommodationSection()}

        <div class="section-head">Verify &amp; Get Your Estimate</div>
        <div id="ivory-otp-section"></div>
        <div id="ivory-estimate-lock" style="margin-top:16px;">
          <div style="background:rgba(201,169,110,0.05);border:1px dashed rgba(201,169,110,0.3);border-radius:10px;padding:32px 24px;text-align:center;">
            <div style="font-size:28px;margin-bottom:12px;">&#128274;</div>
            <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:20px;color:#fff;margin-bottom:8px;">Verify your phone to unlock your estimate</div>
            <div style="font-size:13px;color:rgba(245,240,232,0.5);line-height:1.65;">Enter your number above and verify with a one-time code to see your full personalised cost breakdown.</div>
          </div>
        </div>
        <div id="ivory-estimate-unlocked" style="display:none;">
          <div class="section-head">Your Total Estimate</div>
          <div id="ivory-pricing-summary"></div>
          <div id="ivory-lead-form-container"></div>
        </div>

      ` : `
        <div style="text-align:center;padding:48px 20px;font-size:13px;letter-spacing:1.5px;
             color:rgba(201,169,110,0.5);border:1px dashed rgba(201,169,110,0.25);
             border-radius:10px;margin-top:8px;">
          Select your travel dates above to personalise your estimate
        </div>
      `}
    `;

    if (customMode) initAC();
    // Update OTP section and pricing summary whenever state changes
    renderOtpSection();
    // Pricing summary only updates if already unlocked
    if (otpState && otpState.step === 'verified') renderPricingSummary();
  }

  function guideSection() {
    const guides = [
      {
        id: 'english',
        icon: '🇬🇧',
        title: 'English Speaking Guide',
        impactLabel: 'Included in Base Price',
        impactClass: 'incl',
        caveat: '₹2,000 guide cost is already included in your base tour price. No additional charge applies.',
        availability: null
      },
      {
        id: 'none',
        icon: '🚶',
        title: 'No Guide Required',
        impactLabel: '− ₹2,000 per group/day',
        impactClass: 'minus',
        caveat: 'Explore independently. ₹2,000 will be deducted from your total base tour cost per group, per day.',
        availability: null
      },
      {
        id: 'other',
        icon: '🌐',
        title: 'Other Language Guide',
        impactLabel: '+ ₹1,000 per group/day',
        impactClass: 'plus',
        caveat: 'Available in French, Spanish, German, Japanese, Mandarin & more. Subject to availability — we will confirm at time of booking.',
        availability: 'Subject to Availability'
      }
    ];

    return `<div class="guide-grid">
      ${guides.map(g => {
        const isSelected = guideChoice === g.id;
        const cardClass  = `guide-card guide-${g.id}${isSelected ? ' selected' : ''}`;
        return `
          <div class="${cardClass}" onclick="selectGuide('${g.id}')">
            <div class="guide-icon">${g.icon}</div>
            <div class="guide-title">${g.title}</div>
            <div class="guide-impact ${g.impactClass}">${g.impactLabel}</div>
            ${g.availability ? `<div class="guide-availability">${g.availability}</div>` : ''}
            <div class="guide-caveat">${g.caveat}</div>
          </div>`;
      }).join('')}
    </div>`;
  }

  function airportSection() {
    const services = [
      {
        id: 'pickup',
        icon: '🚗',
        title: 'Airport Pickup & Hotel Drop',
        rate: '₹1,500',
        rateSub: 'Flat Rate · All Inclusive',
        desc: 'We pick you up from IGI Airport and drop you to your hotel in Delhi, Gurugram, or Noida. Parking, tolls, and waiting charges are all covered — no surprises on arrival.'
      },
      {
        id: 'porterage',
        icon: '🧳',
        title: 'Porterage',
        rate: '₹800',
        rateSub: 'Flat Rate · All Inclusive',
        desc: 'Our staff will assist with your luggage in the arrivals hall where they are waiting — so you are free to walk out without the hassle.'
      },
      {
        id: 'waiting',
        icon: '🪑',
        title: 'Arrivals Waiting Service',
        rate: '₹300',
        rateSub: 'Flat Rate · All Inclusive',
        desc: 'Your driver waits inside the airport arrivals hall with a name board, ensuring you are met the moment you clear customs — no searching for your ride outside.'
      }
    ];

    return `
      <div class="airport-intro">
        <div class="airport-intro-icon">✈️</div>
        <div class="airport-intro-text">
          <strong>IGI Airport — Delhi</strong>
          <p>Seamless arrival services from Indira Gandhi International Airport to your hotel in Delhi, Gurugram, or Noida. Select any combination of services below — each is independently optional.</p>
          <div class="airport-notice">⚠ Please note: our drivers are stationed at the airport and are not available for hotel-to-airport drops. This service covers airport pickup only.</div>
        </div>
      </div>
      <div class="airport-services-grid">
        ${services.map(s => `
          <div class="airport-service-card ${airportSvcs.has(s.id) ? 'selected' : ''}" onclick="toggleAirport('${s.id}')">
            <div class="asc-body">
              <div class="asc-icon">${s.icon}</div>
              <div class="asc-title">${s.title}</div>
              <div class="asc-rate">${s.rate}</div>
              <div class="asc-rate-sub">${s.rateSub}</div>
            </div>
            <div class="asc-desc">${s.desc}</div>
          </div>`).join('')}
      </div>`;
  }

  function destCard(t, isMultiDay) {
    const isActive = activeTourId === t.id;
    const days = tourDays[t.id] || t.recommendedDays;

    const metaBlock = isMultiDay ? `
      <div class="card-meta" onclick="event.stopPropagation()">
        <div class="days-badge">Recommended: ${t.recommendedDays} Day${t.recommendedDays > 1 ? 's' : ''}</div>
        <div class="days-stepper">
          <button onclick="changeDays('${t.id}',-1)">−</button>
          <div class="days-val">${days} Day${days > 1 ? 's' : ''}</div>
          <button onclick="changeDays('${t.id}',1)">+</button>
        </div>
      </div>` : '';

    return `
      <div class="card ${isActive ? 'active' : ''}" onclick="selectTour('${t.id}')">
        <div class="dest-name">${t.name}</div>
        ${metaBlock}
        ${isActive ? `<div class="anc-deck" onclick="event.stopPropagation()">
            ${t.ancils.map(a => `<div class="anc-row ${activeAncils.includes(a.name)?'active':''}" onclick="toggleAncil('${a.name}')">
              <span>${a.name} <span style="color:var(--gold);font-size:11px;">(${a.type})</span></span>
              <span class="anc-price">${a.price > 0 ? fmt(a.price) : 'Incl.'}</span>
            </div>`).join('')}
          </div>` : ''}
      </div>`;
  }

  function groupSizeSection() {
    const tour = activeTour();

    // Context bar — destination + active rate
    let contextBar = '';
    if (tour) {
      const tp = TIER_PRICES[tour.id];
      const highlightRate = activeTierId && tp ? fmt(tp[activeTierId]) : null;
      contextBar = `
        <div class="group-context-bar">
          <div>
            <div class="gcb-label">Selected Destination</div>
            <div class="gcb-dest">${tour.name}</div>
          </div>
          ${highlightRate ? `<div style="text-align:right;">
            <div class="gcb-label">Your Rate</div>
            <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:28px;color:var(--gold);">${highlightRate}</div>
            <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--ivory);">per person / per day</div>
          </div>` : ''}
        </div>`;
    } else {
      contextBar = `<div class="group-no-dest">← Select a destination above to see tier pricing</div>`;
    }

    const tp = tour ? TIER_PRICES[tour.id] : null;

    const tierCards = TIERS.map(tier => {
      const rate = tp ? tp[tier.id] : null;
      const isActive = activeTierId === tier.id;

      const paxPicker = isActive ? `
        <div class="pax-picker" onclick="event.stopPropagation()">
          <div class="pax-picker-label">How many travellers?</div>
          <div class="pax-options">
            ${tier.paxOptions.map(p => `
              <button class="pax-btn ${activePax === p ? 'active' : ''}" onclick="selectPax('${p}')">${p}</button>
            `).join('')}
          </div>
        </div>` : '';

      return `
        <div class="tier-card ${isActive ? 'active' : ''}" onclick="selectTier('${tier.id}')">
          <div class="tier-label">${tier.label}</div>
          ${rate !== null
            ? `<div class="tier-rate">${fmt(rate)}</div>
               <div class="tier-rate-sub">per person / per day</div>`
            : `<div class="tier-rate" style="font-size:13px;color:var(--ivory);opacity:0.5;">Select destination first</div>`
          }
          ${paxPicker}
        </div>`;
    }).join('');

    return `${contextBar}<div class="tier-grid">${tierCards}</div>`;
  }

  // ── Custom Itinerary Section ─────────────────────────────────────────────
  function customItinerarySection() {
    const isOn = customMode;
    return `
      <div class="custom-toggle-bar ${isOn ? 'active-mode' : ''}">
        <div>
          <div class="ctb-label">Plan a Custom Journey</div>
          <div class="ctb-sub">Build a bespoke private route — any origin, any destination, any stops.<br>Get an instant transparent estimate powered by live Google routing.</div>
        </div>
        <div class="toggle-wrap">
          <span class="toggle-lbl">${isOn ? 'On' : 'Off'}</span>
          <label class="toggle-switch">
            <input type="checkbox" ${isOn ? 'checked' : ''} onchange="toggleCustomMode(this.checked)">
            <span class="toggle-track"></span>
          </label>
        </div>
      </div>
      ${isOn ? (customBuilderHTML() || '') : ''}`;
  }

  function customBuilderHTML() {
    // Only render the shell once — inputs must NOT be recreated on re-render
    // as that destroys the attached Google Autocomplete widgets.
    const alreadyExists = !!document.getElementById('ci-pickup');
    if (alreadyExists) {
      // Just sync the night halt chip and button state without touching inputs
      const chip = document.getElementById('ci-nighthalt-chip');
      if (chip) {
        chip.className = 'ci-chip' + (ciNightHalt ? ' active' : '');
        chip.querySelector('.chip-dot').style.background = ciNightHalt ? 'var(--gold)' : '';
      }
      updateCalcBtn();
      updateResultPanel();
      return null; // signal to caller: don't replace innerHTML
    }

    return `
      <div class="custom-builder" id="custom-builder-shell">
        <div class="ci-row">
          <div class="ci-field" id="field-pickup">
            <label>Pickup Location</label>
            <input id="ci-pickup" type="text" placeholder="e.g. ITC Maurya, New Delhi"
              autocomplete="new-password" autocorrect="off" autocapitalize="off"
              spellcheck="false" data-form-type="other" data-lpignore="true">
            <div class="ac-dropdown" id="ac-pickup" style="display:none"></div>
          </div>
          <div class="ci-field" id="field-drop">
            <label>Drop Location</label>
            <input id="ci-drop" type="text" placeholder="e.g. Taj Hotel, Agra"
              autocomplete="new-password" autocorrect="off" autocapitalize="off"
              spellcheck="false" data-form-type="other" data-lpignore="true">
            <div class="ac-dropdown" id="ac-drop" style="display:none"></div>
          </div>
        </div>
        <div class="ci-row">
          <div class="ci-field">
            <label>Special Requests / Intermediate Stops</label>
            <textarea id="ci-notes" placeholder="e.g. brief stop at Fatehpur Sikri en route to Jaipur"
              oninput="ciNotes=this.value"></textarea>
          </div>
          <div class="ci-field" style="justify-content:flex-end;">
            <label style="margin-bottom:10px;">Options</label>
            <div class="ci-options-row" style="flex-direction:column;gap:10px;margin-bottom:0;">
              <div id="ci-nighthalt-chip" class="ci-chip" onclick="toggleNightHalt()">
                <span class="chip-dot"></span>Night Halt Required (driver overnight — +₹800)
              </div>
            </div>
          </div>
        </div>
        <button id="ci-calc-btn" class="ci-calc-btn" onclick="calculateCustomRoute()" disabled>
          Calculate My Itinerary Estimate
        </button>
        <div id="ci-result-panel"></div>
      </div>`;
  }

  function toggleNightHalt() {
    ciNightHalt = !ciNightHalt;
    const chip = document.getElementById('ci-nighthalt-chip');
    if (chip) chip.className = 'ci-chip' + (ciNightHalt ? ' active' : '');
    // If we already have a result, recalculate with new night halt value
    if (ciResult && ciResult !== 'loading' && ciResult !== 'error' && ciPickupPlaceId && ciDropPlaceId) {
      ciResult = applyPricingLogic(ciResult.googleKm, ciPickup, ciDrop, ciNightHalt);
      updateResultPanel();
    }
  }

  function updateResultPanel() {
    const panel = document.getElementById('ci-result-panel');
    if (!panel) return;
    if (!ciResult) { panel.innerHTML = ''; return; }
    if (ciResult === 'loading') {
      panel.innerHTML = '<div class="ci-result"><div class="ci-loading">Calculating your route&hellip;</div></div>';
      return;
    }
    if (ciResult === 'error') {
      panel.innerHTML = '<div class="ci-error">⚠ ' + ciErrorMsg + '</div>';
      return;
    }
    const b = ciResult;
    panel.innerHTML = `
      <div class="ci-result">
        <div class="ci-result-header">
          <div class="ci-result-title">Your Itinerary Estimate</div>
          <div class="ci-result-route">${b.pickup} → ${b.drop} &nbsp;·&nbsp; ${b.googleKm} km (Google) → ${b.billableKm} km (billable)</div>
        </div>
        <div class="ci-breakdown">
          <div class="ci-line"><span class="ci-line-label">Distance (Google Maps)</span><span class="ci-line-val">${b.googleKm} km</span></div>
          <div class="ci-line" style="border-bottom:1px solid rgba(201,169,110,0.2);padding-bottom:10px;margin-bottom:4px;">
            <span class="ci-line-label" style="font-size:11px;line-height:1.5;">
              Commercial buffer +${b.buffer} km<br>
              <span style="opacity:0.6;font-size:10px;">Covers rerouting, traffic jams, hotel detours, waiting &amp; unplanned stops</span>
            </span>
            <span class="ci-line-val">${b.billableKm} km billable</span>
          </div>
          <div class="ci-line"><span class="ci-line-label">Distance charge (${b.billableKm} km × ₹18)</span><span class="ci-line-val">₹${b.distCharge.toLocaleString('en-IN')}</span></div>
          <div class="ci-line"><span class="ci-line-label">Toll charges (estimated)</span><span class="ci-line-val">₹${b.toll.toLocaleString('en-IN')}</span></div>
          ${b.nightHalt ? '<div class="ci-line"><span class="ci-line-label">Night halt — driver</span><span class="ci-line-val">₹800</span></div>' : ''}
          <div class="ci-line">
            <span class="ci-line-label" style="line-height:1.5;">Parking<br>
              <span style="font-size:10px;opacity:0.6;">Airport · sightseeing stops · overnight halts</span>
            </span>
            <span class="ci-line-val" style="color:#34D399;font-size:12px;text-align:right;line-height:1.4;">At Actuals<br>
              <span style="font-size:10px;opacity:0.7;">Receipt provided</span>
            </span>
          </div>
          <div class="ci-line ci-subtotal"><span class="ci-line-label">Subtotal</span><span class="ci-line-val">₹${b.subtotal.toLocaleString('en-IN')}</span></div>
          <div class="ci-line"><span class="ci-line-label">GST (5%)</span><span class="ci-line-val">₹${b.gst.toLocaleString('en-IN')}</span></div>
          <div class="ci-line ci-total"><span class="ci-line-label">Total Estimate</span><span class="ci-line-val">₹${b.total.toLocaleString('en-IN')}</span></div>
        </div>
        <div class="ci-disclaimer">
          Tolls billed at actuals with receipt. Parking charged at actuals only. Receipts provided for all parking charges collected.
          This estimate covers transportation costs only. Final amount may vary slightly based on actual route conditions.
        </div>
      </div>`;
  }

  // ── Pricing Engine ────────────────────────────────────────────────────────
  function applyPricingLogic(googleKm, pickupName, dropName, nightHalt) {
    // 1. Commercial buffer
    // Covers real-world deviations: hotel detours, rerouting, traffic jams,
    // wrong turns, customer stops, internal parking loops, route changes.
    let buffer;
    if (googleKm < 100)       buffer = 13;   // 10–15 km band
    else if (googleKm < 300)  buffer = 33;   // 25–40 km band
    else                      buffer = 55;   // 50–60 km band
    const billableKm = googleKm + buffer;

    // 2. Distance charge @ ₹18/km on buffered distance
    // ₹18/km is an all-in rate covering fuel, driver wages, and vehicle cost.
    const distCharge = billableKm * 18;

    // 3. Toll estimate — heuristic based on NH average
    // Actual tolls billed at actuals with receipt.
    const tollPerHundred = 220;
    const toll = Math.round((billableKm * tollPerHundred / 100) / 50) * 50;

    // 4. Parking — charged at ACTUALS only, with receipt
    // Applicable at: airport, sightseeing stops, overnight halts.
    // Shown as "At Actuals" in estimate — no upfront charge collected.
    const parking = 0; // collected against receipt only

    // 5. Night halt
    const nightCost = nightHalt ? 800 : 0;

    // 6. Subtotal
    const subtotal = distCharge + toll + nightCost;

    // 7. GST 5% on subtotal
    const gst = Math.round(subtotal * 0.05);

    // 8. Final total (parking excluded — actuals only)
    const total = subtotal + gst;

    return { pickup: pickupName, drop: dropName, googleKm, buffer, billableKm,
             distCharge, toll, nightHalt, subtotal, gst, total };
  }

  // ── Google Maps — full working implementation ────────────────────────────
  // Replace the value below with your actual Google Maps API key
  let acPickupTimer   = null;
  let acDropTimer     = null;
  let mapsApiLoaded   = false;
  let gmapsLoadCalled = false;

  // Called by the Maps JS API once it has fully loaded
  window.__ivoryMapsReady = function() {
    mapsApiLoaded = true;
    // If the custom builder is already visible, re-attach native autocomplete
    if (customMode) attachNativeAutocomplete();
  };

  var IVORY_MAPS_KEY = 'AIzaSyCSEJzPbWNptjtznWNncMmvutkklqkIXso';

  function loadMapsApi() {
    // If Google Maps already loaded (via embed script tag), use it
    if (window.google && window.google.maps) {
      mapsApiLoaded = true;
      if (customMode) attachNativeAutocomplete();
      return;
    }
    // Otherwise inject the script dynamically
    if (gmapsLoadCalled) return;
    gmapsLoadCalled = true;
    var s = document.createElement('script');
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + IVORY_MAPS_KEY + '&libraries=places&callback=__ivoryMapsReady';
    document.head.appendChild(s);
  }

  // ── Native google.maps.places.Autocomplete (most reliable approach) ───────
  // We attach one Autocomplete widget per input directly rather than using
  // AutocompleteService manually — this avoids the callback/status issues.
  let acPickupWidget = null;
  let acDropWidget   = null;

  function attachNativeAutocomplete() {
    const pickupEl = document.getElementById('ci-pickup');
    const dropEl   = document.getElementById('ci-drop');
    if (!pickupEl || !dropEl) return;
    if (!window.google || !google.maps || !google.maps.places) return;

    const opts = {
      componentRestrictions: { country: 'in' },
      fields: ['place_id', 'name', 'formatted_address', 'geometry']
    };

    // Pickup
    if (!acPickupWidget) {
      acPickupWidget = new google.maps.places.Autocomplete(pickupEl, opts);
      acPickupWidget.addListener('place_changed', () => {
        const p = acPickupWidget.getPlace();
        if (!p || !p.place_id) return;
        ciPickup        = p.name + (p.formatted_address ? ', ' + p.formatted_address : '');
        ciPickupPlaceId = p.place_id;
        ciPickupLatLng  = p.geometry ? p.geometry.location : null;
        updateCalcBtn();
      });
      // track manual typing to reset place_id if user edits after selecting
      pickupEl.addEventListener('input', () => {
        ciPickup = pickupEl.value;
        ciPickupPlaceId = null; ciPickupLatLng = null;
        updateCalcBtn();
      });
    }

    // Drop
    if (!acDropWidget) {
      acDropWidget = new google.maps.places.Autocomplete(dropEl, opts);
      acDropWidget.addListener('place_changed', () => {
        const p = acDropWidget.getPlace();
        if (!p || !p.place_id) return;
        ciDrop        = p.name + (p.formatted_address ? ', ' + p.formatted_address : '');
        ciDropPlaceId = p.place_id;
        ciDropLatLng  = p.geometry ? p.geometry.location : null;
        updateCalcBtn();
      });
      dropEl.addEventListener('input', () => {
        ciDrop = dropEl.value;
        ciDropPlaceId = null; ciDropLatLng = null;
        updateCalcBtn();
      });
    }
  }

  // Extra state for lat/lng (needed for Routes API)
  let ciPickupLatLng = null;
  let ciDropLatLng   = null;

  function updateCalcBtn() {
    const btn = document.getElementById('ci-calc-btn');
    if (btn) btn.disabled = !(ciPickupPlaceId && ciDropPlaceId);
  }

  // initAC is called after every render() when customMode is on
  function initAC() {
    if (mapsApiLoaded) {
      attachNativeAutocomplete();
    }
    // Close custom dropdowns on outside click (used in demo mode only)
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#field-pickup')) hideAC('pickup');
      if (!e.target.closest('#field-drop'))   hideAC('drop');
    });
  }

  // ── Demo-mode fallback (when no API key) ──────────────────────────────────
  function hideAC(which) {
    const el = document.getElementById('ac-' + which);
    if (el) el.style.display = 'none';
  }

  function ciPickupInput(val) {
    ciPickup = val; ciPickupPlaceId = null; ciPickupLatLng = null;
    updateCalcBtn();
    if (mapsApiLoaded) return; // native autocomplete handles it
    clearTimeout(acPickupTimer);
    acPickupTimer = setTimeout(() => showFallbackSuggestions(val, 'pickup'), 280);
  }

  function ciDropInput(val) {
    ciDrop = val; ciDropPlaceId = null; ciDropLatLng = null;
    updateCalcBtn();
    if (mapsApiLoaded) return;
    clearTimeout(acDropTimer);
    acDropTimer = setTimeout(() => showFallbackSuggestions(val, 'drop'), 280);
  }

  function showFallbackSuggestions(input, which) {
    if (!input || input.length < 2) { hideAC(which); return; }
    const DEMO = [
      {placeId:'demo1', main:'IGI Airport Terminal 3', secondary:'New Delhi'},
      {placeId:'demo2', main:'Taj Mahal', secondary:'Agra, Uttar Pradesh'},
      {placeId:'demo3', main:'Amber Fort', secondary:'Jaipur, Rajasthan'},
      {placeId:'demo4', main:'ITC Maurya', secondary:'Chanakyapuri, New Delhi'},
      {placeId:'demo5', main:'Oberoi Amarvilas', secondary:'Agra, Uttar Pradesh'},
      {placeId:'demo6', main:'Varanasi Cantt Railway Station', secondary:'Varanasi, Uttar Pradesh'},
      {placeId:'demo7', main:'Har-ki-Pauri', secondary:'Haridwar, Uttarakhand'},
      {placeId:'demo8', main:'Neemrana Fort Palace', secondary:'Alwar, Rajasthan'},
      {placeId:'demo9', main:'Ranthambore National Park', secondary:'Sawai Madhopur, Rajasthan'},
    ].filter(d =>
      d.main.toLowerCase().includes(input.toLowerCase()) ||
      d.secondary.toLowerCase().includes(input.toLowerCase())
    );
    const dropdown = document.getElementById('ac-' + which);
    if (!dropdown) return;
    if (!DEMO.length) { dropdown.style.display = 'none'; return; }
    dropdown.innerHTML = DEMO.map(item =>
      `<div class="ac-item" onmousedown="selectDemoPlace('${which}','${item.placeId}','${item.main}','${item.secondary}')">
        <div class="ac-main">${item.main}</div>
        <div class="ac-sub">${item.secondary}</div>
       </div>`
    ).join('');
    dropdown.style.display = 'block';
  }

  function selectDemoPlace(which, placeId, main, secondary) {
    const label = main + (secondary ? ', ' + secondary : '');
    if (which === 'pickup') { ciPickup = label; ciPickupPlaceId = placeId; }
    else                    { ciDrop   = label; ciDropPlaceId   = placeId; }
    hideAC(which);
    render();
  }

  // ── Distance calculation ──────────────────────────────────────────────────
  function calculateCustomRoute() {
    if (!ciPickupPlaceId || !ciDropPlaceId) return;
    ciResult = 'loading'; updateResultPanel();

    const isDemo = !mapsApiLoaded ||
                   !window.google ||
                   ciPickupPlaceId.startsWith('demo');

    if (isDemo) {
      const table = {
        demo1:{demo2:233,demo3:271,demo4:12,demo5:204,demo8:122,demo9:380},
        demo2:{demo1:233,demo3:241,demo4:204,demo5:2,demo9:340},
        demo3:{demo1:271,demo2:241,demo4:268,demo8:145,demo9:180},
        demo4:{demo1:12,demo2:204,demo3:268,demo8:120},
        demo7:{demo1:245,demo4:257},
        demo6:{demo1:820,demo4:800},
      };
      const km = (table[ciPickupPlaceId]||{})[ciDropPlaceId]
              || (table[ciDropPlaceId]||{})[ciPickupPlaceId]
              || Math.round(100 + Math.random() * 300);
      setTimeout(() => {
        ciResult = applyPricingLogic(km, ciPickup, ciDrop, ciNightHalt);
        updateResultPanel();
      }, 800);
      return;
    }

    // Live: use Distance Matrix API with Place IDs
    const svc = new google.maps.DistanceMatrixService();
    svc.getDistanceMatrix({
      origins:      [{ placeId: ciPickupPlaceId }],
      destinations: [{ placeId: ciDropPlaceId   }],
      travelMode:   google.maps.TravelMode.DRIVING,
      unitSystem:   google.maps.UnitSystem.METRIC,
    }, (response, status) => {
      if (status !== 'OK') {
        ciResult = 'error';
        ciErrorMsg = 'Could not reach Google Maps. Please check your connection and try again.';
        updateResultPanel(); return;
      }
      const el = response.rows[0].elements[0];
      if (el.status !== 'OK') {
        ciResult = 'error';
        ciErrorMsg = 'No drivable route found between these two locations. Please verify the addresses.';
        updateResultPanel(); return;
      }
      const km = Math.round(el.distance.value / 1000);
      ciResult = applyPricingLogic(km, ciPickup, ciDrop, ciNightHalt);
      updateResultPanel();
    });
  }


  // ── Helpers ───────────────────────────────────────────────────────────────
  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  const DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  function fmtDate(d) {
    if (!d) return '—';
    return d.getDate() + ' ' + MONTHS[d.getMonth()].slice(0,3) + ' ' + d.getFullYear();
  }
  function nightsBetween(a, b) {
    if (!a || !b) return 0;
    return Math.round((b - a) / 86400000);
  }
  function isSameDay(a, b) {
    return a && b && a.toDateString() === b.toDateString();
  }
  function dateKey(d) { return d.toDateString(); }

  // ── Travel Details Section ────────────────────────────────────────────────
  function travelDetailsSection() {
    const today = new Date(); today.setHours(0,0,0,0);
    const year  = tdCalYear;
    const month = tdCalMonth;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const nights = nightsBetween(tdStart, tdEnd);
    const datesSet = tdStart && tdEnd;
    const isDayTour = activeTourId !== null && DESTINATIONS.dayTours.some(function(t){ return t.id === activeTourId; });

    // Build calendar days
    let calCells = '';
    DAYS.forEach(d => { calCells += `<div class="cal-dow">${d}</div>`; });
    for (let i = 0; i < firstDay; i++) calCells += `<div class="cal-empty"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isPast = date < today;
      const isToday = isSameDay(date, today);
      const isCI = tdStart && isSameDay(date, tdStart);
      const isCO = tdEnd && isSameDay(date, tdEnd);
      const inRange = tdStart && tdEnd && date > tdStart && date < tdEnd;
      let cls = 'cal-day';
      if (isPast)   cls += ' cal-past';
      if (isToday)  cls += ' cal-today';
      if (isCI)     cls += ' cal-start';
      if (isCO)     cls += ' cal-end';
      if (inRange)  cls += ' cal-in-range';
      calCells += `<div class="${cls}" onclick="calClick(${year},${month},${d})">${d}</div>`;
    }

    const statusPill = datesSet
      ? `<div class="td-gate-pill complete">✓ Dates Confirmed</div>`
      : `<div class="td-gate-pill">Dates Required</div>`;

    const summaryBar = tdConfirmed ? `
      <div class="td-summary-bar">
        <div class="td-sum-item"><div class="td-sum-lbl">Tour Start</div><div class="td-sum-val">${fmtDate(tdStart)}</div></div>
        <div class="td-sum-item"><div class="td-sum-lbl">Tour End</div><div class="td-sum-val">${fmtDate(tdEnd)}</div></div>
        <div class="td-sum-item"><div class="td-sum-lbl">Duration</div><div class="td-sum-val">${nights} Night${nights!==1?'s':''}</div></div>
        ${tdGroupType ? `<div class="td-sum-item"><div class="td-sum-lbl">Travelling As</div><div class="td-sum-val" style="text-transform:capitalize">${tdGroupType}</div></div>` : ''}
        ${tdFirstIndia !== null ? `<div class="td-sum-item"><div class="td-sum-lbl">First Visit</div><div class="td-sum-val">${tdFirstIndia ? 'Yes — First Time' : 'Returning Traveller'}</div></div>` : ''}
        <button onclick="tdConfirmed=false;render()" style="margin-left:auto;background:none;border:1px solid rgba(201,169,110,0.4);color:var(--gold);padding:6px 14px;border-radius:20px;cursor:pointer;font-size:11px;letter-spacing:1px;">Edit Dates</button>
      </div>` : '';

    if (tdConfirmed) return summaryBar;

    const tagList = [
      {id:'honeymoon',    icon:'🌹', label:'Honeymoon'},
      {id:'anniversary',  icon:'💍', label:'Anniversary'},
      {id:'birthday',     icon:'🎂', label:'Birthday'},
      {id:'familytrip',   icon:'👨‍👩‍👧', label:'Family Trip'},
      {id:'medical',      icon:'🏥', label:'Medical Visit'},
      {id:'pilgrimage',   icon:'🙏', label:'Pilgrimage'},
    ];

    return `
      <div class="td-gate-banner">
        <div>
          <div class="td-gate-label">When are you visiting?</div>
          <div class="td-gate-sub">Select your travel dates to unlock all sections. Other details are optional but help us personalise your estimate.</div>
        </div>
        ${statusPill}
      </div>
      <div class="td-panel">
        <!-- Calendar -->
        <div class="cal-wrap">
          <div class="cal-header">
            <button class="cal-nav" onclick="calNav(-1)">‹</button>
            <div class="cal-month-label">${MONTHS[month]} ${year}</div>
            <button class="cal-nav" onclick="calNav(1)">›</button>
          </div>
          <div class="cal-grid">${calCells}</div>
          <div class="cal-selected-display">
            ${isDayTour ? `
            <div class="cal-sel-box" style="flex:2;">
              <div class="cal-sel-lbl">Tour Date</div>
              <div class="cal-sel-val">${fmtDate(tdStart)}</div>
            </div>
            <div class="cal-sel-box" style="flex:1;">
              <div class="cal-sel-lbl">Number of Days</div>
              <div style="display:flex;align-items:center;gap:0;border:1px solid var(--gold);border-radius:20px;overflow:hidden;margin-top:4px;">
                <button onclick="changeDayTourDays(-1)" style="background:rgba(201,169,110,0.1);border:none;color:var(--gold);width:30px;height:30px;font-size:16px;cursor:pointer;">&#8722;</button>
                <div style="min-width:52px;text-align:center;font-size:13px;font-weight:500;color:var(--ivory);background:rgba(0,0,0,0.3);padding:4px 2px;">${dayTourDays} Day${dayTourDays!==1?'s':''}</div>
                <button onclick="changeDayTourDays(1)" style="background:rgba(201,169,110,0.1);border:none;color:var(--gold);width:30px;height:30px;font-size:16px;cursor:pointer;">&#43;</button>
              </div>
            </div>
            ` : `
            <div class="cal-sel-box">
              <div class="cal-sel-lbl">Tour Start</div>
              <div class="cal-sel-val">${fmtDate(tdStart)}</div>
              ${tdStart && !tdEnd ? '<div class="cal-sel-nights" style="color:var(--gold)">Now select end date &#x2192;</div>' : ''}
            </div>
            <div class="cal-sel-box">
              <div class="cal-sel-lbl">Tour End</div>
              <div class="cal-sel-val">${fmtDate(tdEnd)}</div>
              ${datesSet ? '<div class="cal-sel-nights">' + nights + ' Night' + (nights!==1?'s':'') + '</div>' : ''}
            </div>
            `}
          </div></div>

        <!-- Flight info -->
        <div class="td-grid">
          <div class="td-field">
            <label>Arrival Flight Number</label>
            <input type="text" placeholder="e.g. AI 101" value="${tdArrFlight}"
              oninput="tdArrFlight=this.value" autocomplete="off" spellcheck="false">
          </div>
          <div class="td-field">
            <label>Departure Flight Number</label>
            <input type="text" placeholder="e.g. EK 512" value="${tdDepFlight}"
              oninput="tdDepFlight=this.value" autocomplete="off" spellcheck="false">
          </div>
        </div>

        <!-- Group type -->
        <div class="td-grid" style="margin-bottom:16px;">
          <div class="td-field">
            <label>Travelling As</label>
            <select onchange="tdGroupType=this.value">
              <option value="" ${!tdGroupType?'selected':''}>— Select —</option>
              <option value="solo"      ${tdGroupType==='solo'?'selected':''}>Solo Traveller</option>
              <option value="couple"    ${tdGroupType==='couple'?'selected':''}>Couple</option>
              <option value="family"    ${tdGroupType==='family'?'selected':''}>Family</option>
              <option value="friends"   ${tdGroupType==='friends'?'selected':''}>Friends Group</option>
              <option value="corporate" ${tdGroupType==='corporate'?'selected':''}>Corporate / MICE</option>
            </select>
          </div>
          <div class="td-field">
            <label>Have you visited India before?</label>
            <select onchange="tdFirstIndia=this.value==='yes'?false:this.value==='no'?true:null">
              <option value="" ${tdFirstIndia===null?'selected':''}>— Select —</option>
              <option value="no"  ${tdFirstIndia===true?'selected':''}>No — This is my first time</option>
              <option value="yes" ${tdFirstIndia===false?'selected':''}>Yes — I have visited before</option>
            </select>
          </div>
        </div>

        <!-- Special occasion tags -->
        <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;">Any Special Occasion? (Optional)</div>
        <div class="td-tags-row">
          ${tagList.map(t => `
            <div class="td-tag ${tdTags.has(t.id)?'active':''}" onclick="toggleTag('${t.id}')">
              <span class="td-tag-icon">${t.icon}</span>${t.label}
            </div>`).join('')}
        </div>
        ${tdFirstIndia === true ? `
        <div style="background:rgba(201,169,110,0.07);border:1px solid rgba(201,169,110,0.3);border-radius:8px;padding:14px 18px;margin:16px 0;font-size:13px;color:var(--ivory);line-height:1.65;">
          🇮🇳 <strong style="color:var(--gold);">Welcome to India!</strong> We will make sure your first experience is extraordinary.
          Our team will personally guide you through customs, cultural etiquette, and everything you need to know before you arrive.
        </div>` : ''}

        
        <!-- Day Tour Toggle -->
        <div style="background:rgba(201,169,110,0.06);border:1px solid rgba(201,169,110,0.35);border-radius:8px;padding:16px 18px;margin-bottom:16px;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
            <div>
              <div style="font-size:14px;color:#fff;font-weight:500;margin-bottom:3px;">This is a Day Tour</div>
              <div style="font-size:12px;color:rgba(245,240,232,0.55);line-height:1.5;">Tick this if you are taking a day excursion only — no overnight stay required.</div>
            </div>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
              <input type="checkbox" id="day-tour-checkbox" ${dayTourMode ? 'checked' : ''}
                onchange="toggleDayTourMode(this.checked)"
                style="width:18px;height:18px;accent-color:var(--gold);cursor:pointer;">
              <span style="font-size:13px;color:var(--gold);letter-spacing:1px;">Day Tour</span>
            </label>
          </div>
          ${dayTourMode ? `
          <div style="border-top:1px solid rgba(201,169,110,0.25);margin-top:14px;padding-top:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
            <div>
              <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:4px;">Number of Days</div>
              <div style="font-size:12px;color:rgba(245,240,232,0.5);">How many days will you spend on this tour?</div>
            </div>
            <div style="display:flex;align-items:center;border:1px solid var(--gold);border-radius:20px;overflow:hidden;">
              <button onclick="changeDayTourDays(-1)" style="background:rgba(201,169,110,0.1);border:none;color:var(--gold);width:34px;height:34px;font-size:18px;cursor:pointer;line-height:1;">&#8722;</button>
              <div style="min-width:64px;text-align:center;font-size:14px;font-weight:500;color:var(--ivory);background:rgba(0,0,0,0.3);padding:6px 4px;">${dayTourDays} Day${dayTourDays!==1?'s':''}</div>
              <button onclick="changeDayTourDays(1)" style="background:rgba(201,169,110,0.1);border:none;color:var(--gold);width:34px;height:34px;font-size:18px;cursor:pointer;line-height:1;">&#43;</button>
            </div>
          </div>
          ` : ''}
        </div>

        <button class="td-confirm-btn" onclick="confirmTravelDetails()" ${isDayTour ? (!tdStart?'disabled':'') : (!datesSet?'disabled':'')}>
          ${isDayTour ? (tdStart ? 'Confirm Tour Date & Continue →' : 'Please Select Your Tour Date Above') : (datesSet ? 'Confirm Travel Dates & Continue →' : 'Please Select Your Travel Dates Above')}
        </button>
      </div>`;
  }

  // ── Calendar handlers ─────────────────────────────────────────────────────
  function calNav(dir) {
    tdCalMonth += dir;
    if (tdCalMonth > 11) { tdCalMonth = 0;  tdCalYear++; }
    if (tdCalMonth < 0)  { tdCalMonth = 11; tdCalYear--; }
    render();
  }

  function calClick(y, m, d) {
    const clicked = new Date(y, m, d);
    const today   = new Date(); today.setHours(0,0,0,0);
    if (clicked < today) return;

    if (!tdStart || (tdStart && tdEnd)) {
      // Start fresh selection
      tdStart  = clicked;
      tdEnd = null;
    } else {
      // Second click — set checkout
      if (clicked <= tdStart) {
        tdStart  = clicked;
        tdEnd = null;
      } else {
        tdEnd = clicked;
      }
    }
    render();
  }

  function toggleTag(id) {
    tdTags.has(id) ? tdTags.delete(id) : tdTags.add(id);
    render();
  }

  function confirmTravelDetails() {
    var isDayTour = activeTourId !== null && DESTINATIONS.dayTours.some(function(t){ return t.id === activeTourId; });
    if (!tdStart) return;
    if (!isDayTour && !tdEnd) return;
    // For day tours set tdEnd = tdStart
    if (isDayTour) { tdEnd = new Date(tdStart); }
    tdConfirmed = true;
    render();
    // Scroll past the travel details to the tour sections
    setTimeout(() => {
      const heads = document.querySelectorAll('.section-head');
      if (heads.length > 1) heads[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }

  // ── Accommodation Section ─────────────────────────────────────────────────
  const HOTEL_TIERS = [
    { id:'3star', stars:'★★★',   label:'Comfort',     range:'₹3,000 – ₹8,000 / night',  minPrice:3000 },
    { id:'4star', stars:'★★★★',  label:'Premium',     range:'₹8,000 – ₹18,000 / night', minPrice:8000 },
    { id:'5star', stars:'★★★★★', label:'Luxury',      range:'₹18,000+ / night',          minPrice:18000 },
  ];

  // Curated fallback hotels per destination per tier (shown when SerpAPI not configured)
  const HOTEL_FALLBACK = {
    delhi: {
      '3star': [{name:'Hotel Bloomrooms',rating:3.8,price:4500},{name:'Ibis New Delhi',rating:3.7,price:5200},{name:'Hotel Alka Classic',rating:3.5,price:3800}],
      '4star': [{name:'The Lalit New Delhi',rating:4.3,price:12000},{name:'Radisson Blu Dwarka',rating:4.2,price:10500},{name:'Hyatt Regency Delhi',rating:4.4,price:14000}],
      '5star': [{name:'The Leela Palace New Delhi',rating:4.9,price:38000},{name:'ITC Maurya',rating:4.8,price:32000},{name:'The Oberoi New Delhi',rating:4.9,price:42000}],
    },
    agra: {
      '3star': [{name:'Hotel Atulyaa Taj',rating:3.8,price:4000},{name:'Hotel Sidhartha',rating:3.6,price:3500},{name:'Clarks Shiraz',rating:3.9,price:6000}],
      '4star': [{name:'Courtyard by Marriott Agra',rating:4.3,price:11000},{name:'Radisson Hotel Agra',rating:4.2,price:9500},{name:'ITC Mughal Agra',rating:4.5,price:16000}],
      '5star': [{name:'The Oberoi Amarvilas',rating:4.9,price:55000},{name:'Taj Hotel & Convention Centre',rating:4.7,price:28000},{name:'Kempinski Ambica',rating:4.6,price:22000}],
    },
    jaipur: {
      '3star': [{name:'Hotel Pearl Palace',rating:4.0,price:3500},{name:'Arya Niwas',rating:3.8,price:4000},{name:'Hotel Chirmi Palace',rating:3.7,price:4500}],
      '4star': [{name:'Jai Mahal Palace',rating:4.4,price:14000},{name:'Radisson Blu Jaipur',rating:4.2,price:10000},{name:'Holiday Inn Jaipur City',rating:4.1,price:9000}],
      '5star': [{name:'Rambagh Palace',rating:4.9,price:65000},{name:'The Oberoi Rajvilas',rating:4.9,price:58000},{name:'Fairmont Jaipur',rating:4.8,price:32000}],
    },
    varanasi: {
      '3star': [{name:'Hotel Surya',rating:3.7,price:3500},{name:'Alka Hotel',rating:3.6,price:3000},{name:'Hotel Ganges View',rating:3.8,price:4500}],
      '4star': [{name:'Ramada Plaza Varanasi',rating:4.2,price:9000},{name:'Radisson Hotel Varanasi',rating:4.3,price:10000},{name:'Taj Gateway Varanasi',rating:4.4,price:12000}],
      '5star': [{name:'Taj Nadesar Palace',rating:4.9,price:45000},{name:'Brijrama Palace',rating:4.8,price:38000},{name:'The Meridian Varanasi',rating:4.6,price:20000}],
    },
    amritsar: {
      '3star': [{name:'Hotel Marriott',rating:3.7,price:4000},{name:'Hotel CJ International',rating:3.6,price:3500},{name:'Hotel Ritz Plaza',rating:3.8,price:4500}],
      '4star': [{name:'Hyatt Amritsar',rating:4.5,price:12000},{name:'Radisson Blu Amritsar',rating:4.3,price:10000},{name:'Holiday Inn Amritsar',rating:4.2,price:9500}],
      '5star': [{name:'Taj Swarna Amritsar',rating:4.8,price:22000},{name:'ITC Welcome Hotel',rating:4.7,price:18000},{name:'Hyatt Regency Amritsar',rating:4.6,price:16000}],
    },
    shimla: {
      '3star': [{name:'Hotel Willow Banks',rating:3.8,price:4500},{name:'Hotel Dreamland',rating:3.6,price:3800},{name:'Toshali Royal View',rating:3.7,price:5000}],
      '4star': [{name:'The Oberoi Cecil',rating:4.7,price:18000},{name:'Radisson Hotel Shimla',rating:4.3,price:11000},{name:'Wildflower Hall',rating:4.8,price:28000}],
      '5star': [{name:'Wildflower Hall Shimla',rating:4.9,price:42000},{name:'The Oberoi Cecil',rating:4.8,price:32000},{name:'Chapslee Estate',rating:4.7,price:28000}],
    },
  };
  // Rishikesh (part of haridwar destination)
  HOTEL_FALLBACK['rishikesh'] = {
    '3star': [{name:'Zostel Rishikesh',rating:3.9,price:3500},{name:'Hotel Surya Rishikesh',rating:3.7,price:4000},{name:'Brijwasi Resort',rating:3.8,price:4500}],
    '4star': [{name:'Aloha on the Ganges',rating:4.4,price:11000},{name:'Atali Ganga',rating:4.5,price:14000},{name:'Ananda in the Himalayas',rating:4.7,price:22000}],
    '5star': [{name:'Ananda in the Himalayas',rating:4.9,price:45000},{name:'Taj Rishikesh Resort',rating:4.8,price:35000},{name:'The Westin Rishikesh',rating:4.7,price:28000}],
  };
  HOTEL_FALLBACK['haridwar'] = {
    '3star': [{name:'Hotel Ganga Kinare',rating:3.8,price:3500},{name:'Hotel Haveli Hari Ganga',rating:3.9,price:5000},{name:'Hotel Sagar Ganga',rating:3.6,price:3000}],
    '4star': [{name:'Radisson Blu Haridwar',rating:4.3,price:9500},{name:'Amara Resort Haridwar',rating:4.2,price:8500},{name:'Hotel Ganga Lahari',rating:4.1,price:7500}],
    '5star': [{name:'Haveli Hari Ganga',rating:4.8,price:18000},{name:'Hyatt Place Haridwar',rating:4.6,price:15000},{name:'Fiesta Resort Haridwar',rating:4.5,price:14000}],
  };
  // Manali (part of shimla destination)
  HOTEL_FALLBACK['manali'] = {
    '3star': [{name:'Snow Valley Resorts',rating:3.8,price:4500},{name:'Hotel Johnsons Manali',rating:3.9,price:5000},{name:'Hotel Rohtang View',rating:3.7,price:4000}],
    '4star': [{name:'Span Resort & Spa',rating:4.5,price:14000},{name:'Club Mahindra Manali',rating:4.3,price:12000},{name:'Manuallaya Resort',rating:4.4,price:15000}],
    '5star': [{name:'Manuallaya Spa Resort',rating:4.9,price:32000},{name:'The Himalayan Manali',rating:4.8,price:28000},{name:'Solang Valley Resorts',rating:4.7,price:22000}],
  };
  // Vrindavan (part of mathura destination)
  HOTEL_FALLBACK['vrindavan'] = {
    '3star': [{name:'Hotel Nidhivan Sarovar',rating:3.9,price:4000},{name:'Krishna Niwas',rating:3.7,price:3000},{name:'Hotel Radha Ashok',rating:3.6,price:3500}],
    '4star': [{name:'Nidhivan Sarovar Portico',rating:4.3,price:9000},{name:'ITC Welcome Hotel Vrindavan',rating:4.4,price:11000},{name:'Radha Brij Vasundhara',rating:4.2,price:8500}],
    '5star': [{name:'Shri Radha Brij Vasundhara',rating:4.8,price:20000},{name:'The Taj Kumarakom Vrindavan',rating:4.7,price:18000},{name:'Nidhivan Grand',rating:4.6,price:16000}],
  };
  HOTEL_FALLBACK['mathura'] = {
    '3star': [{name:'Hotel Gopi',rating:3.7,price:3000},{name:'Radha Ashok Hotel',rating:3.6,price:3500},{name:'Hotel Madhuvan',rating:3.8,price:4000}],
    '4star': [{name:'Nidhivan Sarovar Portico Mathura',rating:4.3,price:9000},{name:'Hotel Sheetal Regency',rating:4.1,price:7500},{name:'Crystal Sarovar Premiere',rating:4.2,price:8000}],
    '5star': [{name:'ITC Welcome Hotel Mathura',rating:4.7,price:16000},{name:'Radha Brij Vasundhara',rating:4.6,price:15000},{name:'The Westin Mathura',rating:4.5,price:14000}],
  };
  // Corbett and Golden Triangle use Delhi/Agra/Jaipur data
  HOTEL_FALLBACK['corbett'] = {
    '3star': [{name:"Jim's Jungle Retreat",rating:3.9,price:5000},{name:'Corbett Riverside Resort',rating:3.8,price:4500},{name:'Corbett Motel',rating:3.7,price:4000}],
    '4star': [{name:'Taj Corbett Resort & Spa',rating:4.6,price:18000},{name:'Riverview Retreat',rating:4.4,price:14000},{name:'Namah Corbett',rating:4.5,price:16000}],
    '5star': [{name:'Taj Corbett Resort',rating:4.9,price:35000},{name:'The Riverview Retreat',rating:4.8,price:28000},{name:'Aahana Resort Corbett',rating:4.7,price:22000}],
  };
  HOTEL_FALLBACK['golden'] = HOTEL_FALLBACK['delhi']; // placeholder — multi-city logic handles it

  function accommodationSection() {
    const tour   = activeTour();
    const isMulti = tour && MULTI_CITY_DESTS[tour.id];

    if (!tour) {
      return `<div class="hotel-no-dest">← Select a destination above to explore accommodation options</div>`;
    }

    if (dayTourMode) {
      return `<div class="hotel-no-dest" style="border-color:rgba(201,169,110,0.2);color:rgba(245,240,232,0.4);">Hotel arrangements for day tours are available on request — please add your preference in the notes section.</div>`;
    }

    if (isMulti) {
      return multiCityAccommodation(tour);
    }
    return singleCityAccommodation(tour);
  }

  // ── Single-city accommodation (Delhi, Agra, Jaipur, Varanasi, Amritsar, Corbett) ──
  function singleCityAccommodation(tour) {
    const nights = nightsBetween(tdStart, tdEnd);

    const tierCards = HOTEL_TIERS.map(t => `
      <div class="hotel-tier-card ${hotelTier === t.id ? 'active' : ''}" onclick="selectHotelTier('${t.id}')">
        <div class="hotel-tier-stars">${t.stars}</div>
        <div class="hotel-tier-label">${t.label}</div>
        <div class="hotel-tier-range">${t.range}</div>
      </div>`).join('');

    let hotelsHTML = '';
    if (!hotelTier) {
      hotelsHTML = `<div class="hotel-no-dest" style="border-style:dashed;margin-top:0;">Select a hotel category above to see options</div>`;
    } else if (hotelResults === 'loading') {
      hotelsHTML = `<div class="hotel-loading">Searching for the finest stays in ${tour.name}&hellip;</div>`;
    } else if (Array.isArray(hotelResults) && hotelResults.length) {
      hotelsHTML = hotelCardsHTML(hotelResults, nights, selectedHotel, 'selectHotel') + `
        <div class="hotel-serpapi-note">
          ${SERPAPI_KEY !== 'YOUR_SERPAPI_KEY' ? 'Live rates via Google Hotels · ' : 'Curated reference rates · '}
          Prices are indicative and subject to availability at time of booking.
        </div>`;
    } else {
      hotelsHTML = `<div class="hotel-no-dest">No hotel data available. Please contact us directly.</div>`;
    }

    return `
      <div class="hotel-context-bar">
        <div>
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ivory);margin-bottom:4px;">Selected Destination</div>
          <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:22px;color:#fff;">${tour.name}</div>
        </div>
        ${nights > 0 ? `<div style="text-align:right;">
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ivory);margin-bottom:4px;">Total Tour Nights</div>
          <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:22px;color:var(--gold);">${nights} Night${nights!==1?'s':''}</div>
        </div>` : ''}
      </div>
      <div class="hotel-tier-grid">${tierCards}</div>
      ${hotelsHTML}`;
  }

  // ── Multi-city accommodation ───────────────────────────────────────────────
  function multiCityAccommodation(tour) {
    const config  = MULTI_CITY_DESTS[tour.id];
    const nights  = nightsBetween(tdStart, tdEnd);
    const isSplit = config.cities.length === 2; // 2-city: guest picks preferred base

    let html = `
      <div class="hotel-context-bar">
        <div>
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ivory);margin-bottom:4px;">Multi-City Tour</div>
          <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:22px;color:#fff;">${config.label}</div>
        </div>
        ${nights > 0 ? `<div style="text-align:right;">
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ivory);margin-bottom:4px;">Total Tour Nights</div>
          <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:22px;color:var(--gold);">${nights} Night${nights!==1?'s':''}</div>
        </div>` : ''}
      </div>`;

    if (isSplit) {
      // 2-city: show note, ask guest to pick preferred base city, then choose hotel there
      const city = config.cities[0];
      html += `
        <div style="background:rgba(201,169,110,0.07);border:1px solid rgba(201,169,110,0.3);
             border-radius:8px;padding:14px 20px;margin-bottom:18px;font-size:13px;color:var(--ivory);line-height:1.65;">
          <strong style="color:var(--gold);">Preferred Base City</strong><br>
          ${city.note} — select your preferred city and then choose your hotel below.
        </div>
        <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;">
          ${config.cities.map(c => `
            <div onclick="setMultiCityBase('${tour.id}','${c.id}')"
              style="flex:1;min-width:140px;padding:16px;border-radius:8px;cursor:pointer;text-align:center;
                     border:1px solid ${(multiCityNote[tour.id]===c.id)?'var(--gold)':'rgba(201,169,110,0.4)'};
                     background:${(multiCityNote[tour.id]===c.id)?'rgba(201,169,110,0.14)':'var(--dark)'};
                     transition:all 0.2s;">
              <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:#fff;margin-bottom:4px;">${c.name}</div>
              ${(multiCityNote[tour.id]===c.id)?'<div style="font-size:11px;color:var(--gold);letter-spacing:1px;">✓ Selected</div>':''}
            </div>`).join('')}
        </div>`;

      const activeCity = multiCityNote[tour.id];
      if (activeCity) {
        const tier = multiCityTier[activeCity];
        const results = multiCityResults[activeCity];
        const selected = multiCitySelected[activeCity];
        html += `
          <div class="hotel-tier-grid">
            ${HOTEL_TIERS.map(t => `
              <div class="hotel-tier-card ${tier === t.id ? 'active' : ''}" onclick="selectMultiCityTier('${activeCity}','${t.id}')">
                <div class="hotel-tier-stars">${t.stars}</div>
                <div class="hotel-tier-label">${t.label}</div>
                <div class="hotel-tier-range">${t.range}</div>
              </div>`).join('')}
          </div>`;
        if (!tier) {
          html += `<div class="hotel-no-dest" style="border-style:dashed;">Select a hotel category above</div>`;
        } else if (results === 'loading') {
          html += `<div class="hotel-loading">Searching stays in ${activeCity.charAt(0).toUpperCase()+activeCity.slice(1)}&hellip;</div>`;
        } else if (Array.isArray(results) && results.length) {
          html += hotelCardsHTML(results, nights, selected, `selectMultiCityHotel_${activeCity}`);
          html += `<div class="hotel-serpapi-note">Curated reference rates · Subject to availability at time of booking.</div>`;
        }
      }
    } else {
      // 3-city (Golden Triangle): show all 3 cities, each with its own tier + hotel selection
      config.cities.forEach(city => {
        const tier     = multiCityTier[city.id];
        const results  = multiCityResults[city.id];
        const selected = multiCitySelected[city.id];

        html += `
          <div style="margin-bottom:30px;">
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
              <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:20px;color:#fff;">${city.name}</div>
              ${selected ? `<div style="font-size:11px;color:var(--green);letter-spacing:1px;">✓ ${selected.name}</div>` : ''}
            </div>
            <div class="hotel-tier-grid">
              ${HOTEL_TIERS.map(t => `
                <div class="hotel-tier-card ${tier === t.id ? 'active' : ''}" onclick="selectMultiCityTier('${city.id}','${t.id}')">
                  <div class="hotel-tier-stars">${t.stars}</div>
                  <div class="hotel-tier-label">${t.label}</div>
                  <div class="hotel-tier-range">${t.range}</div>
                </div>`).join('')}
            </div>
            ${!tier ? `<div class="hotel-no-dest" style="border-style:dashed;margin-top:14px;">Select a category for ${city.name}</div>` :
              results === 'loading' ? `<div class="hotel-loading">Finding stays in ${city.name}&hellip;</div>` :
              Array.isArray(results) && results.length ?
                hotelCardsHTML(results, null, selected, `selectMultiCityHotel_${city.id}`) +
                `<div class="hotel-serpapi-note" style="margin-top:10px;">Curated reference rates · Subject to availability.</div>`
              : `<div class="hotel-no-dest">No data — contact us directly.</div>`
            }
          </div>`;
      });
    }
    return html;
  }

  // ── Shared hotel cards renderer ───────────────────────────────────────────
  function hotelCardsHTML(hotels, nights, selectedH, handlerName) {
    return `<div class="hotel-results-grid" style="margin-top:14px;">
      ${hotels.map(h => {
        const isSelected = selectedH && selectedH.name === h.name;
        const stars = '★'.repeat(Math.min(5, Math.round(h.rating)));
        const totalCost = nights && nights > 0 ? h.price * nights : null;
        return `
          <div class="hotel-card ${isSelected ? 'selected' : ''}"
               onclick="${handlerName}(${JSON.stringify(h).replace(/"/g,'&quot;')})">
            <div class="hotel-name">${h.name}</div>
            <div class="hotel-rating">
              <span class="hotel-rating-stars">${stars}</span>
              <span>${h.rating} / 5</span>
            </div>
            <div class="hotel-price">₹${h.price.toLocaleString('en-IN')}</div>
            <div class="hotel-price-sub">per room / per night</div>
            ${totalCost ? `<div class="hotel-total-cost">
              ${nights} night${nights!==1?'s':''} ·
              <strong style="color:var(--gold)">₹${totalCost.toLocaleString('en-IN')} total</strong>
            </div>` : ''}
          </div>`;
      }).join('')}
    </div>`;
  }


  // ── Single-city handlers ──────────────────────────────────────────────────
  function selectHotelTier(tier) {
    iaTrack('hotel_tier_selected', { tier: tier, destination: activeTourId });
    hotelTier     = tier;
    hotelResults  = 'loading';
    selectedHotel = null;
    render();
    fetchHotels(activeTour().id, tier, (results) => {
      hotelResults = results;
      render();
    });
  }

  function selectHotel(h) {
    selectedHotel = (selectedHotel && selectedHotel.name === h.name) ? null : h;
    render();
  }

  // ── Multi-city handlers ────────────────────────────────────────────────────
  function setMultiCityBase(tourId, cityId) {
    multiCityNote[tourId] = cityId;
    render();
  }

  function selectMultiCityTier(cityId, tier) {
    multiCityTier[cityId]    = tier;
    multiCityResults[cityId] = 'loading';
    multiCitySelected[cityId] = null;
    render();
    fetchHotels(cityId, tier, (results) => {
      multiCityResults[cityId] = results;
      render();
    });
  }

  // Dynamic handler dispatcher for hotel card clicks in multi-city mode
  // Called as selectMultiCityHotel_<cityId>(hotelObj) from onclick
  ['delhi','agra','jaipur','shimla','manali','haridwar','rishikesh','mathura','vrindavan'].forEach(cityId => {
    window['selectMultiCityHotel_' + cityId] = function(h) {
      multiCitySelected[cityId] = (multiCitySelected[cityId] && multiCitySelected[cityId].name === h.name) ? null : h;
      render();
    };
  });

  // ── Unified fetch function ────────────────────────────────────────────────
  function fetchHotels(destId, tier, callback) {
    if (SERPAPI_KEY && SERPAPI_KEY !== 'YOUR_SERPAPI_KEY') {
      const cityName = {
        delhi:'New Delhi',agra:'Agra',jaipur:'Jaipur',varanasi:'Varanasi',
        amritsar:'Amritsar',shimla:'Shimla',manali:'Manali',haridwar:'Haridwar',
        rishikesh:'Rishikesh',mathura:'Mathura',vrindavan:'Vrindavan',corbett:'Jim Corbett'
      }[destId] || destId;
      const stars = tier.replace('star','');
      const query = encodeURIComponent(stars + ' star hotels in ' + cityName + ' India');
      const ci = tdStart  ? tdStart.toISOString().slice(0,10)  : '';
      const co = tdEnd    ? tdEnd.toISOString().slice(0,10)    : '';
      const url = 'https://serpapi.com/search.json?engine=google_hotels&q=' + query
                + '&check_in_date=' + ci + '&check_out_date=' + co
                + '&currency=INR&gl=in&hl=en&api_key=' + SERPAPI_KEY;
      fetch(url)
        .then(r => r.json())
        .then(data => {
          const props = (data.properties || []).slice(0, 6).map(p => ({
            name:   p.name,
            rating: p.overall_rating || 4.0,
            price:  p.rate_per_night ? parseInt(p.rate_per_night.lowest.replace(/[^0-9]/g,'')) : 10000,
            link:   p.link || ''
          }));
          callback(props.length ? props : getFallback(destId, tier));
        })
        .catch(() => callback(getFallback(destId, tier)));
      return;
    }
    // Fallback with slight delay for UX
    setTimeout(() => callback(getFallback(destId, tier)), 500);
  }

  function getFallback(destId, tier) {
    const dest = HOTEL_FALLBACK[destId] || HOTEL_FALLBACK['delhi'];
    return (dest[tier] || dest['4star'] || []);
  }
  // ── Event handlers ────────────────────────────────────────────────────────
  function selectTour(id) {
    if (id && id !== activeTourId) { iaTrack('destination_selected', { destination: id }); }
    activeTourId = (activeTourId === id) ? null : id;
    activeAncils = [];
    activeTierId = null;
    activePax    = null;
    hotelTier    = null;
    hotelResults = null;
    selectedHotel = null;
    multiCityTier = {}; multiCityResults = {}; multiCitySelected = {}; multiCityNote = {};
    render();
  }

  function toggleAncil(name) {
    activeAncils.includes(name)
      ? activeAncils.splice(activeAncils.indexOf(name), 1)
      : activeAncils.push(name);
    render();
  }

  function changeDays(id, delta) {
    tourDays[id] = Math.max(1, (tourDays[id] || 1) + delta);
    render();
  }

  function changeDayTourDays(delta) {
    dayTourDays = Math.max(1, dayTourDays + delta);
    render();
  }

  function toggleDayTourMode(on) {
    dayTourMode  = on;
    dayTourDays  = 1;
  var dayTourMode   = false;  // customer ticked Day Tour
    // Clear hotel selections when switching to day tour
    if (on) {
      hotelTier     = null;
      hotelResults  = null;
      selectedHotel = null;
      multiCityTier = {}; multiCityResults = {}; multiCitySelected = {};
    }
    render();
  }

  function selectTier(id) {
    activeTierId = (activeTierId === id) ? null : id;
    activePax    = null;
    render();
  }

  function selectPax(pax) {
    activePax = (activePax === pax) ? null : pax;
    render();
  }

  function selectGuide(id) {
    guideChoice = (guideChoice === id) ? null : id;
    render();
  }

  function toggleAirport(id) {
    airportSvcs.has(id) ? airportSvcs.delete(id) : airportSvcs.add(id);
    render();
  }

  function toggleCustomMode(on) {
    if (on) iaTrack('custom_itinerary_started');
    customMode = on;
    if (on) {
      activeTourId = null; activeAncils = []; activeTierId = null;
      activePax = null; guideChoice = null; airportSvcs = new Set();
      ciPickup = ''; ciDrop = ''; ciPickupPlaceId = null; ciDropPlaceId = null;
      ciPickupLatLng = null; ciDropLatLng = null; ciResult = null;
      acPickupWidget = null; acDropWidget = null;
      loadMapsApi();
    }
    render();
  }





  // ── Pricing Summary & Currency Module ─────────────────────────────────────
  // ============================================================
  // IVORY ARC — PRICING SUMMARY & CURRENCY MODULE
  // Version 1.0 — Master Build Integration Candidate
  // ============================================================

  // ── Currency State ────────────────────────────────────────────
  var activeCurrency  = 'INR';   // 'INR' | 'USD' | 'EUR'
  var fxRates         = { USD: null, EUR: null };
  var fxFetchedAt     = null;    // Date object
  var fxLoading       = false;
  var fxError         = false;

  // Hotel tier midpoints (per night per room)
  var HOTEL_MIDPOINTS = { '3star': 5500, '4star': 13000, '5star': 35000 };

  // Exact pax from pax selection
  var PAX_MAP = {
    'Solo': 1, '2 People': 2, '3 People': 3, '4 People': 4,
    '5 People': 5, '6 People': 6, '7 People': 7, '8 People': 8,
    '9 People': 9, '10 People': 10
  };

  // Fallback pax if exact not selected
  var TIER_DEFAULT_PAX = { t1: 1, t2: 3, t3: 5, t4: 7 };

  // ── FX Rate Fetcher (Frankfurter API — no key needed) ─────────
  function fetchFxRates(onDone) {
    if (fxLoading) return;
    fxLoading = true;
    fxError   = false;

    // Try Frankfurter first (ECB rates, no key needed)
    // Fallback to open.er-api.com if Frankfurter fails
    function tryFrankfurter() {
      return fetch('https://api.frankfurter.app/latest?from=INR&to=USD,EUR')
        .then(function(r) {
          if (!r.ok) throw new Error('frankfurter ' + r.status);
          return r.json();
        })
        .then(function(data) {
          if (!data.rates || !data.rates.USD) throw new Error('bad data');
          fxRates.USD = data.rates.USD;
          fxRates.EUR = data.rates.EUR;
          return true;
        });
    }

    function tryOpenER() {
      // open.er-api.com returns rates FROM USD - we need to convert
      return fetch('https://open.er-api.com/v6/latest/USD')
        .then(function(r) {
          if (!r.ok) throw new Error('open-er ' + r.status);
          return r.json();
        })
        .then(function(data) {
          if (!data.rates || !data.rates.INR) throw new Error('bad data');
          // Convert: 1 USD = X INR, so 1 INR = 1/X USD
          var usdPerInr = 1 / data.rates.INR;
          var eurPerInr = data.rates.EUR / data.rates.INR;
          fxRates.USD = parseFloat(usdPerInr.toFixed(6));
          fxRates.EUR = parseFloat(eurPerInr.toFixed(6));
          return true;
        });
    }

    tryFrankfurter()
      .catch(function() { return tryOpenER(); })
      .then(function() {
        fxFetchedAt = new Date();
        fxLoading   = false;
        fxError     = false;
        renderPricingSummary();
        if (onDone) onDone(true);
      })
      .catch(function(err) {
        console.warn('Ivory Arc: FX fetch failed:', err.message);
        fxLoading = false;
        fxError   = true;
        renderPricingSummary();
        if (onDone) onDone(false);
      });
  }

  // ── Currency conversion ───────────────────────────────────────
  function convertFromINR(amountINR) {
    if (activeCurrency === 'USD' && fxRates.USD) return amountINR * fxRates.USD;
    if (activeCurrency === 'EUR' && fxRates.EUR) return amountINR * fxRates.EUR;
    return amountINR;
  }

  function formatCurrency(amountINR) {
    var converted = convertFromINR(amountINR);
    if (activeCurrency === 'USD') {
      return '$' + converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
    if (activeCurrency === 'EUR') {
      return '\u20ac' + converted.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
    return '\u20b9' + amountINR.toLocaleString('en-IN');
  }

  function fxRateLabel() {
    if (activeCurrency === 'INR') return '';
    var rate = activeCurrency === 'USD' ? fxRates.USD : fxRates.EUR;
    if (!rate) return '';
    var sym  = activeCurrency === 'USD' ? '$' : '\u20ac';
    var rateStr = (activeCurrency === 'USD')
      ? ('1 INR = ' + sym + rate.toFixed(4))
      : ('1 INR = ' + sym + rate.toFixed(4));
    var fetchTime = fxFetchedAt
      ? fxFetchedAt.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', timeZoneName:'short' })
      : '';
    return rateStr + (fetchTime ? '  \u00b7  Rate as of ' + fetchTime : '');
  }

  // ── Core Pricing Calculator ───────────────────────────────────
  function calculateTotalEstimate() {
    // Returns null if not enough info, otherwise a detailed breakdown object

    var tour = activeTourId
      ? [].concat(DESTINATIONS.dayTours, DESTINATIONS.multiDay)
          .find(function(t) { return t.id === activeTourId; })
      : null;

    if (!tour) return null;

    // ── Pax count ──
    var pax = (activePax && PAX_MAP[activePax])
      ? PAX_MAP[activePax]
      : (activeTierId ? TIER_DEFAULT_PAX[activeTierId] : null);

    if (!pax) return null;

    // ── Tour days ──
    var days = dayTourMode ? dayTourDays : (tourDays[tour.id] || 1);

    // ── Base rate per person per day ──
    var tierKey = activeTierId || 't1';
    var tierPrices = TIER_PRICES[tour.id];
    if (!tierPrices) return null;
    var baseRatePerPersonPerDay = tierPrices[tierKey];

    // ── 1. Base tour cost ──
    var baseTourCost = baseRatePerPersonPerDay * pax * days;

    var lines = [];
    lines.push({
      label:   tour.name + ' base rate',
      detail:  '\u20b9' + baseRatePerPersonPerDay.toLocaleString('en-IN') + ' \u00d7 ' + pax + (pax===1?' person':' people') + ' \u00d7 ' + days + (days===1?' day':' days'),
      amount:  baseTourCost,
      caveat:  null
    });

    // ── 2. Ancillaries ──
    var ancilTotal = 0;
    if (activeAncils && activeAncils.length) {
      var allAncils = [];
      if (tour.ancils) {
        tour.ancils.forEach(function(a) { allAncils.push(a); });
      }

      activeAncils.forEach(function(name) {
        var ancil = allAncils.find(function(a) { return a.name === name; });
        if (!ancil || ancil.price === 0) return; // included, skip

        var cost = 0;
        var detail = '';

        if (ancil.type === 'per person') {
          cost   = ancil.price * pax;
          detail = '\u20b9' + ancil.price.toLocaleString('en-IN') + ' \u00d7 ' + pax + (pax===1?' person':' people');
        } else if (ancil.type === 'per group') {
          cost   = ancil.price;
          detail = '\u20b9' + ancil.price.toLocaleString('en-IN') + ' flat (group)';
        }

        ancilTotal += cost;
        lines.push({
          label:  ancil.name,
          detail: detail,
          amount: cost,
          caveat: null
        });
      });
    }

    // ── 3. Guide adjustment ──
    // Applied to total tour cost built so far (base + ancils), not per person
    var guideCost = 0;
    var guideLine = null;
    if (guideChoice === 'english') {
      // Already included — no adjustment, note only
      guideLine = {
        label:  'English Speaking Guide',
        detail: 'Included in base rate',
        amount: 0,
        caveat: null
      };
    } else if (guideChoice === 'none') {
      guideCost = -2000;
      guideLine = {
        label:  'No Guide — deduction',
        detail: '\u20b9' + Math.abs(guideCost).toLocaleString('en-IN') + ' deducted from total tour cost',
        amount: guideCost,
        caveat: null
      };
    } else if (guideChoice === 'other') {
      guideCost = 1000;
      guideLine = {
        label:  'Other Language Guide',
        detail: '\u20b9' + guideCost.toLocaleString('en-IN') + ' added to total tour cost',
        amount: guideCost,
        caveat: 'Subject to guide availability — final confirmation provided at time of booking.'
      };
    }
    if (guideLine) lines.push(guideLine);

    // ── 4. Airport services ──
    var airportCost = 0;
    var airportItems = [
      { id: 'pickup',    label: 'Airport Pickup & Hotel Drop',  flat: 1500 },
      { id: 'porterage', label: 'Porterage',                    flat: 800  },
      { id: 'waiting',   label: 'Arrivals Waiting Service',     flat: 300  },
    ];
    airportItems.forEach(function(svc) {
      if (airportSvcs && airportSvcs.has(svc.id)) {
        airportCost += svc.flat;
        lines.push({
          label:  svc.label,
          detail: '\u20b9' + svc.flat.toLocaleString('en-IN') + ' flat — all inclusive',
          amount: svc.flat,
          caveat: null
        });
      }
    });

    // ── 5. Hotel cost ──
    var hotelCost = 0;
    var hotelLine = null;
    var nights    = nightsBetween(tdStart, tdEnd) || days;

    // Single city
    if (selectedHotel && selectedHotel.price) {
      hotelCost = selectedHotel.price * nights;
      hotelLine = {
        label:  selectedHotel.name,
        detail: '\u20b9' + selectedHotel.price.toLocaleString('en-IN') + '/night \u00d7 ' + nights + (nights===1?' night':' nights'),
        amount: hotelCost,
        caveat: 'Hotel rate based on availability at time of booking. Any increase will be communicated in advance and charged accordingly. Should rates fall, the difference will be refunded in full.'
      };
    } else if (hotelTier && HOTEL_MIDPOINTS[hotelTier]) {
      var mid = HOTEL_MIDPOINTS[hotelTier];
      var tierName = { '3star':'3-Star Comfort', '4star':'4-Star Premium', '5star':'5-Star Luxury' }[hotelTier];
      hotelCost = mid * nights;
      hotelLine = {
        label:  tierName + ' Accommodation',
        detail: '\u20b9' + mid.toLocaleString('en-IN') + ' avg/night \u00d7 ' + nights + (nights===1?' night':' nights'),
        amount: hotelCost,
        caveat: 'Estimated at mid-range for ' + tierName + ' properties. We will arrange the best available option within this tier. Any rate difference will be communicated before confirmation — overpayments refunded in full.'
      };
    }

    // Multi-city hotels
    var multiHotelCost = 0;
    var multiHotelLines = [];
    if (multiCitySelected) {
      Object.keys(multiCitySelected).forEach(function(city) {
        var h = multiCitySelected[city];
        if (h && h.price) {
          var cost = h.price * nights;
          multiHotelCost += cost;
          multiHotelLines.push({
            label:  h.name + ' (' + city.charAt(0).toUpperCase() + city.slice(1) + ')',
            detail: '\u20b9' + h.price.toLocaleString('en-IN') + '/night \u00d7 ' + nights + (nights===1?' night':' nights'),
            amount: cost,
            caveat: 'Hotel rate based on availability. Rate changes communicated in advance — overpayments refunded in full.'
          });
        }
      });
    }

    if (hotelLine) lines.push(hotelLine);
    multiHotelLines.forEach(function(l) { lines.push(l); });
    hotelCost += multiHotelCost;

    // ── 6. Subtotal before GST ──
    var subtotal = baseTourCost + ancilTotal + guideCost + airportCost + hotelCost;

    // ── 7. GST 5% ──
    var gst = Math.round(subtotal * 0.05);

    // ── 8. Grand total ──
    var grandTotal = subtotal + gst;

    // ── 9. Per person total ──
    var perPerson = Math.round(grandTotal / pax);

    return {
      lines:        lines,
      pax:          pax,
      days:         days,
      nights:       nights,
      subtotal:     subtotal,
      gst:          gst,
      grandTotal:   grandTotal,
      perPerson:    perPerson,
      tourName:     tour.name,
      hasHotel:     hotelCost > 0,
      hotelTierUsed: !selectedHotel && hotelTier,
    };
  }

  // ── Currency Selector HTML ────────────────────────────────────
  function currencySelectorHTML() {
    var currencies = [
      { code: 'INR', symbol: '\u20b9', label: 'INR' },
      { code: 'USD', symbol: '$',      label: 'USD' },
      { code: 'EUR', symbol: '\u20ac', label: 'EUR' },
    ];
    var btns = currencies.map(function(c) {
      var active = activeCurrency === c.code;
      return '<button onclick="setCurrency(\'' + c.code + '\')" ' +
        'style="padding:7px 18px;border-radius:20px;border:1px solid ' +
        (active ? 'var(--gold);background:var(--gold);color:var(--black);font-weight:700;' : 'rgba(201,169,110,0.4);background:transparent;color:var(--ivory);') +
        'font-family:\'DM Sans\',sans-serif;font-size:13px;cursor:pointer;transition:all 0.2s;">' +
        c.symbol + ' ' + c.label + '</button>';
    }).join('');

    var rateInfo = '';
    if (activeCurrency !== 'INR') {
      if (fxLoading) {
        rateInfo = '<div style="font-size:11px;color:var(--gold);margin-top:8px;">Fetching live exchange rate...</div>';
      } else if (fxError) {
        rateInfo = '<div style="font-size:11px;color:var(--red);margin-top:8px;">Could not fetch live rate. Showing INR pricing.</div>';
      } else if (fxFetchedAt) {
        rateInfo = '<div style="font-size:11px;color:rgba(245,240,232,0.5);margin-top:8px;">' + fxRateLabel() + ' (European Central Bank via Frankfurter API)</div>';
      }
    }

    return '<div style="display:flex;flex-direction:column;gap:0;">' +
      '<div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:8px;">Display Currency</div>' +
      '<div style="display:flex;gap:8px;">' + btns + '</div>' +
      rateInfo +
      '</div>';
  }

  function setCurrency(code) {
    activeCurrency = code;
    if (code !== 'INR' && !fxRates[code]) {
      fxLoading = true;
      renderPricingSummary();
      fetchFxRates(function() { renderPricingSummary(); });
    } else {
      renderPricingSummary();
    }
  }

  // ── Main Pricing Summary Renderer ────────────────────────────
  function renderPricingSummary() {
    var el = document.getElementById('ivory-pricing-summary');
    if (!el) return;

    var calc = calculateTotalEstimate();

    if (!calc) {
      el.innerHTML =
        '<div style="background:var(--dark);border:1px solid rgba(201,169,110,0.3);border-radius:10px;padding:28px 24px;">' +
          '<div style="font-size:13px;color:rgba(245,240,232,0.4);text-align:center;letter-spacing:1px;">' +
            'Select a destination and group size above to see your full cost breakdown' +
          '</div>' +
        '</div>';
      return;
    }

    // Build breakdown rows
    var rowsHTML = '';
    calc.lines.forEach(function(line) {
      var amtColour = line.amount < 0 ? 'var(--red)' : 'var(--gold)';
      var amtSign   = line.amount < 0 ? '- ' : (line.amount === 0 ? '' : '');
      var amtDisplay = line.amount === 0
        ? '<span style="color:var(--green);font-size:12px;font-weight:600;">Included</span>'
        : '<span style="color:' + amtColour + ';font-weight:500;">' +
            (line.amount < 0 ? '- ' : '') + formatCurrency(Math.abs(line.amount)) +
          '</span>';

      rowsHTML +=
        '<div style="padding:10px 0;border-bottom:1px solid rgba(201,169,110,0.1);">' +
          '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px;">' +
            '<div>' +
              '<div style="font-size:13px;color:var(--ivory);">' + line.label + '</div>' +
              '<div style="font-size:11px;color:rgba(245,240,232,0.45);margin-top:2px;">' + line.detail + '</div>' +
            '</div>' +
            '<div style="text-align:right;white-space:nowrap;">' + amtDisplay + '</div>' +
          '</div>' +
          (line.caveat
            ? '<div style="font-size:11px;color:rgba(245,240,232,0.38);font-style:italic;margin-top:5px;padding:6px 10px;border-left:2px solid rgba(201,169,110,0.3);line-height:1.55;">' + line.caveat + '</div>'
            : '') +
        '</div>';
    });

    // Subtotal
    rowsHTML +=
      '<div style="display:flex;justify-content:space-between;padding:12px 0 8px;border-top:1px solid rgba(201,169,110,0.25);margin-top:4px;">' +
        '<span style="font-size:13px;color:var(--ivory);font-weight:500;">Subtotal</span>' +
        '<span style="color:var(--gold);font-weight:500;">' + formatCurrency(calc.subtotal) + '</span>' +
      '</div>';

    // GST
    rowsHTML +=
      '<div style="display:flex;justify-content:space-between;padding:6px 0 8px;">' +
        '<div>' +
          '<span style="font-size:13px;color:var(--ivory);">GST (5%)</span>' +
          '<div style="font-size:10px;color:rgba(245,240,232,0.38);font-style:italic;margin-top:2px;">Applicable on all tour and ancillary services as per Govt. of India regulations.</div>' +
        '</div>' +
        '<span style="color:var(--gold);font-weight:500;white-space:nowrap;">' + formatCurrency(calc.gst) + '</span>' +
      '</div>';

    // Grand total
    rowsHTML +=
      '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:14px 0 4px;border-top:1.5px solid var(--gold);margin-top:4px;">' +
        '<div>' +
          '<div style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:18px;color:#fff;">Total Tour Cost</div>' +
          '<div style="font-size:11px;color:rgba(245,240,232,0.4);margin-top:2px;">For ' + calc.pax + (calc.pax===1?' person':' people') + '</div>' +
        '</div>' +
        '<div style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:28px;color:var(--gold);">' + formatCurrency(calc.grandTotal) + '</div>' +
      '</div>';

    // Per person
    rowsHTML +=
      '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:rgba(201,169,110,0.1);border-radius:8px;margin-top:10px;">' +
        '<div>' +
          '<div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);">Per Person</div>' +
          (calc.pax > 1 ? '<div style="font-size:11px;color:rgba(245,240,232,0.4);margin-top:2px;">' + formatCurrency(calc.grandTotal) + ' \u00f7 ' + calc.pax + ' people</div>' : '') +
        '</div>' +
        '<div style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:22px;color:var(--gold);">' + formatCurrency(calc.perPerson) + '<span style="font-size:13px;font-style:normal;margin-left:4px;opacity:0.7;">/ person</span></div>' +
      '</div>';

    // FX caveat if not INR
    var fxCaveat = '';
    if (activeCurrency !== 'INR' && fxFetchedAt) {
      fxCaveat =
        '<div style="font-size:11px;color:rgba(245,240,232,0.35);font-style:italic;text-align:center;margin-top:10px;line-height:1.55;padding:0 4px;">' +
          'Currency conversion is indicative and based on the European Central Bank rate fetched at ' + fxFetchedAt.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}) + ' IST. ' +
          'All payments will be settled in INR at the exchange rate prevailing on the date of transaction. ' +
          'Ivory Arc Travels does not guarantee any specific exchange rate.' +
        '</div>';
    }

    el.innerHTML =
      '<div style="background:var(--dark);border:1px solid var(--gold);border-radius:10px;overflow:hidden;">' +

        // Header
        '<div style="background:rgba(201,169,110,0.1);padding:16px 24px;border-bottom:1px solid rgba(201,169,110,0.25);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">' +
          '<div>' +
            '<div style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:20px;color:#fff;">' + calc.tourName + ' — Full Cost Breakdown</div>' +
            '<div style="font-size:11px;color:rgba(245,240,232,0.5);margin-top:3px;">' +
              calc.pax + (calc.pax===1?' person':' people') + ' \u00b7 ' + calc.days + (calc.days===1?' day':' days') +
              (calc.nights > 0 ? ' \u00b7 ' + calc.nights + (calc.nights===1?' night':' nights') : '') +
            '</div>' +
          '</div>' +
          currencySelectorHTML() +
        '</div>' +

        // Breakdown
        '<div style="padding:16px 24px 20px;">' +
          rowsHTML +
          fxCaveat +
        '</div>' +

      '</div>';
  }



  // ── Firebase OTP Module ──────────────────────────────────────────────────
  // ============================================================
  // IVORY ARC — FIREBASE PHONE OTP MODULE
  // Version 1.0 — Master Build Integration Candidate
  // ============================================================

  // ── Firebase Config ───────────────────────────────────────────
  var FIREBASE_CONFIG = {
    apiKey:     'AIzaSyBo7tO9TfcrW8_I2wCl2q0To0WFyu5Frqo',
    authDomain: 'ivory-arc-estimator-70e40.firebaseapp.com',
    projectId:  'ivory-arc-estimator-70e40'
  };

  // ── OTP State ─────────────────────────────────────────────────
  var otpState = {
    step:             'idle',    // idle | sending | code_sent | verifying | verified | error
    confirmationResult: null,
    recaptchaVerifier:  null,
    recaptchaReady:     false,
    phone:            '',
    error:            '',
    resendCooldown:   0,
    resendTimer:      null,
    verifiedPhone:    null,
  };

  // ── Firebase loader ───────────────────────────────────────────
  var firebaseLoaded = false;

  function loadFirebase(onReady) {
    if (firebaseLoaded && window.firebase && window.firebase.auth) {
      onReady(); return;
    }
    if (document.getElementById('firebase-app-script')) {
      var wait = setInterval(function() {
        if (window.firebase && window.firebase.auth) {
          clearInterval(wait);
          if (!firebaseLoaded) {
            try { firebase.initializeApp(FIREBASE_CONFIG); } catch(e) {}
            firebaseLoaded = true;
          }
          onReady();
        }
      }, 100);
      return;
    }
    function injectScript(src, id, onLoad, onErr) {
      var s = document.createElement('script');
      s.src = src; s.id = id;
      s.onload = onLoad;
      s.onerror = onErr || function() {
        otpState.error = 'Could not load verification service. Please check your connection.';
        otpState.step = 'error'; renderOtpSection();
      };
      document.head.appendChild(s);
    }
    injectScript(
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
      'firebase-app-script',
      function() {
        injectScript(
          'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js',
          'firebase-auth-script',
          function() {
            try {
              firebase.initializeApp(FIREBASE_CONFIG);
              firebaseLoaded = true;
              onReady();
            } catch(e) {
              otpState.error = 'Could not initialise verification. Please refresh and try again.';
              otpState.step = 'error'; renderOtpSection();
            }
          }
        );
      }
    );
  }

  // ── Invisible reCAPTCHA setup ─────────────────────────────────
  function setupRecaptcha() {
    if (otpState.recaptchaReady && otpState.recaptchaVerifier) return;
    var container = document.getElementById('ivory-recaptcha-container');
    if (!container) {
      // Container not in DOM yet - render first
      renderOtpSection();
      container = document.getElementById('ivory-recaptcha-container');
      if (!container) return;
    }

    // Clear any previous instance
    if (otpState.recaptchaVerifier) {
      try { otpState.recaptchaVerifier.clear(); } catch(e) {}
      otpState.recaptchaVerifier = null;
      otpState.recaptchaReady    = false;
    }

    otpState.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'ivory-recaptcha-container',
      {
        size: 'invisible',
        callback: function() {
          otpState.recaptchaReady = true;
        },
        'expired-callback': function() {
          otpState.recaptchaReady = false;
          otpState.recaptchaVerifier = null;
          setupRecaptcha();
        }
      }
    );

    otpState.recaptchaVerifier.render().then(function() {
      otpState.recaptchaReady = true;
    }).catch(function(err) {
      console.warn('reCAPTCHA render error:', err);
      otpState.recaptchaReady = true; // allow proceed, Firebase will handle it
    });
  }

  // ── Send OTP ──────────────────────────────────────────────────
  function sendOtp() {
    var phoneInput = document.getElementById('otp-phone-input');
    if (!phoneInput) return;

    var raw    = phoneInput.value.trim();
    var digits = raw.replace(/\D/g, '');

    // Validate: must have + prefix and 10-15 digits
    if (!raw.startsWith('+') || digits.length < 10 || digits.length > 15) {
      otpState.error = 'Please enter a valid number with country code e.g. +91 98765 43210';
      renderOtpSection();
      return;
    }

    otpState.phone = raw;
    otpState.step  = 'sending';
    otpState.error = '';
    renderOtpSection();

    loadFirebase(function() {
      setupRecaptcha();

      // Wait for reCAPTCHA to be ready before proceeding
      var attempts = 0;
      function trySignIn() {
        attempts++;
        if (!otpState.recaptchaVerifier) {
          otpState.error = 'Security check not ready. Please wait a moment and try again.';
          otpState.step  = 'idle';
          renderOtpSection();
          return;
        }
        firebase.auth().signInWithPhoneNumber(raw, otpState.recaptchaVerifier)
        .then(function(confirmationResult) {
          otpState.confirmationResult = confirmationResult;
          otpState.step               = 'code_sent';
          otpState.error              = '';
          startResendCooldown();
          renderOtpSection();
          // Auto-focus OTP input
          setTimeout(function() {
            var inp = document.getElementById('otp-code-input');
            if (inp) inp.focus();
          }, 100);
        })
        .catch(function(err) {
          otpState.step  = 'idle';
          otpState.error = friendlyFirebaseError(err.code);
          // Reset recaptcha on error
          otpState.recaptchaReady    = false;
          otpState.recaptchaVerifier = null;
          renderOtpSection();
        });
      }
      // Small delay to ensure reCAPTCHA widget is rendered
      setTimeout(trySignIn, 300);
    });
  }

  // ── Verify OTP ────────────────────────────────────────────────
  function verifyOtp() {
    var codeInput = document.getElementById('otp-code-input');
    if (!codeInput) return;

    var code = codeInput.value.trim().replace(/\s/g, '');
    if (!code || code.length !== 6 || !/^\d+$/.test(code)) {
      otpState.error = 'Please enter the 6-digit code sent to your phone.';
      renderOtpSection();
      return;
    }

    otpState.step  = 'verifying';
    otpState.error = '';
    renderOtpSection();

    otpState.confirmationResult.confirm(code)
      .then(function(result) {
        iaTrack('phone_verified');
        otpState.step          = 'verified';
        otpState.verifiedPhone = otpState.phone;
        otpState.error         = '';
        clearResendCooldown();
        renderOtpSection();
        // Unlock the estimate section
        unlockEstimate();
      })
      .catch(function(err) {
        otpState.step  = 'code_sent';
        otpState.error = friendlyFirebaseError(err.code);
        renderOtpSection();
      });
  }

  // ── Resend cooldown ───────────────────────────────────────────
  function startResendCooldown() {
    otpState.resendCooldown = 30;
    clearResendCooldown();
    otpState.resendTimer = setInterval(function() {
      otpState.resendCooldown--;
      var el = document.getElementById('otp-resend-timer');
      if (el) el.textContent = otpState.resendCooldown > 0
        ? 'Resend in ' + otpState.resendCooldown + 's'
        : '';
      var btn = document.getElementById('otp-resend-btn');
      if (btn) {
        btn.disabled = otpState.resendCooldown > 0;
        btn.style.opacity = otpState.resendCooldown > 0 ? '0.4' : '1';
      }
      if (otpState.resendCooldown <= 0) clearResendCooldown();
    }, 1000);
  }

  function clearResendCooldown() {
    if (otpState.resendTimer) {
      clearInterval(otpState.resendTimer);
      otpState.resendTimer = null;
    }
  }

  function resendOtp() {
    otpState.step               = 'idle';
    otpState.confirmationResult = null;
    otpState.recaptchaReady     = false;
    otpState.recaptchaVerifier  = null;
    otpState.error              = '';
    clearResendCooldown();
    renderOtpSection();
    setTimeout(function() {
      var inp = document.getElementById('otp-phone-input');
      if (inp) { inp.value = otpState.phone; }
      sendOtp();
    }, 200);
  }

  // ── Unlock estimate after verification ───────────────────────
  function unlockEstimate() {
    var lock   = document.getElementById('ivory-estimate-lock');
    var unlock = document.getElementById('ivory-estimate-unlocked');
    if (lock)   lock.style.display   = 'none';
    if (unlock) {
      unlock.style.display = 'block';
      // Render pricing summary
      renderPricingSummary();
      // Inject lead form
      var leadContainer = document.getElementById('ivory-lead-form-container');
      if (leadContainer) leadContainer.innerHTML = renderLeadForm();
    }
  }

  // ── Friendly error messages ───────────────────────────────────
  function friendlyFirebaseError(code) {
    var msgs = {
      'auth/invalid-phone-number':       'That does not look like a valid phone number. Please include your country code e.g. +91.',
      'auth/too-many-requests':          'Too many attempts. Please wait a few minutes and try again.',
      'auth/code-expired':               'The verification code has expired. Please request a new one.',
      'auth/invalid-verification-code':  'Incorrect code. Please check the SMS and try again.',
      'auth/quota-exceeded':             'SMS quota exceeded. Please try again later.',
      'auth/network-request-failed':     'Network error. Please check your connection and try again.',
      'auth/captcha-check-failed':       'Security check failed. Please refresh the page and try again.',
    'auth/internal-error':             'Verification failed. Please ensure your number includes the country code (+91 for India) and try again. If the issue persists, the phone authentication service may need to be enabled in your Firebase Console.',
    'auth/app-not-authorized':         'This app is not authorised for phone sign-in. Please add this domain to Firebase Console under Authentication > Authorised domains.',
    'auth/missing-phone-number':       'Please enter your phone number with country code e.g. +91 98765 43210.',
    };
    return msgs[code] || 'Something went wrong (' + (code || 'unknown') + '). Please try again.';
  }

  // ── OTP Section HTML Renderer ─────────────────────────────────
  function renderOtpSection() {
    var el = document.getElementById('ivory-otp-section');
    if (!el) return;

    var step  = otpState.step;
    var error = otpState.error;

    // ── Verified state ──
    if (step === 'verified') {
      el.innerHTML =
        '<div style="background:rgba(52,211,153,0.08);border:1px solid var(--green);border-radius:10px;padding:20px 24px;display:flex;align-items:center;gap:16px;">' +
          '<div style="width:44px;height:44px;border-radius:50%;background:rgba(52,211,153,0.15);border:2px solid var(--green);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;color:var(--green);">&#10003;</div>' +
          '<div>' +
            '<div style="font-size:14px;font-weight:600;color:var(--green);">Phone Verified</div>' +
            '<div style="font-size:12px;color:rgba(245,240,232,0.55);margin-top:2px;">' + otpState.verifiedPhone + ' confirmed successfully. Your estimate is now unlocked.</div>' +
          '</div>' +
          '<div id="ivory-recaptcha-container"></div>' +
        '</div>';
      return;
    }

    var errorHTML = error
      ? '<div style="background:rgba(248,113,113,0.08);border:1px solid var(--red);border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--red);">' + error + '</div>'
      : '';

    // ── Idle / Enter phone ──
    if (step === 'idle' || step === 'sending') {
      var btnDisabled = step === 'sending' ? 'disabled' : '';
      var btnText     = step === 'sending' ? 'Sending code...' : 'Send Verification Code';
      el.innerHTML =
        '<div style="background:var(--dark);border:1px solid var(--gold);border-radius:10px;padding:28px 24px;">' +
          '<div style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:22px;color:#fff;margin-bottom:6px;">Verify Your Phone Number</div>' +
          '<div style="font-size:13px;color:rgba(245,240,232,0.6);margin-bottom:20px;line-height:1.6;">We will send a one-time code to confirm your number before releasing your personalised estimate. Your number is never shared or used for marketing.</div>' +
          errorHTML +
          '<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:16px;">' +
            '<label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);">Mobile Number</label>' +
            '<input id="otp-phone-input" type="tel"' +
            ' placeholder="+91 98765 43210"' +
            ' autocomplete="tel" autocorrect="off" autocapitalize="off" spellcheck="false"' +
            ' data-lpignore="true"' +
            ' value="' + (otpState.phone || '') + '"' +
            ' style="background:rgba(0,0,0,0.4);border:1px solid rgba(201,169,110,0.45);border-radius:6px;padding:12px 14px;font-size:14px;color:var(--ivory);font-family:\'DM Sans\',sans-serif;outline:none;box-sizing:border-box;width:100%;"' +
            ' onkeydown="if(event.key===\'Enter\')sendOtp()">' +
          '</div>' +
          '<button onclick="sendOtp()" ' + btnDisabled + ' style="width:100%;padding:13px;background:var(--gold);color:var(--black);border:none;border-radius:8px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;font-family:\'DM Sans\',sans-serif;' + (step === 'sending' ? 'opacity:0.6;cursor:not-allowed;' : '') + '">' +
            btnText +
          '</button>' +
          '<div id="ivory-recaptcha-container" style="margin-top:8px;"></div>' +
        '</div>';

      // Setup recaptcha after render
      if (step === 'idle') {
        setTimeout(function() {
          loadFirebase(function() { setupRecaptcha(); });
        }, 300);
      }
      return;
    }

    // ── Code sent / verifying ──
    if (step === 'code_sent' || step === 'verifying') {
      var vBtnDisabled = step === 'verifying' ? 'disabled' : '';
      var vBtnText     = step === 'verifying' ? 'Verifying...' : 'Verify Code';
      el.innerHTML =
        '<div style="background:var(--dark);border:1px solid var(--gold);border-radius:10px;padding:28px 24px;">' +
          '<div style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:22px;color:#fff;margin-bottom:6px;">Enter Verification Code</div>' +
          '<div style="font-size:13px;color:rgba(245,240,232,0.6);margin-bottom:20px;line-height:1.6;">A 6-digit code has been sent to <strong style="color:var(--gold);">' + otpState.phone + '</strong></div>' +
          errorHTML +
          '<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:16px;">' +
            '<label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);">6-Digit Code</label>' +
            '<input id="otp-code-input" type="tel" maxlength="6"' +
            ' placeholder="e.g. 4 8 2 1 9 3"' +
            ' autocomplete="one-time-code" inputmode="numeric"' +
            ' style="background:rgba(0,0,0,0.4);border:1px solid rgba(201,169,110,0.45);border-radius:6px;padding:14px 14px;font-size:22px;letter-spacing:8px;color:var(--ivory);font-family:\'DM Sans\',sans-serif;outline:none;box-sizing:border-box;width:100%;text-align:center;"' +
            ' onkeydown="if(event.key===\'Enter\')verifyOtp()"' +
            ' oninput="this.value=this.value.replace(/[^0-9]/g,\'\')">' +
          '</div>' +
          '<button onclick="verifyOtp()" ' + vBtnDisabled + ' style="width:100%;padding:13px;background:var(--gold);color:var(--black);border:none;border-radius:8px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;font-family:\'DM Sans\',sans-serif;margin-bottom:14px;' + (step === 'verifying' ? 'opacity:0.6;cursor:not-allowed;' : '') + '">' +
            vBtnText +
          '</button>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;">' +
            '<button id="otp-resend-btn" onclick="resendOtp()" disabled style="background:none;border:none;color:var(--gold);font-size:12px;cursor:pointer;opacity:0.4;font-family:\'DM Sans\',sans-serif;padding:0;">Resend Code</button>' +
            '<span id="otp-resend-timer" style="font-size:11px;color:rgba(245,240,232,0.4);"></span>' +
          '</div>' +
          '<div id="ivory-recaptcha-container"></div>' +
        '</div>';
      return;
    }

    // ── Error state ──
    if (step === 'error') {
      el.innerHTML =
        '<div style="background:rgba(248,113,113,0.08);border:1px solid var(--red);border-radius:10px;padding:20px 24px;">' +
          '<div style="color:var(--red);font-size:14px;margin-bottom:12px;">' + error + '</div>' +
          '<button onclick="otpState.step=\'idle\';renderOtpSection();" style="background:none;border:1px solid var(--gold);color:var(--gold);padding:8px 20px;border-radius:20px;cursor:pointer;font-family:\'DM Sans\',sans-serif;font-size:13px;">Try Again</button>' +
          '<div id="ivory-recaptcha-container"></div>' +
        '</div>';
    }
  }




  // ── Abandonment tracking ──────────────────────────────────────────────────
  window.addEventListener('beforeunload', function() {
    var started = activeTourId || (tdStart !== null) || (ciPickup !== '');
    var submitted = otpState && otpState.step === 'verified';
    if (started && !submitted) {
      iaTrack('estimator_abandoned', {
        destination: activeTourId || 'none',
        has_dates: tdStart ? 'yes' : 'no',
        has_group: activeTierId ? 'yes' : 'no'
      });
    }
  });


  // ── Expose all interactive functions to global window scope ──────────────
  // Required when script loads as external file in WordPress environment
  window.calClick             = calClick;
  window.calNav               = calNav;
  window.confirmTravelDetails = confirmTravelDetails;
  window.toggleTag            = toggleTag;
  window.toggleDayTourMode    = toggleDayTourMode;
  window.changeDayTourDays    = changeDayTourDays;
  window.selectTour           = selectTour;
  window.toggleAncil          = toggleAncil;
  window.changeDays           = changeDays;
  window.selectTier           = selectTier;
  window.selectPax            = selectPax;
  window.selectGuide          = selectGuide;
  window.toggleAirport        = toggleAirport;
  window.toggleCustomMode     = toggleCustomMode;
  window.selectHotelTier      = selectHotelTier;
  window.selectHotel          = selectHotel;
  window.setMultiCityBase     = setMultiCityBase;
  window.selectMultiCityTier  = selectMultiCityTier;
  window.setCurrency          = setCurrency;
  window.sendOtp              = sendOtp;
  window.verifyOtp            = verifyOtp;
  window.resendOtp            = resendOtp;
  window.handleLeadSubmit     = handleLeadSubmit;
  window.toggleNightHalt      = toggleNightHalt;
  window.calculateCustomRoute = calculateCustomRoute;
  window.changeDays           = changeDays;
  window.ciPickupInput        = ciPickupInput;
  window.ciDropInput          = ciDropInput;
  window.selectDemoPlace      = selectDemoPlace;
  window.__ivoryMapsReady     = __ivoryMapsReady;

  // Dynamic multi-city hotel handlers
  ['delhi','agra','jaipur','shimla','manali','haridwar',
   'rishikesh','mathura','vrindavan','corbett','varanasi','amritsar'].forEach(function(cityId) {
    window['selectMultiCityHotel_' + cityId] = function(h) {
      multiCitySelected[cityId] = (multiCitySelected[cityId] && multiCitySelected[cityId].name === h.name) ? null : h;
      render();
    };
  });

  // ── Init ──────────────────────────────────────────────────────────────────
  DESTINATIONS.multiDay.forEach(function(t) { tourDays[t.id] = t.recommendedDays; });

  // Use setTimeout(0) to ensure the DOM is ready in all environments including WordPress
  setTimeout(function() { render(); }, 0);

