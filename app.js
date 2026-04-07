const API_NINJAS_KEY = window.ENV?.API_NINJAS_KEY || '';
const NEWSDATA_KEY   = window.ENV?.NEWSDATA_KEY   || '';

console.log('[StartupConnect] API Ninjas key loaded:', !!API_NINJAS_KEY);
console.log('[StartupConnect] NewsData key loaded:',   !!NEWSDATA_KEY);

const STARTUPS = [
  { id:1,  name:'Stripe',        industry:'fintech',    stage:'growth',   region:'north-america', country:'US', founded:2010, funding:'$8.7B',  employees:8000, trending:true,  website:'https://stripe.com',        description:'Stripe builds economic infrastructure for the internet, helping businesses of every size accept payments and manage their operations online.' },
  { id:2,  name:'Flutterwave',   industry:'fintech',    stage:'series-b', region:'africa',        country:'NG', founded:2016, funding:'$474M',   employees:900,  trending:true,  website:'https://flutterwave.com',   description:'Flutterwave provides payment technology for global merchants across Africa, enabling seamless cross-border transactions.' },
  { id:3,  name:'Andela',        industry:'edtech',     stage:'series-d', region:'africa',        country:'NG', founded:2014, funding:'$381M',   employees:2000, trending:false, website:'https://andela.com',        description:'Andela connects companies with vetted software engineers across Africa, building distributed technology teams at scale.' },
  { id:4,  name:'OpenAI',        industry:'ai',         stage:'growth',   region:'north-america', country:'US', founded:2015, funding:'$11.3B',  employees:1800, trending:true,  website:'https://openai.com',        description:'OpenAI is an AI safety company that builds large language models and AI systems including ChatGPT and GPT-4.' },
  { id:5,  name:'Notion',        industry:'saas',       stage:'series-c', region:'north-america', country:'US', founded:2016, funding:'$343M',   employees:600,  trending:false, website:'https://notion.so',         description:'Notion is an all-in-one workspace combining notes, tasks, wikis, and databases used by millions of teams worldwide.' },
  { id:6,  name:'Chipper Cash',  industry:'fintech',    stage:'series-c', region:'africa',        country:'UG', founded:2018, funding:'$302M',   employees:400,  trending:true,  website:'https://chippercash.com',   description:'Chipper Cash enables fee-free peer-to-peer money transfers across Africa, serving millions of users in seven countries.' },
  { id:7,  name:'Figma',         industry:'saas',       stage:'growth',   region:'north-america', country:'US', founded:2012, funding:'$333M',   employees:1000, trending:false, website:'https://figma.com',         description:'Figma is a collaborative interface design tool running in the browser, letting multiple designers work on the same file in real time.' },
  { id:8,  name:'Kobo360',       industry:'logistics',  stage:'series-a', region:'africa',        country:'NG', founded:2017, funding:'$30M',    employees:300,  trending:false, website:'https://kobo360.com',       description:'Kobo360 is a pan-African digital logistics platform connecting truck owners with businesses that need to move cargo.' },
  { id:9,  name:'Vercel',        industry:'saas',       stage:'series-c', region:'north-america', country:'US', founded:2015, funding:'$313M',   employees:400,  trending:true,  website:'https://vercel.com',        description:'Vercel is a cloud platform for deploying web applications that makes it easy for developers to ship sites instantly from Git.' },
  { id:10, name:'mPharma',       industry:'healthtech', stage:'series-d', region:'africa',        country:'GH', founded:2013, funding:'$65M',    employees:1000, trending:false, website:'https://mpharma.com',       description:'mPharma manages prescription drug inventory for pharmacies and hospitals across Africa, making medicines affordable and available.' },
  { id:11, name:'Hugging Face',  industry:'ai',         stage:'series-c', region:'north-america', country:'US', founded:2016, funding:'$235M',   employees:300,  trending:true,  website:'https://huggingface.co',    description:'Hugging Face is the AI community platform for sharing machine learning models and datasets, often called the GitHub of AI.' },
  { id:12, name:'Twiga Foods',   industry:'logistics',  stage:'series-c', region:'africa',        country:'KE', founded:2014, funding:'$70M',    employees:1000, trending:false, website:'https://twiga.com',         description:'Twiga Foods is a B2B food distribution platform connecting smallholder farmers to urban retailers in Kenya using mobile technology.' },
  { id:13, name:'Linear',        industry:'saas',       stage:'series-b', region:'north-america', country:'US', founded:2019, funding:'$52M',    employees:60,   trending:true,  website:'https://linear.app',        description:'Linear is a streamlined issue tracking tool built for high-performance software teams that prioritize speed and simplicity.' },
  { id:14, name:'Zipline',       industry:'healthtech', stage:'series-e', region:'africa',        country:'RW', founded:2014, funding:'$375M',   employees:1000, trending:true,  website:'https://flyzipline.com',    description:'Zipline operates autonomous electric drones that deliver blood, vaccines, and medical supplies to remote hospitals in Rwanda and Ghana.' },
  { id:15, name:'Coursera',      industry:'edtech',     stage:'growth',   region:'north-america', country:'US', founded:2012, funding:'$464M',   employees:1500, trending:false, website:'https://coursera.org',      description:'Coursera partners with universities and companies to offer online courses, certificates, and degrees to millions of learners worldwide.' },
  { id:16, name:'Paystack',      industry:'fintech',    stage:'growth',   region:'africa',        country:'NG', founded:2015, funding:'$8M',     employees:300,  trending:false, website:'https://paystack.com',      description:'Paystack helps African businesses accept online and in-person payments. It was acquired by Stripe in 2020.' },
  { id:17, name:'Brex',          industry:'fintech',    stage:'series-d', region:'north-america', country:'US', founded:2017, funding:'$1.5B',   employees:1200, trending:false, website:'https://brex.com',          description:'Brex offers corporate credit cards and spend management software for startups and growing companies, without personal guarantees.' },
  { id:18, name:'Solar Freeze',  industry:'cleantech',  stage:'seed',     region:'africa',        country:'KE', founded:2016, funding:'$1.2M',   employees:30,   trending:false, website:'https://solarfreeze.co.ke', description:'Solar Freeze provides solar-powered cold storage units to smallholder farmers in Kenya, reducing post-harvest losses.' },
  { id:19, name:'Supabase',      industry:'saas',       stage:'series-b', region:'asia',          country:'SG', founded:2020, funding:'$116M',   employees:90,   trending:true,  website:'https://supabase.com',      description:'Supabase is an open source Firebase alternative providing developers with a Postgres database, authentication, and APIs in one platform.' },
  { id:20, name:'LifeBank',      industry:'healthtech', stage:'series-a', region:'africa',        country:'NG', founded:2016, funding:'$6M',     employees:250,  trending:false, website:'https://lifebank.ng',       description:'LifeBank discovers blood supply and delivers blood and critical medical supplies to hospitals across Nigeria and Kenya.' },
  { id:21, name:'Moove',         industry:'fintech',    stage:'series-a', region:'africa',        country:'NG', founded:2019, funding:'$105M',   employees:700,  trending:true,  website:'https://moove.io',          description:'Moove provides vehicle financing to ride-hailing and delivery drivers across Africa through a revenue-based model.' },
  { id:22, name:'Drata',         industry:'saas',       stage:'series-c', region:'north-america', country:'US', founded:2020, funding:'$328M',   employees:600,  trending:false, website:'https://drata.com',         description:'Drata automates security compliance for companies, collecting evidence to support SOC 2, ISO 27001, HIPAA, and other frameworks.' },
  { id:23, name:'M-KOPA',        industry:'fintech',    stage:'series-f', region:'africa',        country:'KE', founded:2011, funding:'$255M',   employees:3000, trending:false, website:'https://m-kopa.com',        description:'M-KOPA lets underbanked customers in Africa buy smartphones and solar systems through daily mobile money payments.' },
];

