import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/servicios/database.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  usuarios: any = [];

  title: String = "Usuarios";
  
  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.db.GetJson().subscribe((data) => {
      this.usuarios = data.users;
    });
  }
}
