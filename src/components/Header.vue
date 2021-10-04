<template>
  <header>
    <img
      class="logo_name"
      src="../assets/logoName.png"
      alt="Rick and Morty Logo"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  display: flex;
}
.logo_name {
  width: 350px;
  margin: 20px auto 0;
}
</style>
