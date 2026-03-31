var NEWSDATA_KEY = 'pub_64e9c8f2d1a5b3e7f9012345abcdef12';


var STARTUPS = [
  {
    id: 1,
    name: 'Stripe',
    tagline: 'Infrastructure for internet commerce',
    industry: 'fintech',
    stage: 'growth',
    region: 'north-america',
    country: 'US',
    founded: 2010,
    funding: '$8.7B',
    employees: 8000,
    description: 'Stripe builds economic infrastructure for the internet. Businesses of every size use Stripe to accept payments and manage their business online. They process billions of dollars every year.',
    founders: 'Patrick Collison, John Collison',
    website: 'https://stripe.com',
    trending: true
  },
  {
    id: 2,
    name: 'Flutterwave',
    tagline: 'Powering payments across Africa',
    industry: 'fintech',
    stage: 'series-b',
    region: 'africa',
    country: 'NG',
    founded: 2016,
    funding: '$474M',
    employees: 900,
    description: 'Flutterwave provides payment technology for merchants and payment service providers across Africa. It enables businesses to expand globally and receive payments from international customers.',
    founders: 'Olugbenga Agboola, Adeleke Adekoya',
    website: 'https://flutterwave.com',
    trending: true
  },
  {
    id: 3,
    name: 'Andela',
    tagline: "Connecting Africa's tech talent to global companies",
    industry: 'edtech',
    stage: 'series-d',
    region: 'africa',
    country: 'NG',
    founded: 2014,
    funding: '$381M',
    employees: 2000,
    description: 'Andela builds distributed technology teams by connecting companies with vetted software engineers from Africa. They have trained thousands of developers and placed them with top global companies.',
    founders: 'Jeremy Johnson, Christina Sass, Ian Carnevale',
    website: 'https://andela.com',
    trending: false
  },
  {
    id: 4,
    name: 'OpenAI',
    tagline: 'AI research and deployment company',
    industry: 'ai',
    stage: 'growth',
    region: 'north-america',
    country: 'US',
    founded: 2015,
    funding: '$11.3B',
    employees: 1800,
    description: 'OpenAI is an AI safety company that builds large language models and AI systems for the benefit of humanity. Their products include ChatGPT, which has over 100 million users worldwide.',
    founders: 'Sam Altman, Greg Brockman, Ilya Sutskever',
    website: 'https://openai.com',
    trending: true
  },
  {
    id: 5,
    name: 'Notion',
    tagline: 'The all-in-one workspace',
    industry: 'saas',
    stage: 'series-c',
    region: 'north-america',
    country: 'US',
    founded: 2016,
    funding: '$343M',
    employees: 600,
    description: 'Notion is a workspace tool that combines notes, tasks, wikis, and databases in one place. Millions of teams use it every day to manage their work and share knowledge.',
    founders: 'Ivan Zhao, Simon Last',
    website: 'https://notion.so',
    trending: false
  },
  {
    id: 6,
    name: 'Chipper Cash',
    tagline: 'Simple cross-border payments for Africa',
    industry: 'fintech',
    stage: 'series-c',
    region: 'africa',
    country: 'UG',
    founded: 2018,
    funding: '$302M',
    employees: 400,
    description: 'Chipper Cash lets people in Africa send money to each other across borders without fees. It serves millions of customers in Uganda, Kenya, Ghana, Nigeria, Rwanda, Tanzania, and South Africa.',
    founders: 'Ham Serunjogi, Maijid Moujaled',
    website: 'https://chippercash.com',
    trending: true
  },
  {
    id: 7,
    name: 'Figma',
    tagline: 'Where teams design together',
    industry: 'saas',
    stage: 'growth',
    region: 'north-america',
    country: 'US',
    founded: 2012,
    funding: '$333M',
    employees: 1000,
    description: 'Figma is a design tool that runs in the browser and lets multiple people work on the same design file at the same time. It replaced desktop design software for most professional design teams.',
    founders: 'Dylan Field, Evan Wallace',
    website: 'https://figma.com',
    trending: false
  },
  {
    id: 8,
    name: 'Kobo360',
    tagline: 'African logistics technology platform',
    industry: 'logistics',
    stage: 'series-a',
    region: 'africa',
    country: 'NG',
    founded: 2017,
    funding: '$30M',
    employees: 300,
    description: 'Kobo360 is a digital logistics platform in Africa that connects truck owners with businesses that need to move cargo. It reduces costs and improves reliability for freight across the continent.',
    founders: 'Obi Ozor, Ife Oyedele',
    website: 'https://kobo360.com',
    trending: false
  },
  {
    id: 9,
    name: 'Vercel',
    tagline: 'Build and deploy websites instantly',
    industry: 'saas',
    stage: 'series-c',
    region: 'north-america',
    country: 'US',
    founded: 2015,
    funding: '$313M',
    employees: 400,
    description: 'Vercel is a cloud platform that makes it very easy to deploy web applications. Developers push their code and Vercel handles all the server configuration automatically.',
    founders: 'Guillermo Rauch',
    website: 'https://vercel.com',
    trending: true
  },
  {
    id: 10,
    name: 'mPharma',
    tagline: 'Managing healthcare supply chains across Africa',
    industry: 'healthtech',
    stage: 'series-d',
    region: 'africa',
    country: 'GH',
    founded: 2013,
    funding: '$65M',
    employees: 1000,
    description: 'mPharma manages prescription drug inventory for pharmacies and hospitals across Africa. Their goal is to make medicines affordable and consistently available to patients who need them.',
    founders: 'Gregory Rockson, Daniel Shoukimas',
    website: 'https://mpharma.com',
    trending: false
  },
  {
    id: 11,
    name: 'Hugging Face',
    tagline: 'The community platform for AI models',
    industry: 'ai',
    stage: 'series-c',
    region: 'north-america',
    country: 'US',
    founded: 2016,
    funding: '$235M',
    employees: 300,
    description: 'Hugging Face is like GitHub but for machine learning models. Researchers and companies share their AI models on the platform and the community uses them to build new applications.',
    founders: 'Clement Delangue, Julien Chaumond, Thomas Wolf',
    website: 'https://huggingface.co',
    trending: true
  },
  {
    id: 12,
    name: 'Twiga Foods',
    tagline: 'Connecting farmers to markets in Kenya',
    industry: 'logistics',
    stage: 'series-c',
    region: 'africa',
    country: 'KE',
    founded: 2014,
    funding: '$70M',
    employees: 1000,
    description: 'Twiga Foods is a B2B platform that buys produce directly from farmers and delivers it to small shops in Kenyan cities. This cuts out the middlemen and gives both farmers and shops a better deal.',
    founders: 'Peter Njonjo, Grant Brooke',
    website: 'https://twiga.com',
    trending: false
  },
  {
    id: 13,
    name: 'Linear',
    tagline: 'Issue tracker built for fast teams',
    industry: 'saas',
    stage: 'series-b',
    region: 'north-america',
    country: 'US',
    founded: 2019,
    funding: '$52M',
    employees: 60,
    description: 'Linear is an issue tracking tool designed to be fast and simple. Software teams use it to manage their work. It is known for its keyboard shortcuts and clean interface.',
    founders: 'Karri Saarinen, Jori Lallo, Tuomas Artman',
    website: 'https://linear.app',
    trending: true
  },
  {
    id: 14,
    name: 'Zipline',
    tagline: 'Drone delivery for medical supplies',
    industry: 'healthtech',
    stage: 'series-e',
    region: 'africa',
    country: 'RW',
    founded: 2014,
    funding: '$375M',
    employees: 1000,
    description: 'Zipline operates autonomous drones that deliver blood, vaccines, and medicines to remote hospitals and health centres in Rwanda and Ghana. They have saved many lives by solving last-mile delivery.',
    founders: 'Keller Rinaudo Cliffton, Keenan Wyrobek, Will Hetzler',
    website: 'https://flyzipline.com',
    trending: true
  },
  {
    id: 15,
    name: 'Coursera',
    tagline: 'Online learning from top universities',
    industry: 'edtech',
    stage: 'growth',
    region: 'north-america',
    country: 'US',
    founded: 2012,
    funding: '$464M',
    employees: 1500,
    description: 'Coursera partners with universities and companies to offer online courses and degrees. Millions of learners use it to study topics from data science to business and earn certificates.',
    founders: 'Andrew Ng, Daphne Koller',
    website: 'https://coursera.org',
    trending: false
  },
  {
    id: 16,
    name: 'Paystack',
    tagline: 'Helping businesses in Africa get paid',
    industry: 'fintech',
    stage: 'growth',
    region: 'africa',
    country: 'NG',
    founded: 2015,
    funding: '$8M',
    employees: 300,
    description: 'Paystack helps Nigerian businesses accept payments online and in person. It was acquired by Stripe in 2020, which confirmed it as one of the most successful African fintech companies.',
    founders: 'Shola Akinlade, Ezra Olubi',
    website: 'https://paystack.com',
    trending: false
  },
  {
    id: 17,
    name: 'Brex',
    tagline: 'Financial tools for startups and companies',
    industry: 'fintech',
    stage: 'series-d',
    region: 'north-america',
    country: 'US',
    founded: 2017,
    funding: '$1.5B',
    employees: 1200,
    description: 'Brex offers corporate credit cards and spend management software designed specifically for startups and technology companies. They make it easy to control company spending.',
    founders: 'Pedro Franceschi, Henrique Dubugras',
    website: 'https://brex.com',
    trending: false
  },
  {
    id: 18,
    name: 'Solar Freeze',
    tagline: 'Solar cold storage for Kenyan farmers',
    industry: 'cleantech',
    stage: 'seed',
    region: 'africa',
    country: 'KE',
    founded: 2016,
    funding: '$1.2M',
    employees: 30,
    description: 'Solar Freeze builds solar-powered cold storage units for smallholder farmers in Kenya. Farmers can store their produce after harvest instead of selling it immediately at low prices.',
    founders: 'Eric Kimani',
    website: 'https://solarfreeze.co.ke',
    trending: false
  },
  {
    id: 19,
    name: 'Supabase',
    tagline: 'Open source alternative to Firebase',
    industry: 'saas',
    stage: 'series-b',
    region: 'asia',
    country: 'SG',
    founded: 2020,
    funding: '$116M',
    employees: 90,
    description: 'Supabase gives developers a Postgres database, user authentication, file storage, and APIs all in one place. It is open source and very popular with developers building web apps.',
    founders: 'Paul Copplestone, Ant Wilson',
    website: 'https://supabase.com',
    trending: true
  },
  {
    id: 20,
    name: 'LifeBank',
    tagline: 'Delivering blood and medicine to hospitals',
    industry: 'healthtech',
    stage: 'series-a',
    region: 'africa',
    country: 'NG',
    founded: 2016,
    funding: '$6M',
    employees: 250,
    description: 'LifeBank finds blood supply and delivers it to hospitals across Nigeria and Kenya in time to save lives. They also deliver oxygen and other critical medical supplies to health facilities.',
    founders: 'Temie Giwa-Tubosun',
    website: 'https://lifebank.ng',
    trending: false
  },
  {
    id: 21,
    name: 'Moove',
    tagline: 'Vehicle financing for African drivers',
    industry: 'fintech',
    stage: 'series-a',
    region: 'africa',
    country: 'NG',
    founded: 2019,
    funding: '$105M',
    employees: 700,
    description: 'Moove gives ride-hailing and delivery drivers in Africa access to vehicle financing. Drivers repay through a share of their earnings so they do not need a traditional bank loan.',
    founders: 'Ladi Delano, Jide Odunsi',
    website: 'https://moove.io',
    trending: true
  },
  {
    id: 22,
    name: 'Drata',
    tagline: 'Automated security compliance platform',
    industry: 'saas',
    stage: 'series-c',
    region: 'north-america',
    country: 'US',
    founded: 2020,
    funding: '$328M',
    employees: 600,
    description: 'Drata monitors a company systems continuously and collects the evidence needed to pass security audits like SOC 2 and ISO 27001. It saves companies months of manual compliance work.',
    founders: 'Adam Markowitz, Daniel Marashlian, Troy Markowitz',
    website: 'https://drata.com',
    trending: false
  },
  {
    id: 23,
    name: 'M-KOPA',
    tagline: 'Affordable financing for devices in Africa',
    industry: 'fintech',
    stage: 'series-f',
    region: 'africa',
    country: 'KE',
    founded: 2011,
    funding: '$255M',
    employees: 3000,
    description: 'M-KOPA lets people in Africa buy smartphones and solar systems on a daily payment plan through mobile money. It serves millions of customers who could not otherwise afford these products.',
    founders: 'Jesse Moore, Nick Hughes, Chad Larson',
    website: 'https://m-kopa.com',
    trending: false
  },
  {
    id: 24,
    name: 'Twiga Foods',
    tagline: 'East African food distribution network',
    industry: 'logistics',
    stage: 'series-c',
    region: 'africa',
    country: 'KE',
    founded: 2014,
    funding: '$70M',
    employees: 1000,
    description: 'Twiga Foods is changing how food moves from farms to small shops in East Africa. By cutting out middlemen they help farmers earn more and help shops stock fresh produce reliably.',
    founders: 'Peter Njonjo, Grant Brooke',
    website: 'https://twiga.com',
    trending: false
  }
];

