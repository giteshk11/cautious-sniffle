<template>
  <div>
    <input
      type="text"
      class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      @change="inputChanged"
      :value="modelValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
  },
  methods: {
    inputChanged($event: any) {
      const value = ($event.target as HTMLInputElement).value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
