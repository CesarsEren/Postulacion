import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { FACELIST_API } from '../app.api'; 
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${FACELIST_API}/users`);
  }
  public addUser(data:User):void
  {
    this.http.post(`${FACELIST_API}/users`,data);
  }
}
