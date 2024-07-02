# CDM - Centrilized Download Manager
This app aims to let users use their computer as a download server for their home/workspace.

The backend is done with rust and the gui with vuejs.

## Dependencies
You need to have "rustup" and "yarn" installed.
### Linux
   - Arch:
          ```sudo pacman -Sy rustup yarn --noconfirm```
          rustup default stable
   - Ubuntu:
     * First of all, you need to install curl if (you don`t have yet):
          ```sudo apt install curl gnupg -y```
     * To install rustup:
          1. ```curl https://sh.rustup.rs -sSf | sh```
          2. Restart your shell
          3. source "$HOME/.cargo/env"
     * To install yarn:
          1. ```curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -```
          
          ```echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list```
          2. sudo apt update && sudo apt install yarn -y
# How to use?
| Situation | Command |
| --- | :---: |
| The first time you want to run the app: | ```yarn``` |
| Every subsequent time: | ```yarn tauri dev``` |
| Building the app: | ```yarn tauri build``` |

## Contact us
Core founder: [amiroo.f](https://t.me/amiroo_f/)

Helper: [MrJavadGG](https://t.me/MrJavadGG/)


Report any bug, problem or request new features in the github page:
https://github.com/amiroo54/CDM/issues