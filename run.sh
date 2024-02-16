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
if which nodemon > /dev/null 
    then
        node ./backend/main.js &
    else
        nodemon ./backend/main.js &
fi
wait