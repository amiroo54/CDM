const { json } = require("express");
const fs = require("fs");
const os = require("os");
const path = require("path");

const configFile = "config.json";
const configPath = path.join(os.homedir(), ".CDM");

let config = {}

function loadDefault()
{
    
    let downloadPath = path.join(os.homedir(), "Downloads");
    config = {
        "downloadPath": downloadPath
    }
}

function loadConfig()
{
    if (!fs.existsSync(path.join(configPath, configFile)))
    {
        loadDefault();
        fs.mkdirSync(configPath);
        fs.writeFileSync(path.join(configPath, configFile), JSON.stringify(config), "utf-8");
        console.log(config);
    } else
    {
        let content = fs.readFileSync(path.join(configPath, configFile));
        config = JSON.parse(content);
        console.log(config)
    }
    
}

function getSavedQueries()
{
    
}

function getConfig()
{
    console.log(config);
    return config;
} 

module.exports = {loadConfig, getSavedQueries, getConfig}