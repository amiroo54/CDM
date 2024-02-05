#!/bin/bash
cd gui
npm run build
cd ..
node ./backend/main.js