<script setup lang="ts">
import { computed, ref } from "vue";
import type { Columns, Customers } from "./types";
import { customers } from "./utils/database";
import { columns as tableCol } from "./utils/constats";

import TheHeaderVue from "./components/TheHeader.vue";
import TabSelector from "./components/TabSelector.vue";
import SQLVisual from "./components/SQLVisual.vue";
import SQLEditor from "./components/SQLEditor.vue";
import DataTable from "./components/DataTable/DataTable.vue";

interface Tab {
  name: string;
  current: boolean;
}

const tabs = ref([
  { name: "Visual", current: true },
  { name: "Editor", current: false },
]);

const query = ref("");
const rows = ref<Customers[]>();
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
  if (query.value.includes("CUSTOMERS")) {
    rows.value = customers;
    columns.value = tableCol.filter((tc) => tc.belongsTo === "CUSTOMERS");
  }
}
</script>

<template>
  <div class="h-full">
    <TheHeaderVue @clicked="runQuery" />
    <div class="w-2/3 space-y-4 px-6">
      <TabSelector :tabs="tabs" @clicked="changeTabFocus" />
      <div v-show="switchTabsView == 'Visual'">
        <SQLVisual />
      </div>
      <div v-show="switchTabsView == 'Editor'">
        <SQLEditor @code-changed="(value) => (query = value)" />
      </div>
      <div v-if="rows?.length">
        <DataTable :columns="columns" :rowData="rows" />
      </div>
    </div>
  </div>
</template>
