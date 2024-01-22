#!/bin/bash

if [[ ! -z $(which npm)]]; then
    echo "npm found"
else
    if [[ ! -z $(which yum) ]]; then
        sudo yum install npm -y
    elif [[ ! -z $(which apt) ]]; then
        sudo apt install npm -y
    elif [[ ! -z $(which pacman)]] then
        sudo pacman -S npm --noconfirm
    else
        echo "please install npm"
        exit
    fi
fi

node ./backend/main.js