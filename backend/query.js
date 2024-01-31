const downloader = require("./downloader");
const fs = require("fs");
class query
{
    constructor(name, startTime) 
    {
        this.name = name;
        this.startTime = startTime;
        this.links = [];
        this.active = [];
        this.finished = [];
    }
    
    addLink(link) {
        this.links.push(link);
        link.query = this;
    }

    getNextLink() 
    {
        return this.links[this.finished.length + this.active.length];
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
        this.size = 0;
        this.downloadedSize = 0;
        this.ended = false;
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