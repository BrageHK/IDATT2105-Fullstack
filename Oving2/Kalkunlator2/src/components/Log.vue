
<script lang="ts">
export default {
  name: "Log",
  props: ["equations"],
};
</script>


<template>
    <div class="outer-box">
        <div class="inner-box">
            <p v-for="equation in equations">{{ equation }}</p>
        </div>
    </div>
</template>

<style scoped>
.outer-box {
  background: #234;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  margin: 50px auto;
  color: white;
}

.inner-box {
  background: black;
  padding: 10px;
  border-radius: 15px;
  text-align: left;
  font-size: 1.5rem;
  color: white;
}
</style>