var seen = {};
STARTUPS = STARTUPS.filter(function(s) {
  if (seen[s.name]) return false;
  seen[s.name] = true;
  return true;
});

var appState = {
  filtered:   STARTUPS.slice(),
  displayed:  12,
  view:       'grid',
  query:      '',
  tab:        'all',    
  filters: {
    industry: '',
    stage:    '',
    region:   '',
    sort:     'trending'
  },

  saved:     JSON.parse(localStorage.getItem('sc_saved') || '[]'),
  comparing: []         
};


var exchangeRates = null;

var cardGrid     = document.getElementById('card-grid');
var resultCount  = document.getElementById('results-count');
var searchInput  = document.getElementById('search-input');
var loadMoreBtn  = document.getElementById('load-more-btn');
var modalOverlay = document.getElementById('modal-overlay');
var modalContent = document.getElementById('modal-content');
var toastEl      = document.getElementById('toast-msg');

document.addEventListener('DOMContentLoaded', function() {


  showSkeletons();

  setTimeout(function() {
    applyFiltersAndRender();
    renderTrending();
    animateStatCounter();
  }, 600);


  fetchNews();
  fetchExchangeRates();

 
  document.getElementById('search-btn').addEventListener('click', handleSearch);
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleSearch();
  });
  searchInput.addEventListener('input', function() {
    if (searchInput.value === '') {
      appState.query = '';
      applyFiltersAndRender();
    }
  });


  document.getElementById('filter-industry').addEventListener('change', function() {
    appState.filters.industry = this.value;
    appState.displayed = 12;
    applyFiltersAndRender();
  });
  document.getElementById('filter-stage').addEventListener('change', function() {
    appState.filters.stage = this.value;
    appState.displayed = 12;
    applyFiltersAndRender();
  });
  document.getElementById('filter-region').addEventListener('change', function() {
    appState.filters.region = this.value;
    appState.displayed = 12;
    applyFiltersAndRender();
  });
  document.getElementById('filter-sort').addEventListener('change', function() {
    appState.filters.sort = this.value;
    appState.displayed = 12;
    applyFiltersAndRender();
  });

  document.getElementById('reset-btn').addEventListener('click', function() {
    resetAll();
  });

  loadMoreBtn.addEventListener('click', function() {
    appState.displayed += 8;
    renderCards();
  });


  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('grid-btn').addEventListener('click', function() {
    setView('grid');
  });
  document.getElementById('list-btn').addEventListener('click', function() {
    setView('list');
  });

  document.getElementById('tab-all').addEventListener('click', function() {
    appState.tab = 'all';
    appState.displayed = 12;
    document.getElementById('tab-all').classList.add('active');
    document.getElementById('tab-saved').classList.remove('active');
    applyFiltersAndRender();
  });
  document.getElementById('tab-saved').addEventListener('click', function() {
    appState.tab = 'saved';
    appState.displayed = 12;
    document.getElementById('tab-saved').classList.add('active');
    document.getElementById('tab-all').classList.remove('active');
    applyFiltersAndRender();
  });

  document.getElementById('compare-clear-btn').addEventListener('click', clearCompare);
  document.getElementById('compare-go-btn').addEventListener('click', openCompareModal);
});

