export interface Columns {
  belongsTo: string;
  id: string;
  name: string;
}

export interface Customers {
  customer_id?: number;
  first_name?: string;
  last_name?: string;
  age?: number;
  country?: string;
}

export interface Tables {
  id: string;
  name: string;
}

export interface Tab {
  name: string;
  current: boolean;
}

export interface Orders {
  order_id?: number;
  item?: string;
  amount?: number;
  customer_id?: number;
}

export interface Shippings {
  shipping_id?: number;
  status?: string;
  customer_id?: number;
}
