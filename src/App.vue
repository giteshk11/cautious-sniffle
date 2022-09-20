<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { Columns, Customers, Orders, Shippings, Tab } from "./types";
import * as Helpers from "./utils/helpers";
import { columns as TableCols } from "./utils/constants";
import TableIcon from "./assets/table.svg?raw";

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

const tableSchema = (): Columns[][] => {
  return Object.values(
    TableCols.reduce((acc: any, item: any) => {
      if (item.id !== "ALL") {
        acc[item.belongsTo] = [...(acc[item.belongsTo] || []), item];
      }
      return acc;
    }, {})
  );
};

watch(switchTabsView, () => {
  rows.value = undefined;
  columns.value = undefined;
  query.value = "SELECT * FROM CUSTOMERS;";
});
</script>

<template>
  <div class="h-full">
    <TheHeaderVue @clicked="runQuery" />
    <div class="space-y-4 mx-12">
      <TabSelector :tabs="tabs" @clicked="changeTabFocus" />
      <div
        class="grid grid-cols-2 w-full"
        style="grid-template-columns: 1fr 0.2fr"
      >
        <div v-show="switchTabsView == 'Visual'">
          <SQLVisual
            @query-changed="(newValue: string) => (query = newValue)"
          />
        </div>
        <div v-show="switchTabsView == 'Editor'" class="w-full">
          <SQLEditor @code-changed="(newValue: string) => (query = newValue)" />
        </div>
        <div class="place-self-end">
          <template v-for="(schema, i) in tableSchema()" :key="i">
            <div class="flex items-end gap-x-1 border-b-[1.5px]">
              <span v-html="TableIcon" />
              <p class="text-sm">{{ schema[i].belongsTo }}</p>
            </div>
            <ul class="mb-4">
              <li
                v-for="(col, j) in schema"
                :key="j"
                class="text-xs space-x-1.5"
              >
                <span>{{ col.name }}</span>
                <span class="text-blue-500">{{ col.type }}</span>
              </li>
            </ul>
          </template>
        </div>
      </div>
      <div v-if="rows?.length">
        <DataTable :columns="columns" :rowData="rows" />
      </div>
    </div>
  </div>
</template>