const appState = {
  all:       [...STARTUPS],
  filtered:  [...STARTUPS],
  displayed: 12,
  view:      'grid',
  query:     '',
  tab:       'all',
  filters:   { industry:'', stage:'', region:'', sort:'trending' },
  saved:     JSON.parse(localStorage.getItem('sc_saved') || '[]'),
  comparing: [],
  flags:     {},   
};

let exchangeRates = null;
let toastTimer    = null;


const cardGrid     = document.getElementById('card-grid');
const resultCount  = document.getElementById('results-count');
const searchInput  = document.getElementById('search-input');
const loadMoreBtn  = document.getElementById('load-more-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const toastEl      = document.getElementById('toast-msg');


document.addEventListener('DOMContentLoaded', () => {


  applyFiltersAndRender();
  renderTrending();
  animateStatCounter();

 
  fetchCountryFlags();  
  fetchExchangeRates();  
  fetchNews();           
  enrichWithWikipedia();  


  if (API_NINJAS_KEY) {
    enrichWithApiNinjas();
  }


  document.getElementById('search-btn').addEventListener('click', handleSearch);
  searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSearch(); });
  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) { appState.query = ''; applyFiltersAndRender(); }
  });

  for (const id of ['filter-industry','filter-stage','filter-region','filter-sort']) {
    document.getElementById(id).addEventListener('change', function() {
      appState.filters[id.replace('filter-','')] = this.value;
      appState.displayed = 12;
      applyFiltersAndRender();
    });
  }

  document.getElementById('reset-btn').addEventListener('click', resetAll);
  loadMoreBtn.addEventListener('click', () => { appState.displayed += 8; renderCards(); });

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  document.getElementById('grid-btn').addEventListener('click', () => setView('grid'));
  document.getElementById('list-btn').addEventListener('click', () => setView('list'));

  document.getElementById('tab-all').addEventListener('click', () => {
    appState.tab = 'all'; appState.displayed = 12;
    document.getElementById('tab-all').classList.add('active');
    document.getElementById('tab-saved').classList.remove('active');
    applyFiltersAndRender();
  });
  document.getElementById('tab-saved').addEventListener('click', () => {
    appState.tab = 'saved'; appState.displayed = 12;
    document.getElementById('tab-saved').classList.add('active');
    document.getElementById('tab-all').classList.remove('active');
    applyFiltersAndRender();
  });

  document.getElementById('compare-clear-btn').addEventListener('click', clearCompare);
  document.getElementById('compare-go-btn').addEventListener('click', openCompareModal);
});

