# Startup Connect

**Discover, filter, and explore startups from across the globe — powered by live API data.**

Startup Connect is a fully responsive web application that aggregates startup information, live tech news, and funding data to help founders, investors, job-seekers, and enthusiasts navigate the global startup ecosystem.

---

##  Live Demo

| Server | URL |
|--------|-----|
| Load Balancer | `http://<lb01-ip>` |
| Web01 (direct) | `http://<web01-ip>` |
| Web02 (direct) | `http://<web02-ip>` |

---

##  Features

| Feature | Description |
|---------|-------------|
| **Search** | Full-text search across company names, descriptions, industries, and founders |
| **Multi-filter** | Filter by industry (8 categories), funding stage (6 stages), and region (5 regions) |
| **Smart Sort** | Sort by trending, newest, most funded, team size, or alphabetical |
| **Card / List View** | Toggle between grid and list layouts |
| **Live Startup News** | Real-time tech/startup news via NewsData.io API |
| **Detail Modal** | Click any card to see full company profile with funding, team, founders |
| **Trending Section** | Curated list of the hottest startups this week |
| **Responsive Design** | Works on mobile, tablet, and desktop |
| **Skeleton Loaders** | Smooth loading experience with animated placeholders |
| **Error Handling** | Graceful fallbacks when APIs are unavailable |

---

##  APIs Used

### 1. NewsData.io
- **Purpose**: Fetches live startup and technology news headlines
- **Endpoint**: `https://newsdata.io/api/1/news?q=startup+funding&category=technology`
- **Free tier**: 200 requests/day
- **Documentation**: https://newsdata.io/docs
- **Credit**: NewsData.io team

### 2. REST Countries
- **Purpose**: Country/region metadata for startup origins
- **Endpoint**: `https://restcountries.com/v3.1/alpha/{code}`
- **Free tier**: Completely free, no key required
- **Documentation**: https://restcountries.com
- **Credit**: REST Countries contributors

### 3. ExchangeRate-API
- **Purpose**: Currency context for funding figures (USD baseline)
- **Endpoint**: `https://open.er-api.com/v6/latest/USD`
- **Free tier**: 1,500 requests/month
- **Documentation**: https://www.exchangerate-api.com/docs
- **Credit**: ExchangeRate-API.com

---

##  Running Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local HTTP server (recommended — avoids CORS issues)
- Optional: Node.js for a quick dev server

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/duwase7/Startup-Connect.git
cd Startup-Connect

# 2a. Open directly in browser (basic)
open index.html

# 2b. OR use a simple local server (recommended)
# With Python:
python3 -m http.server 8080
# Then visit: http://localhost:8080

# 2c. OR with Node.js:
npx serve .
# Then visit: http://localhost:3000
```

### API Keys

The app includes fallback data for all APIs, so it works **without keys**. To enable live news:

1. Sign up free at https://newsdata.io
2. Copy your API key
3. Open `app.js` and replace the value for `NEWSDATA_KEY`:
```javascript
const CONFIG = {
  NEWSDATA_KEY: 'your_key_here',
  ...
};
```

> ⚠️ **Never commit real API keys to a public repository.** Use environment variables or a backend proxy for production.

---

## 🚢 Deployment on Web Servers

### Architecture

```
[Users]
   │
   ▼
[Load Balancer — Lb01]
   │         │
   ▼         ▼
[Web01]   [Web02]
  (nginx)  (nginx)
  /var/www/startup-connect
```

### Step 1 — Deploy to Web01 and Web02

SSH into each server and run:

```bash
# On each web server (Web01 and Web02):

# Install nginx
sudo apt update && sudo apt install -y nginx

# Create app directory
sudo mkdir -p /var/www/startup-connect
sudo chown -R $USER:$USER /var/www/startup-connect

# Copy your files (from your local machine):
scp index.html style.css app.js ubuntu@<server-ip>:/var/www/startup-connect/

# Configure nginx
sudo cp nginx-app.conf /etc/nginx/sites-available/startup-connect
sudo ln -s /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Or use the provided script:
```bash
bash deploy.sh
```

### Step 2 — Configure Load Balancer (Lb01)

SSH into Lb01:

```bash
# Install nginx (if not already installed)
sudo apt update && sudo apt install -y nginx

# Edit nginx-lb.conf and replace IPs:
nano nginx-lb.conf
# Replace: web01_IP  →  your actual Web01 IP
# Replace: web02_IP  →  your actual Web02 IP

# Copy config
sudo cp nginx-lb.conf /etc/nginx/sites-available/startup-connect
sudo ln -s /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### Step 3 — Verify Load Balancing

```bash
# Test that requests reach both servers
for i in {1..6}; do curl -s http://<lb01-ip>/health; echo; done

# Check nginx access logs on each web server
sudo tail -f /var/log/nginx/access.log
```

---

##  Project Structure

```
startup-connect/
├── index.html        # Main HTML structure
├── style.css         # Full stylesheet (dark theme, responsive)
├── app.js            # Application logic + API integration
├── nginx-app.conf    # Nginx config for web servers
├── nginx-lb.conf     # Nginx load balancer config
├── deploy.sh         # Automated deployment script
├── .gitignore        # Ignores sensitive files
└── README.md         # This file
```

---

##  Security

- API keys are stored in a `CONFIG` object and should be moved to environment variables in production
- All API keys provided in the assignment submission comments (not in the repo)
- Input sanitisation is applied to search queries
- External links use `rel="noopener noreferrer"` to prevent tab-napping

---

##  Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| NewsData.io CORS in some browsers | Added robust try/catch with full fallback dataset |
| API rate limits on free tier | Implemented client-side caching + curated fallback data |
| Responsive grid with variable card heights | Used CSS Grid `auto-fill` with `minmax` for fluid layouts |
| Nginx config across multiple servers | Created reusable config files and deploy script |

---

## Bonus Features Implemented

- [x] **Advanced data visualization** — Trending section with rank cards
- [x] **Caching strategy** — Fallback data prevents repeated API calls
- [x] **Performance** — Skeleton loaders, lazy rendering, load more pagination
- [x] **Security** — XSS headers in nginx, input sanitization in JS
- [x] **Load balancer** — Nginx upstream with round-robin balancing

---

##  Credits

- **NewsData.io** — News aggregation API (https://newsdata.io)
- **REST Countries** — Open country data (https://restcountries.com)
- **ExchangeRate-API** — Currency exchange data (https://exchangerate-api.com)
- **Google Fonts** — Syne + DM Sans typefaces
- Startup data sourced from Crunchbase, TechCrunch, and company websites

---

##  Author

**Duwase** — ALX Software Engineering Program  
Assignment: Playing Around with APIs