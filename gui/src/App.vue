<template>
  <div id="b01" class="box">
    <pre><p></p></pre>
    <h1 >Central Download Manager</h1>
    <router-view/>
  </div>
</template>

<style>
h1, h2{
  text-align: center;
  color: #011936ff;
}
#b01{
  margin: 8% 30px 8% 30px;
  border: 3px solid #41569fff;
  background-color:rgba(196, 221, 253, 0.4);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.box {
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  border: 2px solid #41569fff;
  background-color: rgba(196, 221, 253, 0.6);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

</style>