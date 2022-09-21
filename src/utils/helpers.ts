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

  console.log(query.split(" "));

  let rows: Customers[] | Shippings[] | Orders[] = [];
  if (table?.includes("CUSTOMERS")) {
    rows = customers;
  } else if (table?.includes("ORDERS")) {
    rows = orders;
  } else if (table?.includes("SHIPPINGS")) {
    rows = shippings;
  } else {
    rows = customers;
  }

  /**
   * Returning columns for the table selected in query
   */
  let filteredColumns = columns.filter((tc) => table?.includes(tc.belongsTo));

  /**
   *  Filtering data based on column selected for a particular table.
   */

  if (!["ALL", "*"].includes(selectedCol)) {
    filteredColumns = filteredColumns.filter((col) => col.id === selectedCol);
    rows = rows.map((row: any) => ({ [selectedCol]: row[selectedCol] }));
  }

  /**
   *  If not table found return default data.
   */

  if (!filteredColumns.length) {
    filteredColumns = columns.filter((tc) => tc.belongsTo === "CUSTOMERS");
  }

  return {
    rows,
    columns: filteredColumns,
  };
}