function handleSearch() {
  appState.query = searchInput.value.trim().toLowerCase();
  appState.displayed = 12;
  applyFiltersAndRender();
  if (appState.query) {
    showToast('Showing results for "' + searchInput.value + '"');
  }
}

function applyFiltersAndRender() {


  var data;
  if (appState.tab === 'saved') {
    data = STARTUPS.filter(function(s) {
      return appState.saved.indexOf(s.id) !== -1;
    });
  } else {
    data = STARTUPS.slice();
  }

  if (appState.query) {
    data = data.filter(function(s) {
      return (
        s.name.toLowerCase().indexOf(appState.query) !== -1 ||
        s.description.toLowerCase().indexOf(appState.query) !== -1 ||
        s.industry.toLowerCase().indexOf(appState.query) !== -1 ||
        s.tagline.toLowerCase().indexOf(appState.query) !== -1 ||
        s.founders.toLowerCase().indexOf(appState.query) !== -1
      );
    });
  }

  if (appState.filters.industry) {
    data = data.filter(function(s) { return s.industry === appState.filters.industry; });
  }

  if (appState.filters.stage) {
    data = data.filter(function(s) { return s.stage === appState.filters.stage; });
  }

  if (appState.filters.region) {
    data = data.filter(function(s) { return s.region === appState.filters.region; });
  }

  var sort = appState.filters.sort;
  if (sort === 'trending') {
    data.sort(function(a, b) { return (b.trending ? 1 : 0) - (a.trending ? 1 : 0); });
  } else if (sort === 'newest') {
    data.sort(function(a, b) { return b.founded - a.founded; });
  } else if (sort === 'funding') {
    data.sort(function(a, b) { return parseFundingNum(b.funding) - parseFundingNum(a.funding); });
  } else if (sort === 'employees') {
    data.sort(function(a, b) { return b.employees - a.employees; });
  } else if (sort === 'name') {
    data.sort(function(a, b) { return a.name.localeCompare(b.name); });
  }

  appState.filtered = data;
  renderCards();
}

