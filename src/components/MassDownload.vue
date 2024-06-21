<template>
    <h2>Mass Download</h2>
    <input placeholder="URL" ref="URL" id="URL">
    <input placeholder=".rar, .zip, .7z" ref="extentions" id="extentions">
    <button ref="send" @click="send">Send</button>
    <div id="list" v-if="is_sent">   
        <ListLink v-for="(link, index) in links" :url="link" v-model="download_links" @checkbox-updated="updateDownloadLinks"/>
    </div>
    <QueryDate v-if="is_sent" id="time" ref="time"/>
    <pre><p></p></pre>
    <button v-if="is_sent" @click="download">Download</button>
</template>

<style>
#URL {
    width: 70%;
}
#extentions {
    width: 100px;
}
</style>

<script>
import ListLink from "./ListLink.vue";
import QueryDate from "./QueryDate.vue";
export default 
{
    data() 
    {
        return {
            links: [], 
            is_sent: false,
            download_links: [],
        }
    },
    components: 
    {
        ListLink,
        QueryDate
    },
    methods: 
    {
        send()  
        {     
            var extentions = this.$refs.extentions.value.split(",");
            var url = this.$refs.URL.value;
            if (extentions == "")
            {
                //add some popup.
                extentions = [".rar", ".zip", ".7z"];
            }
            if (url == "")
            {
                return;
            }
            fetch("/mass", 
            {
                method: "POST", 
                headers: 
                {
                    "Content-type" : "application/json",
                },
                body: JSON.stringify(
                    {
                        "URL" : url,
                        "extentions" : extentions
                    })
            }).then(async (res) => 
            {
                this.is_sent = true;
                let linksFound = await res.json();
                this.links = linksFound;
            })
        },
        download()
        {
            console.log(this.download_links);
            let timeComp = this.$refs.time;
            let downloadDate = new Date();
            if (timeComp.selection == 2)
            {
                let [hour, minute] = timeComp.time.split(':');
                downloadDate.setHours(hour, minute, 0);
            }
            else if (timeComp.selection == 1)
            {
                downloadDate = undefined;
            }
            console.log(downloadDate);
            let req = {
                method: "POST",
                headers: 
                {
                    "Content-type" : "application/json",
                },
                body: JSON.stringify(
                {
                    "links" : this.download_links,
                    "date" : downloadDate
                })
            } 
            console.log(req);
            fetch("/list", req ).then((res) => 
            {
                if (res.status == 200)
                {
                    this.is_sent = false;
                }
            });
            fetch("/start", {body: JSON.stringify({query: decodeURIComponent(this.download_links[0].split("/").pop())})})
            this.$emit("start");
        },
        updateDownloadLinks(selection) {
            if (selection.checked) 
            {
                this.download_links.push(selection.url);
            } else 
            {
                const index = this.download_links.indexOf(selection.url);
                if (index > -1) 
                {
                    this.download_links.splice(index, 1);
                }
            }
        }
    }           
}
</script>