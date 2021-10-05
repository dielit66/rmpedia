<template>
  <Header></Header>
  <CharList></CharList>
</template>

<script>
import Header from "./components/Header/Header";
import CharList from "./components/Body/CharList";
export default {
  name: "App",
  components: { CharList, Header },
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
