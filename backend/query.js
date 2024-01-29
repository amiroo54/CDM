const downloader = require("./downloader");
const fs = require("fs");
class query
{
    constructor(startTime) 
    {
        this.startTime = startTime;
        this.links = [];
    }
    
    addLink(link) {
        this.links.push(link);
    }
}

class downloadObject 
{
    constructor(url, directory)
    {
        if (typeof url === "string")
        {
            url = new URL(url);
        }
        this.url = url;
        this.path = directory + "/" + this.getFileName();
    }
    getFileName()
    {
        let splits = this.url.pathname.split("/");
        let final = decodeURIComponent(splits[splits.length - 1].split("?")[0]); // removing the ? at the end of the links.
        return final;
    }
}

module.exports = 
{
    downloadObject, query
}