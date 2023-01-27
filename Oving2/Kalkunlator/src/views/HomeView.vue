<script setup>
import Calculator from '../components/Calculator.vue'
import Log from '../components/Log.vue'
import image from "../assets/calculator.png"
</script>

<template>
  <h1>Home</h1>
  <img :src="image" />
  <div class="home">
    <Calculator />
    <Log />
  </div>

</template>
