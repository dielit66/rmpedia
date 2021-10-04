<template>
  <header>
    <img
      class="logo_name"
      src="../../assets/logoName.png"
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
  flex-direction: column;
  align-items: center;
}
.logo_name {
  width: 250px;
  margin-top: 20px;
  margin-left: 5px;
}
</style>
