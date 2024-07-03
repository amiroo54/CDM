use std::{str::FromStr, time::Duration};
use serde::{Deserialize, Serialize};
use tauri::api::path::download_dir;

#[derive(Serialize, Deserialize, Clone)]
struct Query
{
    name: String,
    default_directory: String,
    links: Vec<DownloadObject>,
    start_time: Duration
}

impl Query {
    pub fn new(name: String, start_time: Duration) -> Self
    {
        Query
        {
            name,
            default_directory: String::from_str(download_dir().unwrap().to_str().unwrap()).unwrap() ,
            links: vec![],
            start_time
        }
    }
    pub fn add_url(&mut self, url: String)
    {
        let obj = DownloadObject::new(url, self.default_directory.clone());
        self.links.push(obj);
    }

    pub fn get_pending(&self) -> Vec<&DownloadObject>
    {
        self.links
        .iter()
        .filter(|l| l.state == DownloadState::Pending)
        .collect()
    }

    pub fn get_done(&self) -> Vec<&DownloadObject>
    {
        self.links
        .iter()
        .filter(|l| l.state == DownloadState::Done)
        .collect()
    }

    pub fn get_active(&self) -> Vec<&DownloadObject>
    {
        self.links
        .iter()
        .filter(|l| l.state == DownloadState::Active)
        .collect()
    }

    pub fn get_next_pending(&self) -> &DownloadObject
    {
        self.get_pending().remove(0)
    }
}

#[derive(Serialize, Deserialize, Clone, PartialEq)]
enum DownloadState
{
    Pending, Active, Done
}

#[derive(Serialize, Deserialize, Clone)]
struct DownloadObject
{
    size: i64,
    downloaded_size: i64,
    state: DownloadState,
    url: String,
    path: String,
}   

impl DownloadObject
{
    pub fn new(url: String, directory: String) -> Self 
    {
        DownloadObject
        {
            size: 0,
            downloaded_size: 0,
            state: DownloadState::Pending,
            url,
            path: directory
        }
    }

}