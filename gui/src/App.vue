<template>
  <Header />
  <div id="b01" class="box">
    
    <router-view/>
  </div>
  <Footer />
</template>

<style>
h1, h2{
  text-align: center;
  color: #011936ff;
}
#b01{
  margin: 8% 30px 8% 30px;
  border: 6px solid #41569fff;
  background-color: rgb(158, 200, 255);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.box{
  border-radius: 15px;
  margin: 5px;
  padding: 15px;
  text-align: center;
  border: 3px solid #41569fff;
  background-color: rgb(196, 221, 255);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

</style>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default
{
  components: {Footer, Header}
}
</script>