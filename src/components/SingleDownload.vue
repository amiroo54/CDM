<template>
    <h2>Single Download</h2>
    <input placeholder="URL" ref="single">
    <button id="download" @click="download">Download</button>
</template>

<script>
export default 
{
    methods: 
    {
        download()
        {
            let link = this.$refs.single.value;
            console.log(link);
            let options = 
            {
                method: "POST",
                headers: 
                {
                    "Content-type": "application/json",
                },
                body : JSON.stringify({"link" : link})
            }
            fetch("/single", options).then(async (res) => 
            {
                console.log("done");
            })
            fetch("/start", {body: JSON.stringify({query: "variousfiles"})})
            this.$emit("start");
        }
    }
}
</script>