<template>
  <Header />


  <router-view></router-view>
</template>

<script>



  import Header from "./components/Header/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
#app {
}
* {
  font-family: Arial, Helvetica, Tahoma, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black !important;
}
body {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
