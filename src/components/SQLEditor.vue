<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '20rem' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @update:modelValue="$emit('codeChanged', code)"
  />
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { Codemirror } from "vue-codemirror";
import { sql } from "@codemirror/lang-sql";

const extensions = [sql()];
const code = ref();
const view = shallowRef();

const handleReady = (payload: any) => {
  view.value = payload.view;
};
</script>
