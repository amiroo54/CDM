<template>
    <h2>Queries</h2>
    <div class="box" v-for="query in queries">
        <SingleQuery  :query="query" />
    </div>
</template>

<script>
import SingleQuery from './SingleQuery.vue';

export default 
{
    components: 
    {
        SingleQuery
    },
    data()
    {
        return {
            queries: Array
        }
    },
    methods: 
    {
        getQueries()
        {
            fetch("/queries").then(async (res) => 
            {
                let data = await res.json();
                this.queries = data;
            })
        }
    },
    mounted()
    {
        this.getQueries();
    },
}
</script>