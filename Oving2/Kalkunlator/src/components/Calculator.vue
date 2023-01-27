<script>
defineProps({
    display: {
        type: String,
        //required: true,
    }
})
</script>

<template>
    <div class="display">
        {{ display }}
    </div>
    <div class="calculator-grid">
        <h1>LOOOL</h1>
        <div class="display">{{ display }}</div>
        <button @click="clear">C</button>
        <button @click="sign">+/-</button>
        <button @click="percent">%</button>
        <button @click="operator('/')">/</button>
        <button @click="number(7)">7</button>
        <button @click="number(8)">8</button>
        <button @click="number(9)">9</button>
        <button @click="operator('*')">x</button>
        <button @click="number(4)">4</button>
        <button @click="number(5)">5</button>
        <button @click="number(6)">6</button>
        <button @click="operator('-')">-</button>
        <button @click="number(1)">1</button>
        <button @click="number(2)">2</button>
        <button @click="number(3)">3</button>
        <button @click="operator('+')">+</button>
        <button @click="number(0)">0</button>
        <button @click="decimal">.</button>
        <button @click="equals">=</button>
    </div>
</template>

<style scoped>
.calculator {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
}
</style>