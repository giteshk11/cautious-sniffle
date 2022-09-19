<template>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-y-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg max-h-[25rem]"
        >
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <TableRow :columns="columns" type="th" />
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <TableRow :rows="rowData" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Columns, Customers, Orders, Shippings } from "@/types";
import { defineComponent, type PropType } from "vue";
import TableRow from "./TableRow.vue";

export default defineComponent({
  components: {
    TableRow,
  },
  props: {
    rowData: {
      type: Object as PropType<Customers[] | Orders[] | Shippings[]>,
    },
    columns: {
      type: Object as PropType<Columns[]>,
    },
  },
});
</script>
