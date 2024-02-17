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
read -p "Do you want to start the frontend server? (Y/n): " choice

if [ ! "$choice" = "n" ]; then
    cd gui
    npm run serve &
    cd ..
else
    mkdir frontend
    cd gui
    npm run build
    cd ..          
fi
if command -v nodemon > /dev/null 2>&1; then  
    nodemon ./backend/main.js &
else
    node ./backend/main.js &
fi
wait