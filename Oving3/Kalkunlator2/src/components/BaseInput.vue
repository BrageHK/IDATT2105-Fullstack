<template>
<label>{{  label }}</label>
<input
    :placeholder="label"
    class="field"
    :value="(modelValue: string | number)"
    @input="$emit('update:modelValue', $event.target.value)"
>
</template>

<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            default: ""
        }
    },
    modelValue: {
        type: [String, Number],
        default: ""
    }
}
</script>