function parseFundingNum(str) {
  if (!str) return 0;
  var n = parseFloat(str.replace(/[^0-9.]/g, ''));
  if (!n) return 0;
  if (str.indexOf('B') !== -1) return n * 1000;
  return n;
}

function renderCards() {
  var list  = appState.filtered;
  var total = list.length;
  var show  = Math.min(appState.displayed, total);

  resultCount.textContent = 'Showing ' + show + ' of ' + total + ' startup' + (total !== 1 ? 's' : '');

  if (total === 0) {
    cardGrid.innerHTML = '<div class="empty-state">' +
      '<p>' + (appState.tab === 'saved' ? 'No saved startups' : 'Nothing found') + '</p>' +
      '<p>' + (appState.tab === 'saved' ? 'Click Save on any startup to add it here.' : 'Try a different search or reset the filters.') + '</p>' +
      '</div>';
    loadMoreBtn.style.display = 'none';
    return;
  }

  var html = '';
  for (var i = 0; i < show; i++) {
    html += buildCardHTML(list[i], i);
  }
  cardGrid.innerHTML = html;

  loadMoreBtn.style.display = show >= total ? 'none' : 'block';


  var cards = cardGrid.querySelectorAll('.startup-card');
  for (var c = 0; c < cards.length; c++) {
    (function(card) {
      var id = parseInt(card.getAttribute('data-id'), 10);
      card.addEventListener('click', function(e) {
      
        if (e.target.closest('.action-btn')) return;
        var startup = getStartupById(id);
        if (startup) openModal(startup);
      });
    })(cards[c]);
  }


  var saveBtns = cardGrid.querySelectorAll('.btn-save');
  for (var s = 0; s < saveBtns.length; s++) {
    (function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSave(parseInt(btn.getAttribute('data-id'), 10));
      });
    })(saveBtns[s]);
  }

  var cmpBtns = cardGrid.querySelectorAll('.btn-cmp');
  for (var k = 0; k < cmpBtns.length; k++) {
    (function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleCompare(parseInt(btn.getAttribute('data-id'), 10));
      });
    })(cmpBtns[k]);
  }
}

