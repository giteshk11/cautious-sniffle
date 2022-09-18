export interface Columns {
  belongsTo: string;
  id: string;
  name: string;
}

export interface Customers {
  customer_id: number;
  first_name: string;
  last_name: string;
  age: number;
  country: string;
}

export interface Tables {
  id: string;
  name: string;
}
