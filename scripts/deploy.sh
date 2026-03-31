WEB01="ubuntu@<your-web01-ip>"
WEB02="ubuntu@<your-web02-ip>"
APP_DIR="/var/www/startup-connect"

echo "Starting deployment..."


deploy_to_server() {
  local SERVER=$1
  echo ""
  echo "--- Deploying to $SERVER ---"

  ssh $SERVER "sudo mkdir -p $APP_DIR && sudo chown -R \$USER:\$USER $APP_DIR"


  scp index.html style.css app.js $SERVER:$APP_DIR/


  scp nginx-app.conf $SERVER:/tmp/startup-connect.conf
  ssh $SERVER "sudo cp /tmp/startup-connect.conf /etc/nginx/sites-available/startup-connect"
  ssh $SERVER "sudo ln -sf /etc/nginx/sites-available/startup-connect /etc/nginx/sites-enabled/startup-connect"
  ssh $SERVER "sudo rm -f /etc/nginx/sites-enabled/default"


  ssh $SERVER "sudo nginx -t && sudo systemctl reload nginx"

  echo "Done: $SERVER"
}

deploy_to_server $WEB01
deploy_to_server $WEB02

echo ""
echo "Deployment finished."
echo "Now set up the load balancer manually using nginx-lb.conf"