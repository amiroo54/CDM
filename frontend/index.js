var url = document.getElementById("single");
var button = document.getElementById("download");
button.addEventListener("click", (ev) => 
{
    let options = 
    {
        method: "POST",
        headers: 
        {
            "Content-type": "application/json",
        },
        body : JSON.stringify({"link" : url.value})
    }
    fetch("/single", options).then(async (res) => 
    {
        console.log("done");
    })
})

var Url = document.getElementById("URL");
var button = document.getElementById("send");
console.log(extentions)
let links = [];
button.addEventListener("click", (event) => 
{            
    var extentions = document.getElementById("extentions").value.split(",");
    fetch("/mass", {
        method: "POST", 
        headers: 
        {
            "Content-type" : "application/json",
        },
        body: JSON.stringify(
            {
                "URL" : Url.value,
                "extentions" : extentions
            })
    }).then(async (res) => 
    {
        links = [];
        let linksFound = await res.json();
        document.getElementById("found").innerHTML = "<ul></ul>";
        for (let i = 0; i < linksFound.length; i++)
        {
            let obj = document.createElement("li");
            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.toggleAttribute("checked")
            let lable = document.createElement("a");
            lable.innerHTML = linksFound[i];
            obj.appendChild(input);
            obj.appendChild(lable);
            document.getElementById("found").children[0].appendChild(obj);
            links.push(obj);
        }
        let btn = document.createElement("button");
        btn.innerHTML = "Download";
        btn.addEventListener("click", () => 
        {
            let linksToSend = [];
            for (let i = 0; i < links.length; i++)
            {
                if (links[i].children[0].checked)
                {
                    linksToSend.push(links[i].children[1].innerHTML);
                }
            }
            let req = {
                method: "POST",
                headers: 
                {
                    "Content-type" : "application/json",
                },
                body: JSON.stringify(
                {
                    "links" : linksToSend,
                })
            } 
            console.log(req);
            fetch("/list", req );
        })
        document.querySelector("#found").appendChild(btn);
    });
})

let queriesObj = document.getElementById("queries");
fetch("/queries").then(async (res) => 
{
    let queries = await res.json();
    for (let i = 0; i < queries.length; i++)
    {
        let e = document.createElement("p");
        e.innerHTML = queries[i];
        queriesObj.appendChild(e);
    }
})