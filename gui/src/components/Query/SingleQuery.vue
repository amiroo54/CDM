<template>
    <h4>{{ query.name }}</h4>
    <li v-for="obj in data.links">
        <DownloadObject :download="obj" />
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
        query: Object,
    },
    data()
    {
        return {
            socket: null,
            data: {}
        }
    },
    mounted()
    {
        this.data = this.query;
        this.socket = new WebSocket(`ws://${window.location.host}/${this.query.name.toLowerCase().trim().replace(" ", "")}`)
        this.socket.onmessage = (event) =>
        {
            this.data = JSON.parse(event.data);
            console.log(event);
        }
    },

}
</script>