<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { Columns, Customers, Orders, Shippings, Tab } from "./types";
import * as Helpers from "./utils/helpers";

import TheHeaderVue from "./components/TheHeader.vue";
import TabSelector from "./components/TabSelector.vue";
import SQLVisual from "./components/SQLVisual.vue";
import SQLEditor from "./components/SQLEditor.vue";
import DataTable from "./components/DataTable/DataTable.vue";

const query = ref("");
const tabs = ref([
  { name: "Visual", current: true },
  { name: "Editor", current: false },
]);

const rows = ref<Customers[] | Orders[] | Shippings[]>();
const columns = ref<Columns[]>();

const switchTabsView = computed(() => {
  return tabs.value.filter((t) => t.current)[0].name;
});

function changeTabFocus(tabName: String) {
  tabs.value = tabs.value.map((t: Tab) => {
    t.current = t.name === tabName;
    return { name: t.name, current: t.current };
  });
}

function runQuery() {
  const { rows: currentRows, columns: currentColumns } = Helpers.executeQuery(
    query.value
  );
  rows.value = currentRows;
  columns.value = currentColumns;
}

watch(switchTabsView, () => {
  rows.value = undefined;
  columns.value = undefined;
});
</script>

<template>
  <div class="h-full">
    <TheHeaderVue @clicked="runQuery" />
    <div class="w-4/5 mx-auto space-y-4 px-6">
      <TabSelector :tabs="tabs" @clicked="changeTabFocus" />
      <div v-show="switchTabsView == 'Visual'">
        <SQLVisual @query-changed="(newValue: string) => (query = newValue)" />
      </div>
      <div v-show="switchTabsView == 'Editor'">
        <SQLEditor @code-changed="(newValue: string) => (query = newValue)" />
      </div>
      <div v-if="rows?.length">
        <DataTable :columns="columns" :rowData="rows" />
      </div>
    </div>
  </div>
</template>
