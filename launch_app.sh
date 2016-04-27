#/bin/bash

# Disable DPMS / Screen blanking
xset -dpms
xset s off
xset s noblank

modprobe bcm2835-v4l2

mkdir /root/.config
sudo matchbox-window-manager -use_titlebar no &
npm start
sleep 2s