async function enrichWithApiNinjas() {
  const statusEl = document.getElementById('api-load-status');
  if (statusEl) statusEl.innerHTML = '<span class="status-loading">Fetching company data from API Ninjas...</span>';

  let enriched = 0;

  for (const startup of appState.all) {
    try {
      const url = `https://api.api-ninjas.com/v1/logo?name=${encodeURIComponent(startup.name)}`;
      const res = await fetch(url, {
        headers: { 'X-Api-Key': API_NINJAS_KEY }
      });

      if (!res.ok) {
        console.warn(`[API Ninjas] ${startup.name}: HTTP ${res.status}`);
        continue;
      }

      const data = await res.json();
      const result = Array.isArray(data) && data.length > 0 ? data[0] : null;

      if (result) {
        if (result.image)  startup.logo    = result.image;
        if (result.domain) startup.domain  = result.domain;
        if (result.ticker) startup.ticker  = result.ticker;
        enriched++;

        
        const card = cardGrid.querySelector(`[data-id="${startup.id}"]`);
        if (card && startup.logo) {
          const iconEl = card.querySelector('.card-icon');
          if (iconEl) {
            iconEl.style.backgroundImage    = `url(${startup.logo})`;
            iconEl.style.backgroundSize     = 'cover';
            iconEl.style.backgroundPosition = 'center';
            iconEl.style.backgroundColor   = '#fff';
            iconEl.textContent              = '';
          }
        }

    
        if (card && startup.ticker) {
          const tickerEl = card.querySelector('.ticker-badge');
          if (tickerEl) tickerEl.textContent = startup.ticker;
        }
      }

    } catch (err) {
      console.warn(`[API Ninjas] ${startup.name} failed:`, err.message);
    }
  }

  if (statusEl) {
    statusEl.innerHTML = enriched > 0
      ? `<span class="status-live">${enriched} companies enriched from API Ninjas</span>`
      : `<span class="status-fallback">API Ninjas returned no results — check your key in config.js</span>`;
  }
}

