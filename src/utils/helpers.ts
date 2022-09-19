import type { Customers, Orders, Shippings } from "@/types";
import { columns } from "./constants";
import { customers, orders, shippings } from "./database";

export function executeQuery(query: string) {
  // const whereSelected = query.includes("WHERE");
  const [
    queryType,
    selectedCol,
    from,
    table,
    where,
    whereColumn,
    logicalOperator,
    whereValue,
  ] = query.split(" ");

  console.log(query);

  let rows: Customers[] | Shippings[] | Orders[] = [];
  if (table.includes("CUSTOMERS")) {
    rows = customers;
  } else if (table.includes("ORDERS")) {
    rows = orders;
  } else if (table.includes("SHIPPINGS")) {
    rows = shippings;
  }
  let filteredColumns = columns.filter((tc) => table.includes(tc.belongsTo));
  if (!["ALL", "*"].includes(selectedCol)) {
    filteredColumns = filteredColumns.filter((col) => col.id === selectedCol);
    rows = rows.map((row: any) => ({ [selectedCol]: row[selectedCol] }));
  }
  console.log(filteredColumns, rows);
  // if (whereSelected) {
  //   rows = rows.map((row: any) => ({ [selectedCol]: row[selectedCol] }));
  // }
  return {
    rows,
    columns: filteredColumns,
  };
}
