import { Product } from './producto.interface';

export interface Category {
  id: number;
  cardSubtitle: string;
  cardTitle: string;
  imagem: string;
  menu: Product[];
 }