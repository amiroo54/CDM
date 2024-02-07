<template>
  <pre><p></p></pre>
  <div class="box">
      <SingleDownload />
  </div>
  <pre><p></p></pre>
  <div class="box">
      <MassDownload />
  </div>
  <pre><p> </p></pre>
  <div class="box">
    <QueryControl />
  </div>
</template>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    background-image: url("../assets/2.svg");
    border: 1px solid #002ca7;
    background-color: rgba(205, 249, 255, 0.2);
}

input {
    text-align: center;
    margin: 5px;
    padding: 5px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: rgb(245, 250, 255);
}
input:hover{
    background-color: rgb(216, 220, 224);
    transition: 400ms;
}
input:focus {
    border: 2px solid rgb(125, 185, 255);
    transition: 1.5s;
}

button {
    text-align: center;
    border: 1px solid #002ca7;
    margin: 5px;
    padding: 5px;
    background-color: rgb(140, 230, 250);
    color: rgb(1, 25, 54);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
button:hover {
    background-color: rgb(150, 250, 255);
    color: rgb(2, 44, 95);
    transition: 400ms;
}
button:focus {
    background-color: rgb(0, 90, 110);
    color: rgb(186, 206, 231);
    transition: 400ms;
}

.box {
    margin: 5px;
    padding: 5px;
    text-align: center;
    border: 2px solid #002ca7;
    background-color: rgba(205, 249, 255, 0.2);
}
</style>

<script>
// @ is an alias to /src
import SingleDownload from '@/components/SingleDownload.vue';
import MassDownload from '@/components/MassDownload.vue';
import QueryControl from '@/components/QueryControl.vue';
export default {
  name: 'HomeView',
  components: {
    SingleDownload, MassDownload, QueryControl,
  }
}
</script>
