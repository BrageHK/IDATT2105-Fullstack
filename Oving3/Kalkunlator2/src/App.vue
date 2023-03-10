<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Calculator from "./components/Calculator.vue";

export default {
  name:"App",
  components: {
    Calculator
  }
}
</script>

<template>
  <div class="wrapper">
    <header>
      <RouterLink to="/">Kalkulator</RouterLink> |
      <RouterLink to="/kontaktskjema">Kontaktskjema</RouterLink> |
      <RouterLink to="/compiler">Compiler</RouterLink>
    </header>
    <RouterView />
  </div>
  
  
</template>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  background-color: #f5f5f5;
}

header a {
  margin: 0 1rem;
  text-decoration: none;
  color: #000;
}

header a:hover {
  color: #f00;
}
</style>
