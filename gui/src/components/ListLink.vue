<template>
    <input type="checkbox" ref="selected">
    <p> {{ url }} </p>
</template>

<script>
export default 
{
    props: 
    {
        url: String
    }
}
</script>