function buildCardHTML(s, index) {
  var delay     = (index % 12) * 0.04;
  var isSaved   = appState.saved.indexOf(s.id) !== -1;
  var inCompare = appState.comparing.indexOf(s.id) !== -1;
  var initials  = getInitials(s.name);
  var iconColor = getIconColor(s.industry);

  var trendingBadge = s.trending
    ? '<span class="trending-tag">Trending</span>'
    : '';

  return '<article class="startup-card" data-id="' + s.id + '" style="animation-delay:' + delay + 's">' +
    '<div class="card-top">' +
    '<div class="card-icon" style="background:' + iconColor + '">' + initials + '</div>' +
    '<div class="card-title-block">' +
    '<h3>' + s.name + '</h3>' +
    '<span class="card-tagline">' + s.tagline + '</span>' +
    '</div>' +
    trendingBadge +
    '</div>' +
    '<div class="card-badges">' +
    '<span class="badge badge-ind">' + capitalize(s.industry) + '</span>' +
    '<span class="badge badge-stg">' + capitalize(s.stage) + '</span>' +
    '<span class="badge badge-reg">' + capitalize(s.region.replace(/-/g, ' ')) + '</span>' +
    '</div>' +
    '<p class="card-desc">' + s.description + '</p>' +
    '<div class="card-meta">' +
    '<span class="meta-funding">' + s.funding + '</span>' +
    '<span>' + s.employees.toLocaleString() + ' people</span>' +
    '<span>' + s.founded + '</span>' +
    '</div>' +
    '<div class="card-actions">' +
    '<button class="action-btn btn-save ' + (isSaved ? 'saved-state' : '') + '" data-id="' + s.id + '">' +
    (isSaved ? 'Saved' : 'Save') +
    '</button>' +
    '<button class="action-btn btn-cmp ' + (inCompare ? 'compare-state' : '') + '" data-id="' + s.id + '">' +
    (inCompare ? 'Comparing' : 'Compare') +
    '</button>' +
    '</div>' +
    '</article>';
}


function getInitials(name) {
  var parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}


function getIconColor(industry) {
  var colors = {
    fintech:    '#6c47ff',
    healthtech: '#e05252',
    edtech:     '#d4ac0d',
    saas:       '#2563eb',
    ai:         '#0891b2',
    ecommerce:  '#ea580c',
    cleantech:  '#16a34a',
    logistics:  '#ca8a04'
  };
  return colors[industry] || '#555';
}

