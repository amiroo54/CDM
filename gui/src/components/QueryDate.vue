<template>
    <input type="radio" ref="start" id="start" v-model="selection" value="0"> <label id="lblRadio" for="start">Start Immediately</label>
    <input type="radio" ref="nostart" id="nostart" v-model="selection" value="1"> <label id="lblRadio" for="nostart">Don't Start</label>
    <input type="radio" ref="queue" id="queue" v-model="selection" value="2"> <label id="lblRadio" for="queue">Start at</label>

    <input type="time" inputmode="numeric" ref="time" v-model="time" v-if="selection == 2">
</template>

<style>
input[type="radio"]{
    display: none;
}

#lblRadio{
    display: inline-block;
    box-shadow: 0 5px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 10px;
    text-align: center;
    border: 1px solid #41569fff;
    padding: 10px;
    margin-left: 10px;
    background-color: #8cbcfaff;
    color: #011936ff;
    cursor: pointer;
    transition-duration: 0.4s;
}
#lblRadio:hover {
    background-color: rgb(171, 207, 255);
    color: rgb(15, 50, 94);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#lblRadio:active{
    background-color: rgb(119, 159, 211);
    color: rgb(252, 253, 255);
    transform: translateY(4px);
}

</style>

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