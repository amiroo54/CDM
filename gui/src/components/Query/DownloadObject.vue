<template>
    <p>{{ download.name }}</p>
    <div class="progress">
        <progress v-bind:value="ratio" max=1></progress>
        <span class="label">{{ percent }}% / {{ downloadedSize }} from {{ size }}</span>
    </div>
</template>

<style scoped>
.progress   
{
    position: relative;
    width: 100%;
    height: 20px;
    overflow: hidden;
    border-radius: 5px;
}
progress 
{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
}

.label
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>

<script>
export default 
{
    props:
    {
        download: Object,
    },
    computed:
    {
        ratio()
        {
            console.log(this.download);
            return this.download.downloadedSize / this.download.size;
        },
        percent()
        {
            return (this.ratio * 100).toFixed(2);
        },
        downloadedSize()
        {
            return this.convertBytesToClosestUnit(this.download.downloadedSize);
        },
        size()
        {
            return this.convertBytesToClosestUnit(this.download.size);
        }
    },
    methods:
    {
        convertBytesToClosestUnit(bytes) { // this was written by AI.
            if (bytes === 0) return '0 B';

            const units = ['B', 'KB', 'MB', 'GB', 'TB'];
            const base = 1024;
            const exp = Math.floor(Math.log(bytes) / Math.log(base));
            const size = bytes / Math.pow(base, exp);

            return size.toFixed(2) + ' ' + units[exp];
        }
    }
}
</script>