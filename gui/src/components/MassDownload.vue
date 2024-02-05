<template>
    <input placeholder="URL" ref="URL" id="URL">
    <input placeholder=".rar, .zip, .7z" ref="extentions">
    <button ref="send" @click="send">Send</button>
    <div id="list" v-if="is_sent">   
        <ListLink v-for="(link, index) in links" :url="link" 
        v-model="download_links"
        @checkbox-updated="updateDownloadLinks"/>
    </div>
    <button v-if="is_sent" @click="download">Download</button>
</template>

<style>
#URL {
    width: 70%;
}
#extentions {
    width: 10%;
}
</style>

<script>
import ListLink from "./ListLink.vue";
export default 
{
    data() 
    {
        return {
            links: ["fdsfs", "dfasfdsa"], 
            is_sent: false,
            download_links: [],
        }
    },
    components: 
    {
        ListLink
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
                extentions = ".rar";
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
            let req = {
                method: "POST",
                headers: 
                {
                    "Content-type" : "application/json",
                },
                body: JSON.stringify(
                {
                    "links" : this.download_links,
                })
            } 
            fetch("/list", req );
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