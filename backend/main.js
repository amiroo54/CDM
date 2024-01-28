const app = require("express")();
const { JSDOM } = require('jsdom');
const fs = require('fs');
const cheerio = require('cheerio');
const { json } = require("express");
const downloader = require('./downloader') 
app.use(require("body-parser").json())

app.post("/mass", (req, res) => 
{   
    let pageURL = req.body['URL'];
    console.log("Recived mass download with url: ", pageURL);
    let extentions = req.body['extentions'];
    fetch(pageURL).then(async (pageres, err) =>
    {
        if (err) 
        {
            res.status = pageres.status;
            res.send();
        }
        let data = await pageres.text();
        let renderedPage = await cheerio.load(data).html();
        //fs.writeFileSync("./log.log", renderedPage, "utf-8");
        let page = new JSDOM(renderedPage);
        let document = page.window.document;
        let links = document.querySelectorAll("a");
        let linksToDownload = []
        console.log("Recived extentions: ", extentions);
        for (let i = 0; i < links.length; i++)
        {
            for (let e = 0; e < extentions.length; e++)
            {
                let l = links[i].getAttribute("href")
                if (l?.includes(extentions[e])) 
                {
                    if (!l.startsWith("http")) 
                    {
                        l = l.startsWith("/")? pageURL + l : pageURL + "/" + l
                    }
                    //let head = await fetch(l, {method: "HEAD"});
                    linksToDownload.push(l.trim());
                } 
            }
        }
        console.log("Final List: ", linksToDownload);
        
        res.status = 200;
        res.send(linksToDownload);
    })
})

app.post("/list", (req, res) => 
{
    let linksToDownload = req.body['links'];
    console.log("Links recived to download: ", linksToDownload);
    downloader.downloadList(linksToDownload, "/home/amiroof/Downloads", 1, (progress) => 
    {
        console.log("Progress: ", progress);
    });
    res.status = 200;
    res.send();
})

app.post("/single", (req, res) => 
{
    let link = req.body['link'];
    console.log("a Link recived to download: ", link);
    downloader.download(link, "/home/amiroof/Downloads", () => {}, () => {}, (progress) => 
    {
        console.log("Progress: ", progress);
    })
    res.status = 200;
    res.send();
})

app.get("/", (req, res) => 
{
    res.setHeader("Content-type", "text/html")
    let data = fs.readFileSync("./frontend/index.html")
    res.status = 200
    res.send(data);
})


app.listen(3000, () => 
{
    console.log("Server started on:")
    console.log("Local: http://localhost:3000")
    console.log("Network: http://192.168.1.8:3000")
})