<template>
  <div class="flex justify-around gap-x-10">
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: '20rem', width: '100%' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @update:modelValue="$emit('codeChanged', code)"
    />
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <div class="px-4 py-5 sm:p-6">
        <!-- Content goes here -->

        <h3>Pre-defined queries</h3>
        <ul>
          <li
            v-for="(query, i) in preDefinedQueries"
            :key="i"
            class="flex items-start"
          >
            <input
              :id="`query-${i}`"
              :value="query"
              type="radio"
              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              v-model="selectedQuery"
            />
            <label
              for="query"
              class="ml-3 block text-sm font-medium text-gray-700"
            >
              {{ query }}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, watch } from "vue";
import { Codemirror } from "vue-codemirror";
import { sql } from "@codemirror/lang-sql";

const extensions = [sql()];
const code = ref();
const view = shallowRef();
const selectedQuery = ref();

const emit = defineEmits(["codeChanged"]);

const preDefinedQueries = [
  "SELECT * FROM CUSTOMERS;",
  "SELECT * FROM ORDERS;",
  "SELECT * FROM SHIPPINGS;",
  "SELECT order_id FROM ORDERS;",
];

watch(selectedQuery, (value) => {
  code.value = value;
  emit("codeChanged", code.value);
});

const handleReady = (payload: any) => {
  view.value = payload.view;
};
</script>
