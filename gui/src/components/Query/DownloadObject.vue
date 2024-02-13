<template>
    <p>{{ download.name }}</p>
    <progress v-bind:value="percent" max=1></progress>
</template>



<script>
export default 
{
    props:
    {
        download: Object,
    },
    computed:
    {
        percent()
        {
            return this.download.downloadedSize / this.download.size;
        }
    }
}
</script>