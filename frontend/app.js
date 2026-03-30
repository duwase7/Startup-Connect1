   const CONFIG = {
  
    NEWSDATA_KEY: 'pub_64e9c8f2d1a5b3e7f9012345abcdef12', 
  
    EXCHANGE_KEY: 'free', 
  
  };
  
  const STARTUP_DATABASE = [
    { id:1, name:'Stripe', tagline:'Infrastructure for internet commerce', industry:'fintech', stage:'growth', region:'north-america', country:'US', founded:2010, funding:'$8.7B', employees:8000, description:'Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size use Stripe to accept payments and manage their business online.', founders:'Patrick Collison, John Collison', website:'https://stripe.com', trending:true },
    { id:2, name:'Flutterwave', tagline:'Powering payments across Africa', industry:'fintech', stage:'series-b', region:'africa', country:'NG', founded:2016, funding:'$474M', employees:900, description:'Flutterwave provides payment technology for global merchants and payment service providers across Africa, enabling seamless cross-border transactions.', founders:'Olugbenga Agboola, Adeleke Adekoya', website:'https://flutterwave.com', trending:true },
    { id:3, name:'Andela', tagline:'Connecting Africa\'s tech talent to global companies', industry:'edtech', stage:'series-d', region:'africa', country:'NG', founded:2014, funding:'$381M', employees:2000, description:'Andela builds distributed technology teams by connecting companies with vetted, world-class software engineers across Africa and beyond.', founders:'Jeremy Johnson, Christina Sass, Ian Carnevale', website:'https://andela.com', trending:false },
    { id:4, name:'OpenAI', tagline:'AI research and deployment company', industry:'ai', stage:'growth', region:'north-america', country:'US', founded:2015, funding:'$11.3B', employees:1800, description:'OpenAI is an AI safety company building large language models and AI systems for the benefit of humanity, including ChatGPT and GPT-4.', founders:'Sam Altman, Greg Brockman, Ilya Sutskever', website:'https://openai.com', trending:true },
    { id:5, name:'Notion', tagline:'The all-in-one workspace', industry:'saas', stage:'series-c', region:'north-america', country:'US', founded:2016, funding:'$343M', employees:600, description:'Notion is an all-in-one workspace combining notes, tasks, wikis, and databases. Teams and individuals use it to manage knowledge and workflow.', founders:'Ivan Zhao, Simon Last', website:'https://notion.so', trending:false },
    { id:6, name:'Chipper Cash', tagline:'Simple cross-border payments for Africa', industry:'fintech', stage:'series-c', region:'africa', country:'UG', founded:2018, funding:'$302M', employees:400, description:'Chipper Cash enables peer-to-peer, fee-free money transfers across Africa, serving millions in 7 African countries with mobile-first design.', founders:'Ham Serunjogi, Maijid Moujaled', website:'https://chippercash.com', trending:true },
    { id:7, name:'Figma', tagline:'Where teams design together', industry:'saas', stage:'growth', region:'north-america', country:'US', founded:2012, funding:'$333M', employees:1000, description:'Figma is a collaborative interface design tool that enables design teams to create, test, and ship better designs from start to finish.', founders:'Dylan Field, Evan Wallace', website:'https://figma.com', trending:false },
    { id:8, name:'Kobo360', tagline:'African logistics platform', industry:'logistics', stage:'series-a', region:'africa', country:'NG', founded:2017, funding:'$30M', employees:300, description:'Kobo360 is a pan-African digital logistics platform that optimizes haulage operations across Africa using technology to connect truck owners with cargo owners.', founders:'Obi Ozor, Ife Oyedele', website:'https://kobo360.com', trending:false },
    { id:9, name:'Vercel', tagline:'Develop. Preview. Ship.', industry:'saas', stage:'series-c', region:'north-america', country:'US', founded:2015, funding:'$313M', employees:400, description:'Vercel is a cloud platform for static sites and Serverless Functions enabling developers to host websites and web services that deploy instantly.', founders:'Guillermo Rauch', website:'https://vercel.com', trending:true },
    { id:10, name:'mPharma', tagline:'Managing healthcare supply chains across Africa', industry:'healthtech', stage:'series-d', region:'africa', country:'GH', founded:2013, funding:'$65M', employees:1000, description:'mPharma is a healthcare company that manages prescription drug inventory for pharmacies and hospitals across Africa, making medicines affordable and accessible.', founders:'Gregory Rockson, Daniel Shoukimas', website:'https://mpharma.com', trending:false },
    { id:11, name:'Hugging Face', tagline:'The AI community building the future', industry:'ai', stage:'series-c', region:'north-america', country:'US', founded:2016, funding:'$235M', employees:300, description:'Hugging Face is an AI company building the GitHub of machine learning — an open platform for sharing models, datasets, and apps.', founders:'Clément Delangue, Julien Chaumond, Thomas Wolf', website:'https://huggingface.co', trending:true },
    { id:12, name:'Twiga Foods', tagline:'Digitizing African food supply chains', industry:'logistics', stage:'series-c', region:'africa', country:'KE', founded:2014, funding:'$70M', employees:1000, description:'Twiga Foods is a B2B food distribution platform connecting farmers to urban retailers in Kenya using mobile technology and cold chain logistics.', founders:'Peter Njonjo, Grant Brooke', website:'https://twiga.com', trending:false },
    { id:13, name:'Linear', tagline:'The issue tracker for high-performance teams', industry:'saas', stage:'series-b', region:'north-america', country:'US', founded:2019, funding:'$52M', employees:60, description:'Linear is an issue tracking and project management tool built for modern software teams that prioritize speed, efficiency, and developer experience.', founders:'Karri Saarinen, Jori Lallo, Tuomas Artman', website:'https://linear.app', trending:true },
    { id:14, name:'Zipline', tagline:'Drone delivery for medical supplies', industry:'healthtech', stage:'series-e', region:'africa', country:'RW', founded:2014, funding:'$375M', employees:1000, description:'Zipline uses autonomous electric drones to deliver blood, vaccines, and medical supplies to remote communities across Rwanda, Ghana, and beyond.', founders:'Keller Rinaudo Cliffton, Keenan Wyrobek, Will Hetzler', website:'https://flyzipline.com', trending:true },
    { id:15, name:'Coursera', tagline:'Transforming lives through learning', industry:'edtech', stage:'growth', region:'north-america', country:'US', founded:2012, funding:'$464M', employees:1500, description:'Coursera is an online learning platform offering courses, certificates, and degrees from world-class universities and companies to learners worldwide.', founders:'Andrew Ng, Daphne Koller', website:'https://coursera.org', trending:false },
    { id:16, name:'Paystack', tagline:'Helping businesses in Africa get paid', industry:'fintech', stage:'growth', region:'africa', country:'NG', founded:2015, funding:'$8M + Acquired by Stripe', employees:300, description:'Paystack is a modern payments infrastructure company helping businesses in Africa get paid by anyone, anywhere in the world.', founders:'Shola Akinlade, Ezra Olubi', website:'https://paystack.com', trending:false },
    { id:17, name:'Brex', tagline:'Financial services for growing companies', industry:'fintech', stage:'series-d', region:'north-america', country:'US', founded:2017, funding:'$1.5B', employees:1200, description:'Brex builds financial services and software to help companies of all sizes manage their finances — from corporate cards to banking to spend management.', founders:'Pedro Franceschi, Henrique Dubugras', website:'https://brex.com', trending:false },
    { id:18, name:'Solar Freeze', tagline:'Cold storage powered by solar for African farmers', industry:'cleantech', stage:'seed', region:'africa', country:'KE', founded:2016, funding:'$1.2M', employees:30, description:'Solar Freeze provides solar-powered cold storage to smallholder farmers in Kenya, reducing post-harvest losses and improving income for rural communities.', founders:'Eric Kimani', website:'https://solarfreeze.co.ke', trending:false },
    { id:19, name:'Supabase', tagline:'The open source Firebase alternative', industry:'saas', stage:'series-b', region:'asia', country:'SG', founded:2020, funding:'$116M', employees:90, description:'Supabase is an open source platform providing developers with a Postgres database, Auth, instant APIs, realtime subscriptions, storage, and functions.', founders:'Paul Copplestone, Ant Wilson', website:'https://supabase.com', trending:true },
    { id:20, name:'LifeBank', tagline:'Essential supplies delivered on time', industry:'healthtech', stage:'series-a', region:'africa', country:'NG', founded:2016, funding:'$6M', employees:250, description:'LifeBank is a health-focused technology company that discovers blood banks and delivers blood and other essential medical items to hospitals across Nigeria and Kenya.', founders:'Temie Giwa-Tubosun', website:'https://lifebank.ng', trending:false },
    { id:21, name:'Anduril Industries', emoji:'🛡️', tagline:'Defense technology for the 21st century', industry:'saas', stage:'series-e', region:'north-america', country:'US', founded:2017, funding:'$2.8B', employees:3000, description:'Anduril is a defense technology company that builds autonomous systems, AI-powered hardware, and software for military and government customers.', founders:'Palmer Luckey, Trae Stephens', website:'https://anduril.com', trending:false },
    { id:22, name:'Moove', tagline:'Mobility fintech for Africa', industry:'fintech', stage:'series-a', region:'africa', country:'NG', founded:2019, funding:'$105M', employees:700, description:'Moove provides vehicle financing to mobility entrepreneurs across Africa, enabling ride-hailing and delivery drivers to own their vehicles through revenue-based financing.', founders:'Ladi Delano, Jide Odunsi', website:'https://moove.io', trending:true },
    { id:23, name:'Drata', tagline:'Automated compliance platform', industry:'saas', stage:'series-c', region:'north-america', country:'US', founded:2020, funding:'$328M', employees:600, description:'Drata automates security and compliance for companies, continuously monitoring and collecting evidence to support SOC 2, ISO 27001, HIPAA, and other frameworks.', founders:'Adam Markowitz, Daniel Marashlian, Troy Markowitz', website:'https://drata.com', trending:false },
    { id:24, name:'M-KOPA', tagline:'Affordable smartphone financing across Africa', industry:'fintech', stage:'series-f', region:'africa', country:'KE', founded:2011, funding:'$255M', employees:3000, description:'M-KOPA connects millions of underbanked customers in Africa to essential products and services through a unique digital asset financing model.', founders:'Jesse Moore, Nick Hughes, Chad Larson', website:'https://m-kopa.com', trending:false },
  ];
  
 
  const state = {
    all: [...STARTUP_DATABASE],
    filtered: [...STARTUP_DATABASE],
    displayed: 12,
    view: 'grid',
    query: '',
    filters: { industry: '', stage: '', region: '', sort: 'trending' },
  };
  

  const grid = document.getElementById('startup-grid');
  const resultsCount = document.getElementById('results-count');
  const searchInput = document.getElementById('search-input');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const modal = document.getElementById('modal-backdrop');
  const modalBody = document.getElementById('modal-body');
  const toast = document.getElementById('toast');
  
  document.addEventListener('DOMContentLoaded', () => {
    renderSkeletons();
    setTimeout(() => {
      applyFilters();
      loadNews();
      renderTrending();
      updateStats();
    }, 600);
  
  
    document.getElementById('search-btn').addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  

    ['filter-industry','filter-stage','filter-region','filter-sort'].forEach(id => {
      document.getElementById(id).addEventListener('change', () => {
        state.filters[id.replace('filter-','')] = document.getElementById(id).value;
        state.displayed = 12;
        applyFilters();
      });
    });
  

    document.getElementById('reset-filters').addEventListener('click', resetFilters);
  
  
    loadMoreBtn.addEventListener('click', () => {
      state.displayed += 8;
      renderCards();
    });
  
  
    document.getElementById('modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  
    document.getElementById('grid-view-btn').addEventListener('click', () => setView('grid'));
    document.getElementById('list-view-btn').addEventListener('click', () => setView('list'));
  });
  
  

  function doSearch() {
    state.query = searchInput.value.trim().toLowerCase();
    state.displayed = 12;
    applyFilters();
    if (state.query) showToast(`Searching for "${searchInput.value}"...`);
  }
  
  function applyFilters() {
    let data = [...state.all];
  
 
    if (state.query) {
      data = data.filter(s =>
        s.name.toLowerCase().includes(state.query) ||
        s.description.toLowerCase().includes(state.query) ||
        s.industry.toLowerCase().includes(state.query) ||
        s.tagline.toLowerCase().includes(state.query) ||
        (s.founders && s.founders.toLowerCase().includes(state.query))
      );
    }
  
  
    if (state.filters.industry) data = data.filter(s => s.industry === state.filters.industry);
    if (state.filters.stage) data = data.filter(s => s.stage === state.filters.stage);
    if (state.filters.region) data = data.filter(s => s.region === state.filters.region);
  
  
    switch (state.filters.sort) {
      case 'trending': data.sort((a,b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0)); break;
      case 'newest': data.sort((a,b) => b.founded - a.founded); break;
      case 'funding': data.sort((a,b) => {
        const parse = f => parseFloat(f.replace(/[^0-9.]/g,'')) * (f.includes('B') ? 1000 : 1);
        return parse(b.funding) - parse(a.funding);
      }); break;
      case 'employees': data.sort((a,b) => b.employees - a.employees); break;
      case 'name': data.sort((a,b) => a.name.localeCompare(b.name)); break;
    }
  
    state.filtered = data;
    renderCards();
  }
  
  function resetFilters() {
    state.query = '';
    state.filters = { industry:'', stage:'', region:'', sort:'trending' };
    state.displayed = 12;
    searchInput.value = '';
    ['filter-industry','filter-stage','filter-region'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('filter-sort').value = 'trending';
    applyFilters();
    showToast('Filters cleared');
  }
  
  
  function renderCards() {
    const slice = state.filtered.slice(0, state.displayed);
    resultsCount.textContent = `Showing ${Math.min(state.displayed, state.filtered.length)} of ${state.filtered.length} startups`;
  
    if (state.filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state"><p>🔍</p><p>No startups match your search.</p></div>`;
      loadMoreBtn.style.display = 'none';
      return;
    }
  
    grid.innerHTML = slice.map((s, i) => cardHTML(s, i)).join('');
    loadMoreBtn.style.display = state.displayed >= state.filtered.length ? 'none' : 'block';
  

    grid.querySelectorAll('.startup-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        openModal(state.all.find(s => s.id === id));
      });
    });
  }
  
  function cardHTML(s, i) {
    const delay = (i % 12) * 0.04;
    return `
    <article class="startup-card" data-id="${s.id}" style="animation-delay:${delay}s">
      <div class="card-header">
        <div class="card-logo" style="background:${logoColor(s.industry)}">${s.emoji}</div>
        <div class="card-title">
          <h3>${s.name}${s.trending ? ' <span style="font-size:11px;color:#ff6b35">🔥</span>' : ''}</h3>
          <div class="card-tagline">${s.tagline}</div>
        </div>
      </div>
      <div class="card-badges">
        <span class="badge badge-industry">${capitalize(s.industry)}</span>
        <span class="badge badge-stage">${capitalize(s.stage)}</span>
        <span class="badge badge-region">${capitalize(s.region.replace('-',' '))}</span>
      </div>
      <p class="card-desc">${s.description}</p>
      <div class="card-meta">
        <span class="funding">💰 ${s.funding}</span>
        <span class="employees">👥 ${s.employees.toLocaleString()} people</span>
        <span>📅 ${s.founded}</span>
      </div>
    </article>`;
  }
  
  function logoColor(industry) {
    const map = { fintech:'rgba(0,229,160,0.15)', healthtech:'rgba(255,107,107,0.15)', edtech:'rgba(255,209,0,0.15)', saas:'rgba(124,92,252,0.15)', ai:'rgba(0,212,255,0.15)', ecommerce:'rgba(255,107,53,0.15)', cleantech:'rgba(79,209,97,0.15)', logistics:'rgba(251,197,49,0.15)' };
    return map[industry] || 'rgba(255,255,255,0.1)';
  }
  
  function openModal(s) {
    modalBody.innerHTML = `
      <div class="modal-logo">${s.emoji}</div>
      <h2>${s.name}</h2>
      <p class="modal-tagline">${s.tagline}</p>
      <div class="modal-badges">
        <span class="badge badge-industry">${capitalize(s.industry)}</span>
        <span class="badge badge-stage">${capitalize(s.stage)}</span>
        <span class="badge badge-region">${capitalize(s.region.replace('-',' '))}</span>
      </div>
      <p class="modal-desc">${s.description}</p>
      <div class="modal-stats">
        <div class="modal-stat-item">
          <div class="val" style="color:#00e5a0">${s.funding}</div>
          <div class="lbl">Total Funding</div>
        </div>
        <div class="modal-stat-item">
          <div class="val" style="color:#7c5cfc">${s.employees.toLocaleString()}</div>
          <div class="lbl">Employees</div>
        </div>
        <div class="modal-stat-item">
          <div class="val">${s.founded}</div>
          <div class="lbl">Founded</div>
        </div>
      </div>
      <p class="modal-founders">👤 Founders: <span>${s.founders}</span></p>
      <a class="modal-website" href="${s.website}" target="_blank" rel="noopener">Visit Website ↗</a>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  

  function renderTrending() {
    const trending = state.all.filter(s => s.trending);
    const trendingGrid = document.getElementById('trending-grid');
    trendingGrid.innerHTML = trending.map((s, i) => `
      <div class="trending-card">
        <div class="trending-rank">${String(i + 1).padStart(2, '0')}</div>
        <div class="trending-info">
          <h4>${s.emoji} ${s.name}</h4>
          <p>${capitalize(s.industry)} · ${capitalize(s.region.replace('-',' '))}</p>
          <span class="trending-change">▲ Trending</span>
        </div>
      </div>
    `).join('');
  }
  
  async function loadNews() {
    const newsGrid = document.getElementById('news-grid');
    try {
    
      const url = `https://newsdata.io/api/1/news?apikey=${CONFIG.NEWSDATA_KEY}&q=startup+funding&language=en&category=technology`;
      const res = await fetch(url);
  
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
  
      if (data.status !== 'success' || !data.results?.length) {
        throw new Error('No results from NewsData.io');
      }
  
      const articles = data.results.slice(0, 9);
      newsGrid.innerHTML = articles.map(a => newsCardHTML(a)).join('');
  
    } catch (err) {
     
      console.warn('NewsData.io fetch failed, using fallback:', err.message);
      newsGrid.innerHTML = FALLBACK_NEWS.map(a => newsCardHTML(a)).join('');
    }
  }
  
  function newsCardHTML(a) {
    const title = a.title || 'Untitled';
    const desc = a.description || a.content?.substring(0, 120) || 'No description available.';
    const source = a.source_id || a.source || 'Tech News';
    const date = a.pubDate ? new Date(a.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
    const link = a.link || '#';
    return `
      <a class="news-card" href="${link}" target="_blank" rel="noopener">
        <div class="news-source">${source}</div>
        <div class="news-title">${title.length > 80 ? title.substring(0, 80) + '…' : title}</div>
        <p class="news-desc">${desc.length > 100 ? desc.substring(0, 100) + '…' : desc}</p>
        ${date ? `<div class="news-date">${date}</div>` : ''}
      </a>
    `;
  }
  

  const FALLBACK_NEWS = [
    { title: 'African Fintech Startups Raised $1.3B in Q1 2025', description: 'Fintech continues to dominate African startup funding, with mobile payments and lending platforms leading the charge.', source_id: 'TechCrunch Africa', pubDate: '2025-03-15', link: 'https://techcrunch.com' },
    { title: 'OpenAI Reaches 100M Weekly Active Users', description: 'ChatGPT and other OpenAI products have seen explosive growth, pushing the company toward a $150B valuation.', source_id: 'The Verge', pubDate: '2025-03-10', link: 'https://theverge.com' },
    { title: 'Zipline Expands Drone Delivery to Southeast Asia', description: 'The Rwandan medical drone startup announces expansion into Indonesia and Vietnam after its Africa success.', source_id: 'Reuters', pubDate: '2025-03-08', link: 'https://reuters.com' },
    { title: 'Y Combinator W25 Batch Includes Record African Founders', description: 'This year\'s winter batch features the most African-founded startups in YC history, with 14 companies from the continent.', source_id: 'Disrupt Africa', pubDate: '2025-03-05', link: '#' },
    { title: 'Supabase Hits $1B ARR Milestone', description: 'The open-source Firebase alternative crosses a major revenue threshold, proving developers will pay for quality infrastructure.', source_id: 'VentureBeat', pubDate: '2025-02-28', link: '#' },
    { title: 'Climate Tech Funding Surpasses $50B Globally', description: 'Cleantech startups globally received unprecedented investment as climate goals accelerate deployment of new technologies.', source_id: 'Bloomberg', pubDate: '2025-02-25', link: '#' },
    { title: 'Moove Launches EV Fleet in Nigeria', description: 'The African mobility fintech pivots toward electric vehicles, partnering with Uber to finance EV adoption among drivers.', source_id: 'TechPoint Africa', pubDate: '2025-02-20', link: '#' },
    { title: 'AI Startups Now Represent 40% of All VC Deals', description: 'A new report shows AI and machine learning companies capturing nearly half of all venture capital deployed worldwide.', source_id: 'PitchBook', pubDate: '2025-02-15', link: '#' },
    { title: 'Rwanda Names Kigali a Leading African Tech Hub', description: 'The East African nation continues to attract international startups with favorable tax policies and robust digital infrastructure.', source_id: 'AfricanBusiness', pubDate: '2025-02-10', link: '#' },
  ];
  

  function renderSkeletons() {
    grid.innerHTML = Array(8).fill(0).map(() => `
      <div class="skeleton-card">
        <div style="display:flex;gap:12px;margin-bottom:1rem">
          <div class="skeleton" style="width:48px;height:48px;border-radius:12px"></div>
          <div style="flex:1">
            <div class="skeleton skeleton-title" style="margin-bottom:8px"></div>
            <div class="skeleton skeleton-sub"></div>
          </div>
        </div>
        <div style="display:flex;gap:6px;margin-bottom:1rem">
          <div class="skeleton" style="width:70px;height:22px;border-radius:100px"></div>
          <div class="skeleton" style="width:60px;height:22px;border-radius:100px"></div>
          <div class="skeleton" style="width:80px;height:22px;border-radius:100px"></div>
        </div>
        <div class="skeleton skeleton-para" style="margin-bottom:8px"></div>
        <div class="skeleton skeleton-para-short" style="margin-bottom:1rem"></div>
        <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:12px;display:flex;justify-content:space-between">
          <div class="skeleton" style="width:80px;height:14px"></div>
          <div class="skeleton" style="width:60px;height:14px"></div>
        </div>
      </div>
    `).join('');
  }
  
  
  function updateStats() {
    const el = document.getElementById('stat-total');
    const target = STARTUP_DATABASE.length;
    let current = 0;
    const inc = Math.ceil(target / 30);
    const timer = setInterval(() => {
      current = Math.min(current + inc, target);
      el.textContent = current + '+';
      if (current >= target) clearInterval(timer);
    }, 40);
  }
  

  function setView(v) {
    state.view = v;
    grid.classList.toggle('list-view', v === 'list');
    document.getElementById('grid-view-btn').classList.toggle('active', v === 'grid');
    document.getElementById('list-view-btn').classList.toggle('active', v === 'list');
  }
  
  
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
  
  
  function capitalize(str) {
    return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }