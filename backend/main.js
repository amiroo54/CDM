const app = require("express")();
const { JSDOM } = require('jsdom');
const fs = require('fs');
const cheerio = require('cheerio');
const { json } = require("express");
const downloader = require('./downloader') 
const query = require("./query");
const path = require("path");

app.use(require("body-parser").json())
app.use(require("express").static("frontend"));

/**
 * a list of all queries.
 * @type {Array<query.query>}
 */
let queries = [];
let variousFiles = new query.query("Various Files", null);
queries.push(variousFiles);
const downloadFolder = path.join(require("os").homedir(), "Downloads");

app.get("/", (req, res) => 
{
    res.setHeader("Content-type", "text/html")
    let data = fs.readFileSync("./frontend/index.html")
    res.status = 200
    res.send(data);
})    

app.post("/single", (req, res) => 
{
    let link = req.body['link'];
    console.log("a Link recived to download: ", link);
    variousFiles.addLink(new query.downloadObject(link, downloadFolder));
    downloader.downloadList(variousFiles, downloadFolder, () => {}, () => {}, (progress) => 
    {
        console.log("Progress: ", progress);
    })
    res.status = 200;
    res.send();
})



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
    console.log("Links recived to download: ", req.body['links']);
    if (req.body['links'].length == 0)
    {
        res.status = 304;
        res.send();
    }
    let qname = req.body['name']? req.body['name'] : decodeURIComponent(req.body['links'][0].split("/").pop());
    let q = new query.query(qname, new Date(req.body['date'])); 
    let linksToDownload = []
    for (let i = 0; i < req.body['links'].length; i++)
    {
        q.addLink(new query.downloadObject(req.body['links'][i], downloadFolder));
        linksToDownload.push(req.body['links'][i]);
    }
    queries.push(q);
    downloader.downloadQuery(q, 1, (progress) => 
    {
        //console.log("Progress: ", progress);
    });    
    res.status = 200;
    res.send();
})    

app.post("/pause", (req, res) => 
{
    let q = req.query.query;
    console.log("Pausing: ", q);

})

app.get("/queries", (req, res) => //THIS IS TEMPORARY, SHOULD BE REPLACED. maybe not.
{  
    
    let q = queries.map((value) => 
    {
        return {
            name: value.name, 
            startTime: value.startTime,
            links: value.links.map((link) => 
            {
                return {
                    name: link.getFileName(),
                    url: link.url,
                    size: link.size
                }
            }),
        }
    });
    res.status = 200;
    res.send(q);
})

app.listen(3000, () => 
{
    console.log("Server started on:")
    console.log("Local: http://localhost:3000")
    const { networkInterfaces } = require('os');
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) 
    {
        for (const net of nets[name])
        {
            const familyV4 = typeof net.family === 'string' ? 'IPv4' : 4
            if (net.family === familyV4 && !net.internal)
            {
                console.log("Network: http://" + net.address + ":3000");
            } 
        }
    }
})