async function enrichWithWikipedia() {
  for (const startup of appState.all) {
    try {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(startup.name)}`;
      const res = await fetch(url);
      if (!res.ok) continue;

      const data = await res.json();

      if (data.extract && data.extract.length > 80) {
        startup.description = data.extract;
        if (data.content_urls?.desktop?.page) startup.wikiUrl   = data.content_urls.desktop.page;
        if (data.thumbnail?.source)           startup.thumbnail = data.thumbnail.source;

      
        const card = cardGrid.querySelector(`[data-id="${startup.id}"]`);
        if (card) {
          const descEl = card.querySelector('.card-desc');
          if (descEl) {
            descEl.textContent = startup.description.length > 140
              ? startup.description.substring(0, 140) + '...'
              : startup.description;
          }

          if (!startup.logo && startup.thumbnail) {
            const iconEl = card.querySelector('.card-icon');
            if (iconEl && !iconEl.style.backgroundImage) {
              iconEl.style.backgroundImage    = `url(${startup.thumbnail})`;
              iconEl.style.backgroundSize     = 'cover';
              iconEl.style.backgroundPosition = 'center';
              iconEl.textContent              = '';
            }
          }
        }
      }
    } catch (_) {
     
    }
  }
}

async function fetchCountryFlags() {
  const codes = [...new Set(appState.all.map(s => s.country))];

  for (const code of codes) {
    try {
      const res  = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      if (!res.ok) continue;
      const data = await res.json();
      if (data[0]) {
        appState.flags[code] = {
          flag: data[0].flag        || '',
          name: data[0].name?.common || code,
        };
      }
    } catch (_) { /* skip */ }
  }

 
  renderCards();
  renderTrending();
}


async function fetchExchangeRates() {
  try {
    const res  = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    exchangeRates = data.rates || null;
    console.log('[ExchangeRate] Rates loaded');
  } catch (err) {
    console.warn('[ExchangeRate] Unavailable:', err.message);
  }
}


async function fetchNews() {
  const newsGrid = document.getElementById('news-grid');
  const statusEl = document.getElementById('news-api-status');
  if (!newsGrid) return;

  newsGrid.innerHTML = '<p class="loading-text">Fetching latest news...</p>';

  if (!NEWSDATA_KEY || NEWSDATA_KEY === 'YOUR_NEWSDATA_KEY_HERE') {
    console.warn('[NewsData] No key set in config.js — using fallback news');
    if (statusEl) statusEl.innerHTML = '<span class="status-fallback">Add your NewsData.io key to config.js for live news.</span>';
    renderNews(FALLBACK_NEWS);
    return;
  }

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${NEWSDATA_KEY}&q=startup+funding+africa+tech&language=en&category=technology`;
    console.log('[NewsData] Fetching live news...');
    const res  = await fetch(url);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (data.status !== 'success' || !data.results?.length) {
      throw new Error(data.message || 'No results');
    }

    console.log(`[NewsData] ${data.results.length} articles received`);
    if (statusEl) statusEl.innerHTML = '<span class="status-live">Live news from NewsData.io</span>';
    renderNews(data.results.slice(0, 9));

  } catch (err) {
    console.warn('[NewsData] Failed:', err.message);
    if (statusEl) statusEl.innerHTML = `<span class="status-fallback">Live news unavailable (${err.message}) — showing cached articles.</span>`;
    renderNews(FALLBACK_NEWS);
  }
}

function renderNews(articles) {
  const newsGrid = document.getElementById('news-grid');
  if (!newsGrid) return;

  if (!articles.length) {
    newsGrid.innerHTML = '<p class="loading-text">No articles available.</p>';
    return;
  }

  newsGrid.innerHTML = articles.map((a) => {
    const title  = (a.title  || 'No title').substring(0, 88);
    const desc   = (a.description || a.content || '').substring(0, 118);
    const source = a.source_id || a.source || 'Tech News';
    const link   = a.link || '#';
    let date = '';
    if (a.pubDate) {
      try { date = new Date(a.pubDate).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }); }
      catch (_) {}
    }
    return `
      <a class="news-card" href="${link}" target="_blank" rel="noopener noreferrer">
        <div class="news-source">${source}</div>
        <div class="news-title">${title}${title.length >= 88 ? '...' : ''}</div>
        ${desc ? `<p class="news-desc">${desc}${desc.length >= 118 ? '...' : ''}</p>` : ''}
        ${date ? `<div class="news-date">${date}</div>` : ''}
      </a>`;
  }).join('');
}

