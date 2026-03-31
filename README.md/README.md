# Startup Connect
Is a web application for discovering and researching startups globally. 

The app allows users to search, filter, and compare startup companies by industry, funding stage, and region. It pulls live news from an external API and converts funding figures into local African currencies to make the data more relevant to the target audience.

## Problem It Solves

Finding reliable, filterable startup data in one place is difficult — especially for people in Africa who want to track what is happening locally and globally. This app brings together company profiles, funding information, team sizes, and live news into a single interface that does not require any account or payment to use.


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

---

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
```

---

## Deployment


Traffic from users hits the load balancer. Nginx distributes each request to Web01 or Web02 in turn using round-robin. Both servers serve identical files.

---

### Step 1 — Prepare Web01 and Web02

Run the following on each web server:

```bash
sudo apt update && sudo apt install nginx -y

sudo mkdir -p /var/www/startup-connect
sudo chown -R $USER:$USER /var/www/startup-connect
```


### Step 2 — Deploy Application Files

From your local machine, copy the files to both servers:

```bash
scp index.html style.css app.js ubuntu@<web01-ip>:/var/www/startup-connect/
scp index.html style.css app.js ubuntu@<web02-ip>:/var/www/startup-connect/
```

Or use the provided script (edit the IP addresses in `deploy.sh` first):

```bash
bash deploy.sh
```



### Step 3 — Configure Nginx on Web01 and Web02

Run this on each web server:

```bash
sudo cp nginx-app.conf /etc/nginx/sites-available/startup-connect
sudo ln -s /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

The `nginx-app.conf` file configures Nginx to serve `index.html` for all routes and cache static assets.

---

### Step 4 — Configure the Load Balancer (Lb01)

Open `nginx-lb.conf` and replace the placeholder IPs:

```nginx
upstream app_servers {
    server <web01-ip>:80;
    server <web02-ip>:80;
}
```

Then on Lb01:

```bash
sudo apt update && sudo apt install nginx -y
sudo cp nginx-lb.conf /etc/nginx/sites-available/startup-connect
sudo ln -s /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

### Step 5 — Verify the Deployment

Visit `http://<lb01-ip>` in a browser. The app should load.

To confirm traffic is reaching both servers, watch the access logs on each while refreshing:

```bash
sudo tail -f /var/log/nginx/access.log

sudo tail -f /var/log/nginx/access.log
```

Requests should appear on both servers as you refresh. You can also test the health endpoint:

```bash
curl http://<lb01-ip>/health
```

---

## Error Handling

| Scenario | Behaviour |
|---|---|
| NewsData.io unavailable or key invalid | Falls back to a static set of 9 curated news articles |
| ExchangeRate-API unavailable | Currency conversion note is hidden from the modal |
| No search results | Displays a clear empty state message |
| API rate limit exceeded | Same fallback as unavailable — no error shown to user |

---

## Security Notes

- API keys are stored as variables in `app.js`
- The `.gitignore` file excludes local config files from version control
- All external links use `rel="noopener noreferrer"` to prevent tab-napping
- Nginx is configured with `X-Frame-Options` and `X-Content-Type-Options` headers
- For a production deployment, API calls should be proxied through a backend server so keys are never exposed in client-side code

---

## Challenges

**CORS errors on the news API** — The NewsData.io API blocks direct browser requests from localhost. This was resolved by testing against the deployed server URL and adding a complete fallback data set so development is not blocked when the API is unavailable.

**Nginx load balancer configuration** — Getting `proxy_set_header` correct so the backend servers log the real client IP rather than the load balancer IP required reading through the Nginx documentation. The final config passes `X-Real-IP` and `X-Forwarded-For` headers from the proxy to both web servers.

**localStorage and tab state** — Keeping the saved list in sync across the card grid, the modal, and the saved tab required centralising state into a single `appState` object that every render function reads from rather than reading the DOM directly.

---

## Credits

- [NewsData.io](https://newsdata.io) — news aggregation API
- [REST Countries](https://restcountries.com) — open country data
- [ExchangeRate-API](https://www.exchangerate-api.com) — free exchange rate data
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — Google Fonts
- Company data sourced from Crunchbase, TechCrunch, and individual company websites

---

## Author

Duwase — ALX Software Engineering, Cohort 20