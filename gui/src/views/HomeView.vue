<template>
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
    background-color: rgba(205, 249, 255, 0.2);
}

input {
    border-radius: 5px;
    text-align: center;
    margin: 5px;
    padding: 5px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: rgb(245, 250, 255);
}
input:hover{
    background-color: rgb(230, 235, 240);
    transition: 500ms;
}
input:focus {
    border: 2px solid #41569fff;
    transition: 1s;
}

button {
    border-radius: 8px;
    text-align: center;
    border: 1px solid #41569fff;
    margin: 5px;
    padding: 5px;
    background-color: #8cbcfaff;
    color: #011936ff;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
button:hover {
    background-color: rgb(171, 207, 255);
    color: rgb(2, 44, 95);
    transition: 200ms;
}
button:focus {
    background-color: rgb(119, 159, 211);
    color: #142b55ff;
    transition: 200ms;
}
</style>

<script>
// @ is an alias to /src
import SingleDownload from '@/components/SingleDownload.vue';
import MassDownload from '@/components/MassDownload.vue';
import QueryControl from '@/components/Query/QueryControl.vue';
export default {
  name: 'HomeView',
  components: {
    SingleDownload, MassDownload, QueryControl,
  }
}
</script>
