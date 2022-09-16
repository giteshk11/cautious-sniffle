<script setup lang="ts">
import { ref } from "vue";
import { EditorView, basicSetup } from "codemirror";
import { sql } from "@codemirror/lang-sql";

import TheHeaderVue from "./components/TheHeader.vue";
const content = ref("SELECT * FROM USERS;");

let editor = new EditorView({
  extensions: [basicSetup, sql()],
});
</script>

<template>
  <div class="h-full">
    <TheHeaderVue />
    <main class="max-w-[80%] mx-auto relative h-[90%]">
      <textarea v-model="content" id="editor"></textarea>
    </main>
  </div>
</template>
