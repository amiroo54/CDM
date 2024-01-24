
const wget = require("wget");

function getSpeedFromStartTime(start)
{
    let endTime = new Date();
    const timeDiff = endTime - startTime;
    return speed = fileSize / (timeDiff / 1000);
}

function getNameFromUrl(url)
{
    return "/" + url.split("/").last;
}

async function download(url, location, startCallback, endCallback, updateCallback)
{
    let startTime;
    console.log("Downloading: ", url);
    const download = wget.download(url, location, {});
    download.on('start', (filesize) => 
    {
        startTime = new Date();
        startCallback(filesize);
    });
    download.on('end', (error) => 
    {
        if (error) 
        {
            console.log("erorr: ", error);
        } else
        {
            console.log("Download finished: ", url);
            console.log("Average Speed: ", getSpeedFromStartTime(startTime));
            endCallback(url);
        }

    });
    download.on('progress', (progress) => 
    {
        updateCallback(progress);
    })
    
}


let downloadingList = []
function downloadList(list, path, numOfDownloads, updateCallBack)
{
    if (list.length == 0)
    {
        return;
    }
    console.log("Starting Download");
    download(list[0], path + getNameFromUrl(list[0]), startCallBack, endCallback, updateCallBack);


    function startCallBack(fileSize)
    {
        if (downloadingList.length < numOfDownloads)
        {
            downloadingList.push(list[0]);
            list = list.shift();
            download(list[0], path + list[0], startCallBack, endCallback, updateCallBack);
        }
    }

    function endCallback(url)
    {
        downloadingList = downloadingList.filter((value) => {value == url});
        if (downloadingList.length < list.length)
        {
            download(list[0], path + getNameFromUrl(list[0]), startCallBack, endCallback, updateCallBack);
        }
    }
}


module.exports = 
{
    downloadList
}