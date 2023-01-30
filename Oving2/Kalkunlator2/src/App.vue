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
  <div id="app">
    <Calculator />
  </div>
  
</template>

<style scoped>

</style>
