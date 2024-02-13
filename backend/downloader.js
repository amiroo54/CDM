const https = require("https");
const fs = require("fs");
const path = require("path");
const query = require("./query")
function getSpeedFromStartTime(start, size)
{
    let endTime = new Date();
    const timeDiff = endTime - start;
    return speed = size / (timeDiff / 1000);
}

/**
 * 
 * @param {query.downloadObject} downloadObject - Object to download.
 * @param {CallableFunction} startCallback - Callback called after starting download.
 * @param {CallableFunction} endCallback - Callback called after download finish or if download already ended.
 * @param {CallableFunction} updateCallback - Callback called on reciving data from server.
 * @returns {https.ClientRequest} Download request object
 */
async function download(downloadObject, startCallback, endCallback, updateCallback)
{
    console.log("Downloading: ", downloadObject.url);
    let urlObj = new URL(downloadObject.url);
    if (downloadObject.ended)
    {
        console.log("File already downloaded.");
        endCallback(downloadObject);
    }
    let options = {
        method: "GET",
        headers: {}
    }
    if (fs.existsSync(downloadObject.path))
    {
        let range = fs.statSync(downloadObject.path).size;
        if (downloadObject.downloadedSize != range)
        {
            console.log("wtf");
            downloadObject.downloadedSize = range;
        }
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
        const size = res.headers['content-length'] + downloadObject.downloadedSize; //when using bytes= in header the content length in the size to be recived not the full size.
        if (!downloadObject.size)
        {
            downloadObject.size = parseInt(size); // setting the inital size, for displaying correct progress.
        }
        console.log("Recive file size: ", size);
        const startTime = new Date();
        let fileStream = fs.createWriteStream(downloadObject.path, {'flags': 'a', 'encoding': null});
        if (startCallback)
        {
            startCallback(downloadObject);
        }
        res.on('data', (chunk) => 
        {
            downloadObject.downloadedSize += chunk.length
            fileStream.write(chunk);
            if (updateCallback)
            {
                updateCallback(downloadObject.downloadedSize / downloadObject.size);
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

/**
 * downloads given query when the time for download arives.
 * @param {query.query} query - the query to download.
 * @param {number} numOfDownloads - number of simultaneos downloads. 
 * @param {CallableFunction} updateCallBack - Callback called when reciving data.
 * @returns {void}
 */
function downloadQuery(query, numOfDownloads, updateCallBack)
{
    if (query.links.length == 0)
    {
        return;
    }
    if (!query.startTime) // this is for queries that don't need to be started and startTime is to be set later.
    {
        return;
    }
    console.log("Starting Download in ", (query.startTime.getTime() - Date.now()) / 60000, "minutes");
    query.pending.push(setTimeout(() =>
    {
        console.log("Starting Download Query: ", query.name);
        query.active.push(
            download(query.getNextLink(), () => {}, endCallback,updateCallBack)
        )
    },
        query.startTime - Date.now()
    )); 
    function endCallback(object)
    {
        object.ended = true;
        let next = object.query.getNextLink();
        if (next)
        {
            object.query.active.push(download(next, () => {}, endCallback, updateCallBack));
        } else {return;}
    }
}
/**
 * Pauses the given query.
 * @param {query.query} query Pauses the query.
 */
function pause(query)
{
    for (let i = 0; i < query.active.length; i++ )
    {
        query.active[i].end();
    }
    for (let i = 0; i < query.pending.length; i++) 
    {
        clearTimeout(query.pending[i]);
    }
}

module.exports = 
{
    downloadQuery, 
    download
}