function toggleSave(id) {
  var startup = getStartupById(id);
  if (!startup) return;

  var idx = appState.saved.indexOf(id);
  if (idx === -1) {
    appState.saved.push(id);
    showToast(startup.name + ' saved');
  } else {
    appState.saved.splice(idx, 1);
    showToast(startup.name + ' removed from saved');
  }

  localStorage.setItem('sc_saved', JSON.stringify(appState.saved));

  var badge = document.getElementById('saved-badge');
  if (badge) badge.textContent = appState.saved.length || '';

  renderCards();
}

function toggleCompare(id) {
  var startup = getStartupById(id);
  if (!startup) return;

  var idx = appState.comparing.indexOf(id);
  if (idx === -1) {
    if (appState.comparing.length >= 3) {
      showToast('You can compare up to 3 startups at a time', true);
      return;
    }
    appState.comparing.push(id);
    showToast(startup.name + ' added to compare');
  } else {
    appState.comparing.splice(idx, 1);
    showToast(startup.name + ' removed from compare');
  }

  updateCompareBar();
  renderCards();
}

function updateCompareBar() {
  var bar   = document.getElementById('compare-bar');
  var chips = document.getElementById('compare-chips');

  if (appState.comparing.length === 0) {
    bar.classList.remove('visible');
    return;
  }

  bar.classList.add('visible');

  var html = '';
  for (var i = 0; i < appState.comparing.length; i++) {
    var s = getStartupById(appState.comparing[i]);
    if (!s) continue;
    html += '<div class="compare-chip">' +
      s.name +
      '<button onclick="toggleCompare(' + s.id + ')">x</button>' +
      '</div>';
  }
  chips.innerHTML = html;
}

function clearCompare() {
  appState.comparing = [];
  updateCompareBar();
  renderCards();
}

function openCompareModal() {
  if (appState.comparing.length < 2) {
    showToast('Select at least 2 startups to compare', true);
    return;
  }

  var startups = [];
  for (var i = 0; i < appState.comparing.length; i++) {
    var s = getStartupById(appState.comparing[i]);
    if (s) startups.push(s);
  }


  var fields = [
    ['Industry',   function(s) { return capitalize(s.industry); }],
    ['Stage',      function(s) { return capitalize(s.stage); }],
    ['Region',     function(s) { return capitalize(s.region.replace(/-/g, ' ')); }],
    ['Founded',    function(s) { return String(s.founded); }],
    ['Funding',    function(s) { return '<span class="cmp-green">' + s.funding + '</span>'; }],
    ['Team Size',  function(s) { return s.employees.toLocaleString() + ' people'; }],
    ['Founders',   function(s) { return s.founders; }]
  ];

  var headerCells = '<th></th>';
  for (var h = 0; h < startups.length; h++) {
    headerCells += '<th>' + startups[h].name + '</th>';
  }

  var rows = '';
  for (var r = 0; r < fields.length; r++) {
    var label = fields[r][0];
    var fn    = fields[r][1];
    rows += '<tr><td>' + label + '</td>';
    for (var col = 0; col < startups.length; col++) {
      rows += '<td>' + fn(startups[col]) + '</td>';
    }
    rows += '</tr>';
  }

  modalContent.innerHTML =
    '<h2 class="modal-name" style="margin-bottom:1.25rem">Compare Startups</h2>' +
    '<div style="overflow-x:auto">' +
    '<table class="compare-table">' +
    '<thead><tr>' + headerCells + '</tr></thead>' +
    '<tbody>' + rows + '</tbody>' +
    '</table></div>';

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openModal(s) {
  var isSaved   = appState.saved.indexOf(s.id) !== -1;
  var iconColor = getIconColor(s.industry);
  var initials  = getInitials(s.name);

  var exchangeNote = '';
  if (exchangeRates) {
    var base = parseFundingNum(s.funding);
    if (base > 0) {
      var usd = base * 1000000;
      var kes = Math.round(usd * (exchangeRates.KES || 129)).toLocaleString();
      var ngn = Math.round(usd * (exchangeRates.NGN || 1600)).toLocaleString();
      exchangeNote = '<p class="modal-exchange">Approx. KES ' + kes + ' &middot; NGN ' + ngn + ' (via ExchangeRate-API)</p>';
    }
  }

  modalContent.innerHTML =
    '<div class="modal-icon" style="background:' + iconColor + '">' + initials + '</div>' +
    '<h2 class="modal-name">' + s.name + '</h2>' +
    '<p class="modal-tagline">' + s.tagline + '</p>' +
    '<div class="modal-badges">' +
    '<span class="badge badge-ind">' + capitalize(s.industry) + '</span>' +
    '<span class="badge badge-stg">' + capitalize(s.stage) + '</span>' +
    '<span class="badge badge-reg">' + capitalize(s.region.replace(/-/g, ' ')) + '</span>' +
    '</div>' +
    '<p class="modal-desc">' + s.description + '</p>' +
    '<div class="modal-stats-row">' +
    '<div class="modal-stat"><span class="val" style="color:#00d68f">' + s.funding + '</span><span class="lbl">Funding</span></div>' +
    '<div class="modal-stat"><span class="val" style="color:#6c47ff">' + s.employees.toLocaleString() + '</span><span class="lbl">Employees</span></div>' +
    '<div class="modal-stat"><span class="val">' + s.founded + '</span><span class="lbl">Founded</span></div>' +
    '</div>' +
    '<p class="modal-founders">Founders: <span>' + s.founders + '</span></p>' +
    exchangeNote +
    '<div class="modal-buttons">' +
    '<a class="btn-visit" href="' + s.website + '" target="_blank" rel="noopener noreferrer">Visit Website</a>' +
    '<button class="btn-secondary" id="modal-save-btn">' + (isSaved ? 'Remove from Saved' : 'Save Startup') + '</button>' +
    '<button class="btn-secondary" id="modal-cmp-btn">Add to Compare</button>' +
    '</div>';

  document.getElementById('modal-save-btn').addEventListener('click', function() {
    toggleSave(s.id);
    closeModal();
  });
  document.getElementById('modal-cmp-btn').addEventListener('click', function() {
    toggleCompare(s.id);
    closeModal();
  });

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderTrending() {
  var trendingStartups = STARTUPS.filter(function(s) { return s.trending; });
  var trendingList     = document.getElementById('trending-list');
  if (!trendingList) return;

  var html = '';
  for (var i = 0; i < trendingStartups.length; i++) {
    var s   = trendingStartups[i];
    var num = (i < 9 ? '0' : '') + (i + 1);
    html += '<div class="trending-card" onclick="openModal(getStartupById(' + s.id + '))">' +
      '<span class="trending-rank">' + num + '</span>' +
      '<div class="trending-name">' + s.name + '</div>' +
      '<div class="trending-sub">' + capitalize(s.industry) + ' · ' + capitalize(s.region.replace(/-/g, ' ')) + '</div>' +
      '<div class="trending-up">Up this week</div>' +
      '</div>';
  }
  trendingList.innerHTML = html;
}

function fetchNews() {
  var newsGrid = document.getElementById('news-grid');
  if (!newsGrid) return;

  var url = 'https://newsdata.io/api/1/news?apikey=' + NEWSDATA_KEY + '&q=startup+funding&language=en&category=technology';

  fetch(url)
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      if (data.status !== 'success' || !data.results || data.results.length === 0) {
        throw new Error('No results returned');
      }
      renderNews(data.results.slice(0, 9));
    })
    .catch(function(err) {
      console.warn('NewsData.io not available, using fallback news:', err.message);
      renderNews(FALLBACK_NEWS);
    });
}

