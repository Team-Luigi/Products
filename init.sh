#!/bin/sh
fuser -k 3000/tcp
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
nodemon Server/index.js

