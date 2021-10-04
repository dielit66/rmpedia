<template>
  <Header></Header>
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
  color: white !important;
}
</style>