const FALLBACK_NEWS = [
  { title:'African Fintech Startups Raised $1.3B in Q1 2025', description:'Mobile payments and lending platforms led investment across the continent.', source_id:'TechCrunch Africa', pubDate:'2025-03-15', link:'https://techcrunch.com' },
  { title:'OpenAI Reaches 100 Million Weekly Active Users', description:'ChatGPT growth pushes the company toward a $150B valuation as enterprise adoption accelerates.', source_id:'The Verge', pubDate:'2025-03-10', link:'https://theverge.com' },
  { title:'Zipline Expands Drone Delivery to Southeast Asia', description:'The Rwandan medical drone company announces new operations in Indonesia and Vietnam.', source_id:'Reuters', pubDate:'2025-03-08', link:'https://reuters.com' },
  { title:'Y Combinator W25 Sets African Founder Record', description:'Fourteen African-founded startups joined this cycle, the highest number in YC history.', source_id:'Disrupt Africa', pubDate:'2025-03-05', link:'#' },
  { title:'Supabase Crosses $1B Annual Recurring Revenue', description:'The open-source database platform is now one of the fastest-growing developer tools companies.', source_id:'VentureBeat', pubDate:'2025-02-28', link:'#' },
  { title:'Global Climate Tech Investment Tops $50 Billion', description:'Cleantech startups worldwide are receiving record funding as clean energy goals accelerate.', source_id:'Bloomberg', pubDate:'2025-02-25', link:'#' },
  { title:'Moove Launches EV Financing for Nigerian Drivers', description:'The African mobility startup expands into electric vehicles through revenue-based financing.', source_id:'TechPoint Africa', pubDate:'2025-02-20', link:'#' },
  { title:'AI Startups Now 40 Percent of All VC Deals', description:'AI and ML companies are capturing nearly half of all venture capital deployed worldwide.', source_id:'PitchBook', pubDate:'2025-02-15', link:'#' },
  { title:'Rwanda Named Leading Tech Hub in East Africa', description:'Competitive policies and digital infrastructure keep attracting international startups.', source_id:'African Business', pubDate:'2025-02-10', link:'#' },
];


function handleSearch() {
  appState.query = searchInput.value.trim().toLowerCase();
  appState.displayed = 12;
  applyFiltersAndRender();
  if (appState.query) showToast(`Results for "${searchInput.value}"`);
}


function applyFiltersAndRender() {
  let data = appState.tab === 'saved'
    ? appState.all.filter(s => appState.saved.includes(s.id))
    : [...appState.all];

  if (appState.query) {
    data = data.filter(s =>
      s.name.toLowerCase().includes(appState.query) ||
      s.description.toLowerCase().includes(appState.query) ||
      s.industry.toLowerCase().includes(appState.query) ||
      s.region.toLowerCase().includes(appState.query)
    );
  }

  if (appState.filters.industry) data = data.filter(s => s.industry === appState.filters.industry);
  if (appState.filters.stage)    data = data.filter(s => s.stage    === appState.filters.stage);
  if (appState.filters.region)   data = data.filter(s => s.region   === appState.filters.region);

  switch (appState.filters.sort) {
    case 'trending':  data.sort((a,b) => (b.trending?1:0)-(a.trending?1:0)); break;
    case 'newest':    data.sort((a,b) => b.founded - a.founded); break;
    case 'funding':   data.sort((a,b) => parseFunding(b.funding) - parseFunding(a.funding)); break;
    case 'employees': data.sort((a,b) => b.employees - a.employees); break;
    case 'name':      data.sort((a,b) => a.name.localeCompare(b.name)); break;
  }

  appState.filtered = data;
  renderCards();
}

function parseFunding(str) {
  if (!str) return 0;
  const n = parseFloat(str.replace(/[^0-9.]/g, ''));
  return str.includes('B') ? n * 1000 : n || 0;
}


