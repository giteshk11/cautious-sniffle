export const queryTypes = [{ id: "SELECT", name: "Select" }];

export const columns = [
  { belongsTo: "CUSTOMERS|ORDERS|SHIPPING", id: "ALL", name: "*" },
  { belongsTo: "CUSTOMERS", id: "customer_id", name: "ID" },
  { belongsTo: "CUSTOMERS", id: "first_name", name: "First Name" },
  { belongsTo: "CUSTOMERS", id: "last_name", name: "Last Name" },
  { belongsTo: "CUSTOMERS", id: "age", name: "Age" },
  { belongsTo: "CUSTOMERS", id: "country", name: "Country" },
  { belongsTo: "ORDERS", id: "order_id", name: "Order Id" },
  { belongsTo: "ORDERS", id: "item", name: "Item" },
  { belongsTo: "ORDERS", id: "amount", name: "Amount" },
  { belongsTo: "SHIPPING", id: "shipping_id", name: "Shipping Id" },
  { belongsTo: "SHIPPING", id: "status", name: "Status" },
  { belongsTo: "SHIPPING", id: "customer_id", name: "Customer Id" },
];

export const tables = [
  { id: "CUSTOMERS", name: "Customers" },
  { id: "ORDERS", name: "Orders" },
  { id: "SHIPPING", name: "Shipping" },
];

export const logicalOperators = [
  { id: "equals", name: "=" },
  { id: "greaterThan", name: ">" },
  { id: "lessThan", name: "<" },
];
