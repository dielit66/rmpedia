<template>
  <header>
    <img
      class="logo_name"
      src="../../assets/logoName.png"
      alt="Rick and Morty Logo"
    />
    <Nav></Nav>
  </header>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Header",
  components: { Nav },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo_name {
  width: 250px;
  margin-top: 20px;
  margin-left: 5px;
}
</style>