function renderCards() {
  const list  = appState.filtered;
  const total = list.length;
  const show  = Math.min(appState.displayed, total);

  resultCount.textContent = `Showing ${show} of ${total} startup${total !== 1 ? 's' : ''}`;

  if (total === 0) {
    cardGrid.innerHTML = `
      <div class="empty-state">
        <p>${appState.tab === 'saved' ? 'No saved startups yet' : 'Nothing found'}</p>
        <p>${appState.tab === 'saved'
          ? 'Click Save on any card to bookmark it here.'
          : 'Try a different search or reset the filters.'}</p>
      </div>`;
    loadMoreBtn.style.display = 'none';
    return;
  }

  cardGrid.innerHTML = list.slice(0, show).map((s, i) => buildCardHTML(s, i)).join('');
  loadMoreBtn.style.display = show >= total ? 'none' : 'block';

  cardGrid.querySelectorAll('.startup-card').forEach(card => {
    const id = parseInt(card.getAttribute('data-id'), 10);
    card.addEventListener('click', e => {
      if (e.target.closest('.action-btn')) return;
      const startup = getById(id);
      if (startup) openModal(startup);
    });
  });

  cardGrid.querySelectorAll('.btn-save').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleSave(parseInt(btn.getAttribute('data-id'), 10)); });
  });

  cardGrid.querySelectorAll('.btn-cmp').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleCompare(parseInt(btn.getAttribute('data-id'), 10)); });
  });
}


function buildCardHTML(s, index) {
  const delay     = (index % 12) * 0.04;
  const isSaved   = appState.saved.includes(s.id);
  const inCompare = appState.comparing.includes(s.id);
  const color     = getIconColor(s.industry);
  const initials  = getInitials(s.name);
  const flag      = appState.flags[s.country]?.flag || '';

  const iconStyle = s.logo
    ? `background:url('${s.logo}') center/cover #fff`
    : s.thumbnail
      ? `background:url('${s.thumbnail}') center/cover #fff`
      : `background:${color}`;

  const iconText  = (s.logo || s.thumbnail) ? '' : initials;
  const trendBadge = s.trending ? '<span class="trending-tag">Trending</span>' : '';
  const tickerBadge = s.ticker
    ? `<span class="ticker-badge badge" style="background:rgba(255,255,255,0.05);color:#666;border:1px solid #333;font-size:10px">${s.ticker}</span>`
    : '';

  const desc = s.description.length > 140
    ? s.description.substring(0, 140) + '...'
    : s.description;

  return `
    <article class="startup-card" data-id="${s.id}" style="animation-delay:${delay}s">
      <div class="card-top">
        <div class="card-icon" style="${iconStyle}">${iconText}</div>
        <div class="card-title-block">
          <h3>${s.name} ${flag}</h3>
          <span class="card-tagline">${capitalize(s.industry)} &middot; ${appState.flags[s.country]?.name || s.country}</span>
        </div>
        ${trendBadge}
      </div>
      <div class="card-badges">
        <span class="badge badge-ind">${capitalize(s.industry)}</span>
        <span class="badge badge-stg">${capitalize(s.stage)}</span>
        <span class="badge badge-reg">${capitalize(s.region.replace(/-/g,' '))}</span>
        ${tickerBadge}
      </div>
      <p class="card-desc">${desc}</p>
      <div class="card-meta">
        <span class="meta-funding">${s.funding}</span>
        <span>${s.employees.toLocaleString()} people</span>
        <span>${s.founded}</span>
      </div>
      <div class="card-actions">
        <button class="action-btn btn-save ${isSaved ? 'saved-state' : ''}" data-id="${s.id}">
          ${isSaved ? 'Saved' : 'Save'}
        </button>
        <button class="action-btn btn-cmp ${inCompare ? 'compare-state' : ''}" data-id="${s.id}">
          ${inCompare ? 'Comparing' : 'Compare'}
        </button>
      </div>
    </article>`;
}

function toggleSave(id) {
  const s   = getById(id);
  if (!s) return;
  const idx = appState.saved.indexOf(id);
  if (idx === -1) { appState.saved.push(id); showToast(`${s.name} saved`); }
  else            { appState.saved.splice(idx, 1); showToast(`${s.name} removed`); }
  localStorage.setItem('sc_saved', JSON.stringify(appState.saved));
  const badge = document.getElementById('saved-badge');
  if (badge) badge.textContent = appState.saved.length || '';
  renderCards();
}

