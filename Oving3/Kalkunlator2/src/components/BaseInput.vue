<template>
    <label v-if="label">{{  label }}</label>
    <component
        v-bind="$attrs"
        :placeholder="label"
        class="field"
        :value="(modelValue: string | number)"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        label: {
            type: String,
            default: "",
        }
    },
    modelValue: {
        type: [String, Number],
        default: "",
    },
    component: {
        type: String,
        default: "input",
    }
});
</script>