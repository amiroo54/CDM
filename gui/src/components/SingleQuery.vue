<template>
    <h3>{{ query.name }}</h3>
    <li v-for="link in query.links">{{ link }}</li>
    <button>Start</button>
    <button>Pause</button>
</template>

<script>
export default 
{
    props: 
    {
        query: Object
    }
}
</script>