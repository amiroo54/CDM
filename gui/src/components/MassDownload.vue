<template>
    <input placeholder="URL" ref="URL" id="URL">
    <input placeholder=".exa, .mp, .le" ref="extentions">
    <button ref="send" @click="send">Send</button>
    <div id="list">   
        <ListLink v-for="(link, index) in links" :url="link.url"/>
    </div>
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
            links: [{url:"fdssaf"}, {url:"gklhasd"}]
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
                let linksFound = await res.json();
                this.links = linksFound;
                console.log(this.links);
            })
        }
    }           
}
</script>