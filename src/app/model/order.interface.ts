import { CartItem } from "./cartitem.interface";

export class Order {
  id: string;
  userEmail: string;
  date: string;
  value: number;
  items: CartItem[];
}
