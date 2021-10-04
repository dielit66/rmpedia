<template>
  <nav class="nav_menu">
    <a href=""><div class="nav_menu_char">Персонажи</div></a>
    <a href=""><div class="nav_menu_ep">Эпизоды</div></a>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
nav {
  display: flex;
  background-color: rgb(100, 184, 47);
  border: 1px solid gray;
  width: 250px;
  margin-top: 20px;
  font-size: 16px;
  justify-content: center;
  padding: 8px 0 8px 0;
}
.nav_menu_char {
  border-right: 2px solid white;
  padding-right: 21px;
}
.nav_menu_ep {
  margin-left: 30px;
}
.nav_menu_char,
nav_menu_ep {
}
</style>
