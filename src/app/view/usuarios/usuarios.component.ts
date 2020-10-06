import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/servicios/database.service";
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  usuarios: any = [];

  title: String = "Usuarios";
  
  constructor(private db: UsuariosService) {}

  ngOnInit() {
    this.db.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
