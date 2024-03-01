const app = require("express")();
const { JSDOM } = require('jsdom');
const fs = require('fs');
const cheerio = require('cheerio');
const { json } = require("express");
const downloader = require('./downloader') 
const query = require("./query");
const path = require("path");
const ws = require("ws");
const Debug = require("./logger");

app.use(require("body-parser").json())
app.use(require("express").static("frontend"));

/**
 * a list of all queries.
 * @type {{String: query.query}}
 */
let queries = {};
/**
 * query for single files.
 * @type {query.query}
 */
let variousFiles = new query.query("Various Files", new Date());
queries[variousFiles.getCleanName()] = variousFiles;
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
    Debug.info("a Link recived to download: ", link);
    variousFiles.addLink(new query.downloadObject(link, downloadFolder));
    res.status = 200;
    res.send();
})

app.post("/mass", (req, res) => 
{
    let pageURL = req.body['URL'];
    Debug.info("Recived mass download with url: ", pageURL);
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
        Debug.info("Recived extentions: ", extentions);
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
        Debug.info("Final List: ", linksToDownload);
        
        res.status = 200;
        res.send(linksToDownload);
    })    
})    


app.post("/list", (req, res) => 
{
    Debug.info("Links recived to download: ", req.body['links']);
    if (req.body['links'] == [])
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
    queries[q.getCleanName()] = q;
    res.status = 200;
    res.send();
})    

app.post("/start", (req, res) =>
{
    downloader.downloadQuery(q, 1, (progress) => 
    {
        if (q.sockets != [])
        {
            q.sockets.forEach((s) => 
            {
                s.send(JSON.stringify(q));  
            })
        }
    });    
})

app.post("/pause", (req, res) => 
{
    let q = req.query.query;
    Debug.info("Pausing: ", q);
    downloader.pause(q);
    res.statusCode = 200;
    res.send();
})

app.get("/queries", (req, res) => //THIS IS TEMPORARY, SHOULD BE REPLACED. maybe not.
{  
    
    let q = Object.keys(queries).map((value) => 
    {
        value = queries[value];
        return value.toJSON();
    });
    res.status = 200;
    res.send(q);
})


//ws bs.
const server = require("http").createServer(app);
const wss = new ws.WebSocket.Server({ server });

wss.on("connection", (ws, req) =>
{
    const q = req.url.substring(1);
    if (queries[q])
    {
        queries[q].sockets.push(ws);
    }
    ws.on("close", () =>
    {
        queries[q].sockets.splice(queries[q].sockets.indexOf(ws), 1);
    })
})


server.listen(3000, () => 
{
    Debug.info("Server started on:")
    Debug.info("Local: http://localhost:3000")
    const { networkInterfaces } = require('os');
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) 
    {
        for (const net of nets[name])
        {
            const familyV4 = typeof net.family === 'string' ? 'IPv4' : 4
            if (net.family === familyV4 && !net.internal)
            {
                Debug.info("Network: http://" + net.address + ":3000");
            } 
        }
    }
})