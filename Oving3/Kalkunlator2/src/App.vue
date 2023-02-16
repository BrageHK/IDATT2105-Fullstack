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
      <RouterLink to="/kontaktskjema">Kontaktskjema</RouterLink>
    </header>
    <RouterView />
  </div>
  
  
</template>

<style scoped>

</style>
