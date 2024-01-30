const https = require("https");
const fs = require("fs");
const path = require("path");
function getSpeedFromStartTime(start, size)
{
    let endTime = new Date();
    const timeDiff = endTime - start;
    return speed = size / (timeDiff / 1000);
}

async function download(downloadObject, startCallback, endCallback, updateCallback)
{
    console.log("Downloading: ", downloadObject.url);
    let urlObj = new URL(downloadObject.url);
    let options = {
        mathod: "GET",
        headers: {}
    }
    if (fs.existsSync(downloadObject.path))
    {
        let range = fs.statSync(downloadObject.path).size;
        Object.assign(options.headers, {Range: `bytes=${range}-`});
    }
    console.log(options);
    return https.get(urlObj, options, (res) =>
    {
        console.log("Status: ", res.statusCode);
        if (res.statusCode == 301 || res.statusCode == 302)
        {
            downloadObject.url = new URL(res.headers.location);
            return download(downloadObject, startCallback, endCallback, updateCallback);
        }
        const size = res.headers['content-length'];
        console.log("Recive file size: ", size);
        let downloadedSize = 0;
        const startTime = new Date();
        let fileStream = fs.createWriteStream(downloadObject.path, {'flags': 'a', 'encoding': null});
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
            console.log("Download finished: ", downloadObject.url);
            console.log("Average Speed: ", getSpeedFromStartTime(startTime, size));
            if (endCallback)
            {
                endCallback(downloadObject);
            }
        })
    }).end();
}


let downloadingList = []
function downloadList(list, numOfDownloads, updateCallBack)
{
    if (list.links.length == 0)
    {
        return;
    }
    console.log("Starting Download");
    download(list.links[0], () => {}, () => {}, updateCallBack); //add download more.
}


module.exports = 
{
    downloadList, 
    download
}