// ── compare ───────────────────────────────────────────────────────────
function toggleCompare(id) {
  const s   = getById(id);
  if (!s) return;
  const idx = appState.comparing.indexOf(id);
  if (idx === -1) {
    if (appState.comparing.length >= 3) { showToast('Max 3 startups', true); return; }
    appState.comparing.push(id); showToast(`${s.name} added to compare`);
  } else {
    appState.comparing.splice(idx, 1); showToast(`${s.name} removed`);
  }
  updateCompareBar();
  renderCards();
}

function updateCompareBar() {
  const bar   = document.getElementById('compare-bar');
  const chips = document.getElementById('compare-chips');
  if (!bar || !chips) return;
  if (appState.comparing.length === 0) { bar.classList.remove('visible'); return; }
  bar.classList.add('visible');
  chips.innerHTML = appState.comparing.map(id => {
    const s = getById(id);
    return s ? `<div class="compare-chip">${s.name}<button onclick="toggleCompare(${id})">x</button></div>` : '';
  }).join('');
}

function clearCompare() { appState.comparing = []; updateCompareBar(); renderCards(); }

function openCompareModal() {
  if (appState.comparing.length < 2) { showToast('Select at least 2 startups', true); return; }
  const startups = appState.comparing.map(getById).filter(Boolean);
  const fields = [
    ['Industry',  s => capitalize(s.industry)],
    ['Stage',     s => capitalize(s.stage)],
    ['Region',    s => capitalize(s.region.replace(/-/g,' '))],
    ['Country',   s => `${appState.flags[s.country]?.flag||''} ${appState.flags[s.country]?.name||s.country}`],
    ['Founded',   s => String(s.founded)],
    ['Funding',   s => `<span class="cmp-green">${s.funding}</span>`],
    ['Team Size', s => s.employees.toLocaleString() + ' people'],
    ['Ticker',    s => s.ticker || 'N/A'],
  ];
  const headers = '<th></th>' + startups.map(s => `<th>${s.name}</th>`).join('');
  const rows    = fields.map(([lbl, fn]) =>
    `<tr><td>${lbl}</td>${startups.map(s => `<td>${fn(s)}</td>`).join('')}</tr>`
  ).join('');
  modalContent.innerHTML = `
    <h2 class="modal-name" style="margin-bottom:1.25rem">Compare Startups</h2>
    <div style="overflow-x:auto">
      <table class="compare-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── modal ─────────────────────────────────────────────────────────────
function openModal(s) {
  const isSaved     = appState.saved.includes(s.id);
  const color       = getIconColor(s.industry);
  const initials    = getInitials(s.name);
  const flag        = appState.flags[s.country]?.flag || '';
  const countryName = appState.flags[s.country]?.name || s.country;

  const iconHTML = (s.logo || s.thumbnail)
    ? `<img src="${s.logo || s.thumbnail}" alt="${s.name}"
         style="width:58px;height:58px;border-radius:14px;object-fit:cover;margin-bottom:1.1rem;background:#fff"
         onerror="this.style.display='none'">`
    : `<div class="modal-icon" style="background:${color}">${initials}</div>`;

  let exchangeNote = '';
  if (exchangeRates) {
    const base = parseFunding(s.funding);
    if (base > 0) {
      const usd = base * 1_000_000;
      const kes = Math.round(usd * (exchangeRates.KES || 129)).toLocaleString();
      const ngn = Math.round(usd * (exchangeRates.NGN || 1600)).toLocaleString();
      exchangeNote = `<p class="modal-exchange">${s.funding} &asymp; KES ${kes} &middot; NGN ${ngn} <span style="font-size:10px;color:#555">(ExchangeRate-API)</span></p>`;
    }
  }

  const wikiLink = s.wikiUrl
    ? `<a href="${s.wikiUrl}" target="_blank" rel="noopener" style="font-size:12px;color:#6c47ff;display:block;margin-top:0.5rem">Read on Wikipedia &rarr;</a>`
    : '';

  modalContent.innerHTML = `
    ${iconHTML}
    <h2 class="modal-name">${s.name} ${flag}</h2>
    <p class="modal-tagline">${capitalize(s.industry)} &middot; ${countryName} &middot; Founded ${s.founded}</p>
    <div class="modal-badges">
      <span class="badge badge-ind">${capitalize(s.industry)}</span>
      <span class="badge badge-stg">${capitalize(s.stage)}</span>
      <span class="badge badge-reg">${capitalize(s.region.replace(/-/g,' '))}</span>
      ${s.ticker ? `<span class="badge" style="background:rgba(255,255,255,0.06);color:#888;border:1px solid #333;font-size:10px">${s.ticker}</span>` : ''}
    </div>
    <p class="modal-desc">${s.description}</p>
    <div class="modal-stats-row">
      <div class="modal-stat">
        <span class="val" style="color:#00d68f">${s.funding}</span>
        <span class="lbl">Funding</span>
      </div>
      <div class="modal-stat">
        <span class="val" style="color:#6c47ff">${s.employees.toLocaleString()}</span>
        <span class="lbl">Employees</span>
      </div>
      <div class="modal-stat">
        <span class="val">${s.founded}</span>
        <span class="lbl">Founded</span>
      </div>
    </div>
    ${exchangeNote}
    <div class="modal-buttons">
      <a class="btn-visit" href="${s.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      <button class="btn-secondary" id="modal-save-btn">${isSaved ? 'Remove from Saved' : 'Save Startup'}</button>
      <button class="btn-secondary" id="modal-cmp-btn">Add to Compare</button>
    </div>
    ${wikiLink}
    <p style="font-size:10px;color:#444;margin-top:0.75rem">
      Enriched by API Ninjas &middot; Wikipedia &middot; REST Countries &middot; ExchangeRate-API
    </p>`;

  document.getElementById('modal-save-btn').addEventListener('click', () => { toggleSave(s.id); closeModal(); });
  document.getElementById('modal-cmp-btn').addEventListener('click',  () => { toggleCompare(s.id); closeModal(); });
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderTrending() {
  const el = document.getElementById('trending-list');
  if (!el) return;
  const trending = appState.all.filter(s => s.trending);
  el.innerHTML = trending.map((s, i) => `
    <div class="trending-card" onclick="openModal(getById(${s.id}))">
      <span class="trending-rank">${String(i+1).padStart(2,'0')}</span>
      <div class="trending-name">${s.name} ${appState.flags[s.country]?.flag||''}</div>
      <div class="trending-sub">${capitalize(s.industry)} &middot; ${capitalize(s.region.replace(/-/g,' '))}</div>
      <div class="trending-up">Up this week</div>
    </div>`).join('');
}

function animateStatCounter() {
  const el = document.getElementById('stat-total');
  if (!el) return;
  const target = appState.all.length;
  let current  = 0;
  const timer = setInterval(() => {
    current = Math.min(current + Math.ceil(target / 25), target);
    el.textContent = `${current}+`;
    if (current >= target) clearInterval(timer);
  }, 50);
}

function resetAll() {
  appState.query   = '';
  appState.filters = { industry:'', stage:'', region:'', sort:'trending' };
  appState.displayed = 12;
  searchInput.value = '';
  ['filter-industry','filter-stage','filter-region'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('filter-sort').value = 'trending';
  applyFiltersAndRender();
  showToast('Filters cleared');
}

function setView(v) {
  appState.view = v;
  cardGrid.classList.toggle('list-mode', v === 'list');
  document.getElementById('grid-btn').classList.toggle('active', v === 'grid');
  document.getElementById('list-btn').classList.toggle('active', v === 'list');
}

function showToast(msg, isWarn = false) {
  toastEl.textContent = msg;
  toastEl.style.borderColor = isWarn ? '#f97316' : '';
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

function getById(id)    { return appState.all.find(s => s.id === id) || null; }
function getInitials(n) { const p = n.trim().split(/\s+/); return p.length === 1 ? p[0].substring(0,2).toUpperCase() : (p[0][0]+p[1][0]).toUpperCase(); }
function getIconColor(industry) {
  return { fintech:'#6c47ff', healthtech:'#e05252', edtech:'#d4ac0d', saas:'#2563eb', ai:'#0891b2', ecommerce:'#ea580c', cleantech:'#16a34a', logistics:'#ca8a04' }[industry] || '#555';
}
function capitalize(str) {
  return str ? str.split(/\s+/).map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(' ') : '';
}