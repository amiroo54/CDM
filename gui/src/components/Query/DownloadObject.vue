<template>
    <p>{{ download.name }}</p>
    <p>{{ download.url }}</p>
    <p>{{ download.size }}</p>
</template>



<script>
export default 
{
    props:
    {
        download: Object
    }
}
</script>