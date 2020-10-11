import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FACELIST_API } from "../app.api";
import { Category } from "../model/category.interface";
import { Product } from "../model/producto.interface";
//import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriasService {
  categorias: Category[] = [];
  seleccionado: Category;

  productos: number = 0;
  constructor(private http: HttpClient) {
    this.getCategorias(true);
  }

  public getCategorias(firsttime: boolean) {
    this.productos = 0;
    this.http.get<Category[]>(`${FACELIST_API}/category`).subscribe((data) => {
      if (firsttime) {
        this.seleccionado = data[0];
      } else {
        data.forEach((da) => {
          if (this.seleccionado.id == da.id) {
            this.seleccionado = da;
          }
        });
      }
      this.categorias = data;
      data.forEach((element) => {
        this.productos += element.menu.length;
      });
    });
  }

  public getCategoria(id: number): Observable<Category> {
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
