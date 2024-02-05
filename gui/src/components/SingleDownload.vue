<template>
    <h2>Single Download</h2>
    <input placeholder="URL" ref="single">
    <button id="download" @click="onClick">Download</button>
</template>

<style scoped>
input {
    width: 80%;
}
</style>

<script>
export default 
{
    methods: 
    {
        onClick()
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
        }
    }
}
</script>