#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::path::Path;
use reqwest;

mod query;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


struct Downloads
{

}

