export const queryTypes = [{ id: "SELECT", name: "Select" }];

export const columns = [
  { belongsTo: "CUSTOMERS|ORDERS|SHIPPING", id: "ALL", name: "*" },
  { belongsTo: "CUSTOMERS", id: "customer_id", name: "ID", type: "int" },
  {
    belongsTo: "CUSTOMERS",
    id: "first_name",
    name: "First Name",
    type: "varchar(100)",
  },
  {
    belongsTo: "CUSTOMERS",
    id: "last_name",
    name: "Last Name",
    type: "varchar(100)",
  },
  { belongsTo: "CUSTOMERS", id: "age", name: "Age", type: "int" },
  {
    belongsTo: "CUSTOMERS",
    id: "country",
    name: "Country",
    type: "varchar(100)",
  },
  { belongsTo: "ORDERS", id: "order_id", name: "Order Id", type: "int" },
  { belongsTo: "ORDERS", id: "item", name: "Item", type: "varchar(100)" },
  { belongsTo: "ORDERS", id: "amount", name: "Amount", type: "int" },
  { belongsTo: "ORDERS", id: "customer_id", name: "Customer Id", type: "int" },
  {
    belongsTo: "SHIPPINGS",
    id: "shipping_id",
    name: "Shipping Id",
    type: "int",
  },
  { belongsTo: "SHIPPINGS", id: "status", name: "Status", type: "int" },
  {
    belongsTo: "SHIPPINGS",
    id: "customer_id",
    name: "Customer Id",
    type: "int",
  },
];

export const tables = [
  { id: "CUSTOMERS", name: "Customers" },
  { id: "ORDERS", name: "Orders" },
  { id: "SHIPPINGS", name: "Shipping" },
];

export const logicalOperators = [
  { id: "equals", name: "=" },
  { id: "greaterThan", name: ">" },
  { id: "lessThan", name: "<" },
];
