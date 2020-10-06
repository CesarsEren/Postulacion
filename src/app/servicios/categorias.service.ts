import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { FACELIST_API } from '../app.api';
import { Category } from '../model/category.interface';
//import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  
  public getCategorias(): Observable<Category[]> {
    return this.http.get<Category[]>(`${FACELIST_API}/category`);
  }
}
