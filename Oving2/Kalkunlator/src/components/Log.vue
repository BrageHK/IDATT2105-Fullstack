<script setup>
//import ref from 'vue-ref';

defineProps({
    log: {
        type: Object,
        required: true,
    }
});

// const log = ref({
//     ans: 0,
//     eq: '',
// })


</script>

<template>
    <div class="log">
        <div class="eq">{{ log.eq }}</div> = 
        <div class="ans">{{ log.ans }}</div>
    </div>
</template>

<style scoped>

</style>