import { Product } from "./producto.interface";

export interface CartItem {
  menuItem: Product;
  quantity: number;

  /*value(): number {
    return this.menuItem.price * this.quantity;
    }*/
}
