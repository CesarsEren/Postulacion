import { v4 as uuidv4 } from 'uuid';
import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/servicios/database.service";
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { User } from 'src/app/model/user.interface';

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  usuarios: User[];

  title: String = "Usuarios";

  constructor(private db: UsuariosService) { }

  ngOnInit() {
    var str = uuidv4();
    str.replaceAll("-", "");
    str.substring(0, 28);

    this.db.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  submit() { 

  }

}
