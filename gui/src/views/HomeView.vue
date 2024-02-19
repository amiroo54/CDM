<template>
  <div class="box">
      <SingleDownload />
  </div>
  <pre><p></p></pre>
  <div class="box">
      <MassDownload @start="this.$refs.query.getQueries()" />
  </div>
  <pre><p> </p></pre>
  <div class="box">
    <QueryControl ref="query" />
  </div>
</template>

<style>
body {
    font-family: 'Times New Roman', Times, serif;
    background-image: url("../assets/2.svg");
    background-color: rgba(205, 249, 255, 0.2);
}

input {
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    transition: width 0.4s ease-in-out;
    background-color: #f8f8f8;
    padding: 7px;
    margin: 10px;
    box-shadow: 0 5px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: rgb(245, 250, 255);
}
input:hover{
    background-color: rgb(230, 235, 240);
    transition: 500ms;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.20), 0 17px 50px 0 rgba(0,0,0,0.19);
}
input:focus {
    border: 2px solid #41569fff;
    transition: 1s;
}

button {
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
button:hover {
    background-color: rgb(171, 207, 255);
    color: rgb(15, 50, 94);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.19);
}
button:active{
    background-color: rgb(119, 159, 211);
    color: rgb(252, 253, 255);
    transform: translateY(4px);
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
