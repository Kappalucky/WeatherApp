<template>
  <header id="app-header">
    <nav></nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
nav {
  background-color: #8a9eb2;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1030;
}

nav a {
  color: white;
  text-decoration-style: none;
}

nav img {
  height: 35px;
  width: 35px;
}

nav a:hover {
  color: black;
}

.drop-down-text {
  color: black;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
}
</style>
