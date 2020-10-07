import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FACELIST_API } from "../app.api";
import { Category } from "../model/category.interface";
import { Product } from '../model/producto.interface';
//import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriasService {
  constructor(private http: HttpClient) { }

  public getCategorias(): Observable<Category[]> {
    return this.http.get<Category[]>(`${FACELIST_API}/category`);
  }
  public getCategoria(id): Observable<Category> {
    return this.http.get<Category>(`${FACELIST_API}/category/${id}`);
  }

  public addCategory(data: Category) {
    return this.http.post(`${FACELIST_API}/category`, data);
  }
  public deleteCategory(id: number) {
    return this.http.delete(`${FACELIST_API}/category/${id}`);
  }

  public actualizarCategory(id: number, data: Category) {
    return this.http.put(`${FACELIST_API}/category/${id}`, data);
  }

  public addProducto(id: number, data: Product) {
    return this.http.put(`${FACELIST_API}/category/${id}`, data);
  }
}
