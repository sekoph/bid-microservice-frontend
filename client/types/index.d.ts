declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


//type syntax
export type DataTypeName = {
  key1: value;
  key2: value2;
}

declare type register = {
  name?: string;
  username: string;
  password: string;
  email?: string;
}

declare type login = {
  username: string;
  password: string;
}

declare type User = {
  id: int;
  username: string;
  email: string;
  name: string;
  disabled: boolean;
  user_type_id: int;
  date_created: string;
}


declare interface LoggedIN {
  token: string;
  user: User;
}

declare type Product = {
  product_name: string;
  description: string;
  location: string;
  disposal_price: float;
  product_category_id: int
}
