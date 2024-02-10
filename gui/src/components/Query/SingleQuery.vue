<template>
    <h3>{{ query.name }}</h3>
    <li v-for="link in query.links">
        <DownloadObject :download="link"/>
    </li>
    <button>Start</button>
    <button>Pause</button>
</template>

<script>
import DownloadObject from './DownloadObject.vue';
export default 
{
    components:
    {
        DownloadObject
    },
    props: 
    {
        query: Object
    },
}
</script>