function renderNews(articles) {
  var newsGrid = document.getElementById('news-grid');
  if (!newsGrid) return;

  var html = '';
  for (var i = 0; i < articles.length; i++) {
    html += buildNewsCard(articles[i]);
  }
  newsGrid.innerHTML = html;
}

function buildNewsCard(a) {
  var title  = (a.title  || 'No title').substring(0, 90);
  var desc   = (a.description || a.content || 'No description available.').substring(0, 120);
  var source = a.source_id || a.source || 'Tech News';
  var link   = a.link || '#';
  var date   = '';
  if (a.pubDate) {
    try {
      date = new Date(a.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) { /* skip */ }
  }

  return '<a class="news-card" href="' + link + '" target="_blank" rel="noopener noreferrer">' +
    '<div class="news-source">' + source + '</div>' +
    '<div class="news-title">' + title + (title.length >= 90 ? '...' : '') + '</div>' +
    '<p class="news-desc">' + desc + (desc.length >= 120 ? '...' : '') + '</p>' +
    (date ? '<div class="news-date">' + date + '</div>' : '') +
    '</a>';
}

var FALLBACK_NEWS = [
  { title: 'African Fintech Startups Raised $1.3B in Q1 2025', description: 'Fintech continues to dominate African startup funding, with mobile payments and lending platforms leading investment activity.', source_id: 'TechCrunch Africa', pubDate: '2025-03-15', link: 'https://techcrunch.com' },
  { title: 'OpenAI Reaches 100 Million Weekly Active Users', description: 'ChatGPT and other OpenAI products have seen fast growth, pushing the company toward a $150B valuation this year.', source_id: 'The Verge', pubDate: '2025-03-10', link: 'https://theverge.com' },
  { title: 'Zipline Expands Drone Delivery to Southeast Asia', description: 'The Rwandan medical drone company announces new operations in Indonesia and Vietnam following its success across Africa.', source_id: 'Reuters', pubDate: '2025-03-08', link: 'https://reuters.com' },
  { title: 'Y Combinator Winter 2025 Batch Breaks Records for African Founders', description: 'Fourteen African-founded startups joined YC this cycle, the highest number the accelerator has ever accepted from the continent.', source_id: 'Disrupt Africa', pubDate: '2025-03-05', link: '#' },
  { title: 'Supabase Reports Over $1B in Annual Recurring Revenue', description: 'The open-source database platform has become one of the fastest-growing developer tools companies in history.', source_id: 'VentureBeat', pubDate: '2025-02-28', link: '#' },
  { title: 'Global Climate Tech Investment Tops $50 Billion', description: 'Cleantech startups worldwide received record funding as governments and companies accelerate their transition to clean energy.', source_id: 'Bloomberg', pubDate: '2025-02-25', link: '#' },
  { title: 'Moove Launches Electric Vehicle Financing in Nigeria', description: 'The African mobility startup is expanding into electric vehicles, helping ride-hailing drivers switch to EVs through its revenue-based model.', source_id: 'TechPoint Africa', pubDate: '2025-02-20', link: '#' },
  { title: 'AI Companies Now Account for 40 Percent of All VC Deals', description: 'A new industry report shows artificial intelligence startups capturing nearly half of all venture capital invested globally so far this year.', source_id: 'PitchBook', pubDate: '2025-02-15', link: '#' },
  { title: 'Rwanda Ranked Top Startup Hub in East Africa', description: 'The country continues attracting international companies with competitive tax policies and strong digital infrastructure.', source_id: 'African Business', pubDate: '2025-02-10', link: '#' }
];

function fetchExchangeRates() {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      exchangeRates = data.rates || null;
    })
    .catch(function(err) {
      console.warn('ExchangeRate-API not available:', err.message);
    });
}

