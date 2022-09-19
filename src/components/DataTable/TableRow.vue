<template>
  <tr v-if="type === 'th'" class="divide-x divide-gray-200">
    <th
      v-for="(col, i) in columns"
      :key="i"
      scope="col"
      class="px-3 py-3 text-left text-sm font-semibold text-gray-900"
    >
      {{ col.name }}
    </th>
  </tr>
  <tr v-for="(row, i) in rows" :key="i" v-else class="divide-x divide-gray-200">
    <td
      v-for="(data, j) in row"
      :key="j"
      scope="col"
      class="whitespace-nowrap px-3 py-2 text-sm text-gray-500"
    >
      {{ data }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Columns, Customers, Orders, Shippings } from "@/types";

export default defineComponent({
  props: {
    rows: {
      type: Object as PropType<Customers[] | Orders[] | Shippings[]>,
    },
    columns: {
      type: Object as PropType<Columns[]>,
    },
    type: {
      type: String,
      default: "td",
    },
  },
});
</script>
