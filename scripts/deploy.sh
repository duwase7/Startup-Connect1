#!/bin/bash
# deploy.sh
# This script copies the app files to both web servers and sets up nginx
#
# How to use:
#   1. Edit the IP addresses below
#   2. Run:  bash deploy.sh
#
# Make sure you have SSH access to both servers first

WEB01="ubuntu@<your-web01-ip>"
WEB02="ubuntu@<your-web02-ip>"
APP_DIR="/var/www/startup-connect"

echo "Starting deployment..."

# function to deploy to one server
deploy_to_server() {
  local SERVER=$1
  echo ""
  echo "--- Deploying to $SERVER ---"

  # create the folder on the server
  ssh $SERVER "sudo mkdir -p $APP_DIR && sudo chown -R \$USER:\$USER $APP_DIR"

  # copy the app files over
  scp index.html style.css app.js $SERVER:$APP_DIR/

  # set up the nginx config
  scp nginx-app.conf $SERVER:/tmp/startup-connect.conf
  ssh $SERVER "sudo cp /tmp/startup-connect.conf /etc/nginx/sites-available/startup-connect"
  ssh $SERVER "sudo ln -sf /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/startup-connect"
  ssh $SERVER "sudo rm -f /etc/nginx/sites-enabled/default"

  # test nginx config then reload it
  ssh $SERVER "sudo nginx -t && sudo systemctl reload nginx"

  echo "Done: $SERVER"
}

deploy_to_server $WEB01
deploy_to_server $WEB02

echo ""
echo "Deployment finished."
echo "Now set up the load balancer manually using nginx-lb.conf"