function showSkeletons() {
  var html = '';
  for (var i = 0; i < 9; i++) {
    html += '<div class="skeleton-card">' +
      '<div style="display:flex;gap:12px;margin-bottom:1rem">' +
      '<div class="sk-line" style="width:46px;height:46px;border-radius:10px"></div>' +
      '<div style="flex:1">' +
      '<div class="sk-line" style="height:16px;width:50%"></div>' +
      '<div class="sk-line" style="height:12px;width:35%"></div>' +
      '</div>' +
      '</div>' +
      '<div style="display:flex;gap:6px;margin-bottom:0.9rem">' +
      '<div class="sk-line" style="width:70px;height:22px;border-radius:100px"></div>' +
      '<div class="sk-line" style="width:60px;height:22px;border-radius:100px"></div>' +
      '</div>' +
      '<div class="sk-line" style="height:12px;width:100%"></div>' +
      '<div class="sk-line" style="height:12px;width:80%"></div>' +
      '</div>';
  }
  cardGrid.innerHTML = html;
}

function animateStatCounter() {
  var el = document.getElementById('stat-total');
  if (!el) return;
  var target  = STARTUPS.length;
  var current = 0;
  var step    = Math.ceil(target / 25);
  var timer   = setInterval(function() {
    current = Math.min(current + step, target);
    el.textContent = current + '+';
    if (current >= target) clearInterval(timer);
  }, 50);
}

function resetAll() {
  appState.query   = '';
  appState.filters = { industry: '', stage: '', region: '', sort: 'trending' };
  appState.displayed = 12;
  searchInput.value = '';
  document.getElementById('filter-industry').value = '';
  document.getElementById('filter-stage').value    = '';
  document.getElementById('filter-region').value   = '';
  document.getElementById('filter-sort').value     = 'trending';
  applyFiltersAndRender();
  showToast('All filters cleared');
}

function setView(v) {
  appState.view = v;
  if (v === 'list') {
    cardGrid.classList.add('list-mode');
  } else {
    cardGrid.classList.remove('list-mode');
  }
  document.getElementById('grid-btn').classList.toggle('active', v === 'grid');
  document.getElementById('list-btn').classList.toggle('active', v === 'list');
}

var toastTimer = null;
function showToast(msg, isWarn) {
  toastEl.textContent = msg;
  toastEl.style.borderColor = isWarn ? '#f97316' : '';
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() {
    toastEl.classList.remove('show');
  }, 2500);
}

function getStartupById(id) {
  for (var i = 0; i < STARTUPS.length; i++) {
    if (STARTUPS[i].id === id) return STARTUPS[i];
  }
  return null;
}

function capitalize(str) {
  if (!str) return '';
  return str.split(/\s+/).map(function(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}