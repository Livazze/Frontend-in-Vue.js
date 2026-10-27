#!/usr/bin/env bash 
docker stop $(docker ps -q) 2>/dev/null
sudo fuser -k 80/tcp 2>/dev/null
docker compose up
docker run -p 80:80 vue-project
