# Startup Connect

Startup Connect is a web application designed to make startup data accessible, understandable, and actionable especially for entrepreneurs, investors, and innovators in Africa. By combining global startup information, live news, and funding insights, it bridges the gap between opportunity and knowledge, empowering users to make informed decisions without paying or signing up.

# Why This Project Exists

Despite the growing interest in entrepreneurship across Africa, access to reliable, consolidated, and actionable startup information remains fragmented. Key challenges include:

Scattered data sources: Company profiles, funding rounds, team sizes, and news updates exist across multiple platforms, often requiring subscription fees or regional restrictions.
Lack of localized insights: Funding figures and news are predominantly global-centric, making it hard for African users to contextualize data in their local economies.
Time-consuming research: Identifying trends, comparing startups, or analyzing market opportunities can take hours of manual effort.

The result: entrepreneurs, investors, and policymakers lack the tools to quickly understand the startup ecosystem and make informed decisions.

# How Startup Connect Solves This Problem

Startup Connect consolidates critical startup data into one intuitive, free-to-use interface:

Centralized Discovery: Search, filter, and sort startups across industries, funding stages, and regions in seconds.
Relevant, Localized Insights: Converts funding figures into African currencies (KES, NGN, RWF) for meaningful comparisons.
Live Intelligence: Aggregates news from global sources and displays real-time startup and tech developments.
Decision Support: Bookmark and compare startups side-by-side to evaluate opportunities or competitors efficiently.
Offline Resilience: Fully functional with fallback data if APIs fail — no downtime for users.

In short, Startup Connect transforms scattered, global-centric startup information into a single actionable ecosystem tailored for Africa.


## Features

| Description |
| Search | Searches across company name, industry, tagline, founder names, and description |
| Filter | Filter by industry, funding stage, and region simultaneously |
| Sort | Sort results by trending, newest, most funded, largest team, or alphabetical |
| Save | Bookmark startups to a personal saved list, persisted in browser localStorage |
| Compare | Select up to 3 startups and view a side-by-side breakdown of key metrics |
| List view | Toggle between card grid and compact list layout |
| News feed | Live startup and technology news pulled from NewsData.io |
| Currency conversion | Funding figures converted to KES and NGN using ExchangeRate-API |
| Fallback data | App remains fully functional when APIs are unavailable |

## APIs Used

### 1. NewsData.io
Provides the startup news feed on the page.

- Free tier: 200 requests per day
- Endpoint used: `GET https://newsdata.io/api/1/news`
- Query parameters: `q=startup+funding`, `language=en`, `category=technology`
- Requires a free API key from [newsdata.io](https://newsdata.io)
- Documentation: https://newsdata.io/docs

### 2. ExchangeRate-API
Used to convert USD funding amounts to Rwanda Frw Shillings (RWF) and Nigerian Naira (NGN) inside the startup detail view.

- Free open endpoint, no API key required
- Endpoint used: `GET https://open.er-api.com/v6/latest/USD`
- Documentation: https://www.exchangerate-api.com/docs

### 3. REST Countries
Used for country and region classification of startup data.

- Completely free, no key required
- Endpoint: `GET https://restcountries.com/v3.1/alpha/{code}`
- Documentation: https://restcountries.com

### 4. API Ninjas
Provides additional startup and business data, including company profiles, funding details, and key metrics to enrich the app’s database.

Free tier: 50 requests per day (with API key)
Endpoint used: GET https://api-ninjas.com/profile 
Query parameters: name=<company_name>, industry=<industry_name>, location=<country_code>
Requires a free API key from API Ninjas
Documentation: https://api-ninjas.com/profile


## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript — no frameworks or build tools
- **Web server:** Nginx (static file serving)
- **Load balancer:** Nginx upstream with round-robin distribution
- **Deployment:** Two Ubuntu 22.04 servers behind a load balancer
- **Data persistence:** Browser localStorage for saved startups


## Running Locally

No installation required. The app is plain HTML, CSS, and JavaScript.

**Option 1 — Python server (recommended)**
```bash
git clone https://github.com/duwase7/Startup-Connect.git
cd Startup-Connect
python3 -m http.server 8080
```
Open `http://localhost:8080` in your browser.

**Option 2 — VS Code Live Server**

Open the project folder in VS Code, right-click `index.html`, and select "Open with Live Server".

**Option 3 — Open directly**
```bash
open index.html
```
Note: some browsers block fetch requests when opening files directly. Use one of the server options above if the news section does not load.

### Connecting the News API

The app ships with fallback news data so it works without a key. To enable live news:

1. Register for a free account at https://newsdata.io
2. Copy your API key from the dashboard
3. Open `app.js` and replace the placeholder on line 1:

```javascript
var NEWSDATA_KEY = 'your_key_here';
```

Do not commit your real key to a public repository. Add `app.js` to `.gitignore` locally or use a separate config file that is excluded.

---

## Project Structure

```
Startup-Connect/
├── index.html          HTML structure and page layout
├── style.css           All styling — dark theme, responsive grid
├── app.js              Application logic, API calls, rendering
├── nginx-app.conf      Nginx config for Web01 and Web02
├── nginx-lb.conf       Nginx load balancer configuration
├── deploy.sh           Shell script to deploy to both web servers
├── .gitignore          Excludes sensitive files from version control
└── README.md           This file


## Deployment


Traffic from users hits the load balancer. Nginx distributes each request to Web01 or Web02 in turn using round-robin. Both servers serve identical files.

### Deployment & Usage

Run locally

git clone https://github.com/duwase7/Startup-Connect.git
cd Startup-Connect
python3 -m http.server 8080

Open http://localhost:8080 in your browser.

Live Deployment: Load-balanced Nginx servers serve the app globally, with automatic failover and real-time updates.

### API Configuration:
Replace var NEWSDATA_KEY = 'your_key_here'; in app.js to enable live news.

## Challenges Solved
CORS Restrictions: Overcome API access issues with fallback data.
Load Balancer Configuration: Correctly passed client IP headers for accurate logging.
Centralized State Management: Synced saved startups across UI components using a single appState object.

## Impact

Startup Connect empowers African entrepreneurs, investors, and researchers by:

Reducing research time from hours to minutes
Offering actionable insights in local currencies
Providing free, centralized access to global and regional startup trends
Facilitating better decision-making and market analysis

In a world where information drives innovation, Startup Connect ensures no African entrepreneur is left behind.

## Author

Duwase — ALU Software Engineering, Cohort 1