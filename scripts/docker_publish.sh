#!/usr/bin/env bash 
echo "build komutu"
docker build -t livazze/vue-project:latest .

echo "push"
docker push livazze/vue-project:latest 
