<template>
    <input type="radio" ref="start" id="start" v-model="selection" value="0"> <label for="start">Start Immediately</label>
    <input type="radio" ref="nostart" id="nostart" v-model="selection" value="1"> <label for="nostart">Don't Start</label>
    <input type="radio" ref="queue" id="queue" v-model="selection" value="2"> <label for="queue">Start at</label>

    <input type="time" inputmode="numeric" ref="time" v-model="time" v-if="selection == 2">
</template>

<script>
import { ref } from 'vue';

export default 
{
    data()
    {
        return {
            selection: 0,
            time: ref(''),
        }
    }
}
</script>