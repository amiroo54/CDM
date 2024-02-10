#!/bin/bash
frontend_install_dir="./gui/node_modules"
backend_install_dir="./backend/node_modules"
if [ ! -d "$frontend_install_dir" ]; then
    cd gui
    npm install
    cd ..
fi
if [ ! -d "$backend_install_dir" ]; then
    cd backend
    npm install
    cd ..
fi
frontend_dir="./frontend"
choice="Y" 
if [ -d "$frontend_dir" ]; then
    read -p "Do you want to build the frontend? (Y/n): " choice
fi

if [ ! "$choice" = "n" ]; then
    mkdir frontend
    cd gui
    npm run build
    cd ..
fi

node ./backend/main.js