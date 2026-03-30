#!/bin/bash
# deploy.sh — Deploy Startup Connect to Web01 and Web02
# Usage: bash deploy.sh
# Requirements: SSH access to web servers, nginx installed

set -e

# ---- Configuration — update these ----
WEB01="ubuntu@<web01-ip>"
WEB02="ubuntu@<web02-ip>"
APP_DIR="/var/www/startup-connect"
APP_FILES="index.html style.css app.js nginx-app.conf"

echo "🚀 Deploying Startup Connect..."

deploy_to() {
  local SERVER=$1
  echo "📦 Deploying to $SERVER..."

  # Create app directory
  ssh $SERVER "sudo mkdir -p $APP_DIR"
  ssh $SERVER "sudo chown -R \$USER:\$USER $APP_DIR"

  # Copy app files
  for f in $APP_FILES; do
    scp $f $SERVER:$APP_DIR/ 2>/dev/null || true
  done

  # Configure nginx
  ssh $SERVER "sudo cp $APP_DIR/nginx-app.conf /etc/nginx/sites-available/startup-connect"
  ssh $SERVER "sudo ln -sf /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/startup-connect"
  ssh $SERVER "sudo rm -f /etc/nginx/sites-enabled/default"
  ssh $SERVER "sudo nginx -t && sudo systemctl reload nginx"

  echo "✅ Deployed to $SERVER"
}

deploy_to $WEB01
deploy_to $WEB02

echo ""
echo "🎉 Deployment complete!"
echo "   App running on Web01 and Web02"
echo "   Now configure your load balancer with nginx-lb.conf"