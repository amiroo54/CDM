# CDM - Centrilized Download Manager
This app aims to let users use their computer as a download server for their home/workspace.

> [!NOTE]
> The backend is done with rust and the gui with vuejs.

## Dependencies: You need to have "rustup" and "yarn" installed:
### Linux
   - Arch:
     ```bash
     sudo pacman -Sy rustup yarn --noconfirm
     rustup default stable
     ```
   - Ubuntu:
     * First of all, you need have curl installed:
          ```bash
          sudo apt install curl gnupg -y
          ```
     * To install rustup:
          ```bash
          curl https://sh.rustup.rs -sSf | sh
          #DO NOT FORGET TO RESTART YOUR SHELL!!!

          source "$HOME/.cargo/env"
          ```
     * To install yarn:
          ```bash
          sudo apt install npm
          sudo npm install -g corepack
          corepack enable
          corepack prepare yarn@stable —activate
          ```

> [!TIP]
> You can verify the installation of yarn by `yarn -version` and rustup by `rustc -V`.

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