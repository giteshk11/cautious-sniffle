<template>
  <div class="flex gap-x-4 items-center flex-wrap gap-y-4">
    <component
      v-for="(form, index) of sqlFormBuilder"
      :key="index"
      :is="form.component"
      :options="form.options"
      :label="form.label"
      :modelValue="form.modelValue"
      @update:modelValue="form.changeEvent"
      :class="form.class"
    >
      {{ form.label }}
    </component>
    <IconButton @clicked="onAddClicked" class="label-from mt-[1.5rem]">
      <template #icon>
        <template v-if="whereClicked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </template>

        <template v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </template>
      </template>
    </IconButton>
  </div>
</template>

<script setup lang="ts">
import type { Columns } from "@/types";
import {
  columns,
  queryTypes,
  tables,
  logicalOperators,
} from "@/utils/constants";

import { ref, computed } from "vue";
import IconButton from "./IconButton.vue";
import TextInput from "./TextInput.vue";
import TheDropdown from "./TheDropdown.vue";

const whereClicked = ref(false);
const defaultQueries: any = {
  selectedQuery: ref(queryTypes[0]),
  selectedTable: ref(tables[0]),
  selectedColumn: ref(columns[0]),
  selectedLogic: ref(logicalOperators[0]),
  whereColumn: ref(columns[0]),
  whereValue: ref(""),
};

const emit = defineEmits(["queryChanged"]);

const defaultColumns = computed((): any => {
  return columns.filter((c) =>
    c.belongsTo.includes(defaultQueries.selectedTable.value.id)
  );
});

const sqlFormBuilder: any = ref([
  {
    label: "Query Type",
    options: queryTypes,
    modelValue: defaultQueries.selectedQuery,
    component: TheDropdown,
    changeEvent: ($event: any) => queryChanged($event, "selectedQuery"),
  },
  {
    label: "Columns",
    options: defaultColumns,
    modelValue: defaultQueries.selectedColumn,
    component: TheDropdown,
    changeEvent: ($event: any) => queryChanged($event, "selectedColumn"),
  },
  {
    label: "From",
    component: "div",
    class: "label-from mt-[1.5rem]",
  },
  {
    label: "Tables",
    options: tables,
    modelValue: defaultQueries.selectedTable,
    component: TheDropdown,
    changeEvent: ($event: any) => queryChanged($event, "selectedTable"),
  },
]);

emitQuery();

function onAddClicked() {
  if (!whereClicked.value) {
    sqlFormBuilder.value.push(
      {
        label: "Where",
        component: "div",
        class: "label-from mt-[1.5rem]",
      },
      {
        label: "Where Columns",
        options: defaultColumns,
        modelValue: defaultQueries.whereColumn,
        component: TheDropdown,
        changeEvent: ($event: any) => queryChanged($event, "whereColumn"),
      },
      {
        label: "Logical Operators",
        options: logicalOperators,
        modelValue: defaultQueries.selectedLogic,
        component: TheDropdown,
        changeEvent: ($event: any) => queryChanged($event, "selectedLogic"),
      },
      {
        label: "Value",
        modelValue: defaultQueries.whereValue,
        component: TextInput,
        class: "mt-[1.5rem]",
        changeEvent: ($event: any) => queryChanged($event, "whereValue"),
      }
    );
  } else {
    sqlFormBuilder.value.splice(-4);
  }
  whereClicked.value = !whereClicked.value;
  emitQuery();
}

emitQuery();

function emitQuery() {
  const {
    selectedQuery: {
      value: { id: selectedQuery },
    },
    selectedColumn: {
      value: { id: selectedColumn },
    },
    selectedTable: {
      value: { id: selectedTable },
    },
    whereColumn: {
      value: { id: whereColumn },
    },
    selectedLogic: {
      value: { id: selectedLogic },
    },
    whereValue: { value: whereValue },
  } = defaultQueries;
  let generatedQuery = `${selectedQuery} ${selectedColumn} FROM ${selectedTable}`;
  if (whereClicked.value) {
    generatedQuery += ` WHERE ${whereColumn} ${selectedLogic} ${whereValue}`;
  }

  emit("queryChanged", generatedQuery);
}

function queryChanged(value: Columns, type: string) {
  defaultQueries[type].value = value;
  emitQuery();
}
</script>
