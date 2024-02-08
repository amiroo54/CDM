#!/bin/bash
mkdir frontend
cd gui
npm run build
cd ..
node ./backend/main.js