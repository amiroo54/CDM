const https = require("https");
const fs = require("fs");
const path = require("path");
function getSpeedFromStartTime(start, size)
{
    let endTime = new Date();
    const timeDiff = endTime - start;
    return speed = size / (timeDiff / 1000);
}

function getNameFromUrl(url)
{
    let splits = url.split("/");
    return "/" + splits[splits.length - 1];
}

async function download(url, location, startCallback, endCallback, updateCallback)
{
    console.log("Downloading: ", url);
    let urlObj = new URL(url);
    let options = {
        mathod: "GET",
        
    }
    return https.get(urlObj, options, (res) =>
    {
        console.log("Status: ", res.statusCode);
        if (res.statusCode == 301 || res.statusCode == 302)
        {
            return download(res.headers.location, location, startCallback, endCallback, updateCallback);
        }
        const size = res.headers['content-length'];
        console.log("Recive file size: ", size);
        let downloadedSize = 0;
        const startTime = new Date();
        let fileLocation = location + "/" + getNameFromUrl(urlObj.pathname);
        let fileStream = fs.createWriteStream(fileLocation, {'flags': 'a', 'encoding': null});
        if (startCallback)
        {
            startCallback(size);
        }
        res.on('data', (chunk) => 
        {
            downloadedSize += chunk.length
            fileStream.write(chunk);
            if (updateCallback)
            {
                updateCallback(downloadedSize / size);
            }
        });
        res.on("error", (err) => 
        {
            console.error(err);
        })
        res.on("end", () => 
        {
            console.log("Download finished: ", url);
            console.log("Average Speed: ", getSpeedFromStartTime(startTime, size));
            if (endCallback)
            {
                endCallback(url);
            }
        })
    }).end();
}


let downloadingList = []
function downloadList(list, path, numOfDownloads, updateCallBack)
{
    if (list.length == 0)
    {
        return;
    }
    console.log("Starting Download");
    download(list[0], path, () => {}, () => {}, updateCallBack);
}


module.exports = 
{
    downloadList
}