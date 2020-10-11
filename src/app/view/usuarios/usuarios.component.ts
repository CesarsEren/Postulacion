import { v4 as uuidv4 } from "uuid";
import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/servicios/database.service";
import { UsuariosService } from "src/app/servicios/usuarios.service";
import { User } from "src/app/model/user.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
declare var $: any;
@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  usuarios: User[];
  usuarioaux: any;
  usuario: User;
  title: String = "Usuarios";
  usuarioform: FormGroup;
  constructor(private db: UsuariosService, private fb: FormBuilder) {
    this.initforms();
  }
  initforms() {
    var str = uuidv4();
    str.replaceAll("-", "");
    str.substring(0, 28);
    this.usuarioform = this.fb.group({
      name: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      photoUrl: ["", [Validators.required]],
      location: ["", [Validators.required]],
      points: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      type: ["-1", [Validators.required]],
      language: ["", [Validators.required]],
      uid: [str],
    });
  }
  ngOnInit() {
    this.db.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  submit() {
    /*console.log(this.usuarioform.getRawValue().language);
    var lenguaje = this.usuarioform.getRawValue().language;
    var type = this.usuarioform.getRawValue().type;*/

    var str = uuidv4();
    str.replaceAll("-", "");
    str.substring(0, 28);

    //console.log("form", this.usuarioform.getRawValue());
    this.usuarioaux = this.usuarioform.getRawValue();
    //delete this.usuarioaux.language;
    //delete this.usuarioaux.type;
   



    //this.usuario.settingsUser.language = lenguaje;
    //this.usuario.settingsUser.type = type;
    console.log("this.usuarioaux", this.usuarioaux);
   
    
    this.usuario.settingsUser.language = this.usuarioaux.language;
    this.usuario.settingsUser.type = this.usuarioaux.type;
    delete this.usuarioaux.language;
    delete this.usuarioaux.type;
    this.usuario = this.usuarioaux;
    console.log("this.usuario", this.usuario);
    //console.log(this.usuarioaux);
    /*/* this.db.addUser(this.usuario).subscribe(
      (res) => {
        Swal.fire(
          "Registrado",
          "El Usuario fue resgistrado correctamente.",
          "success"
        );
      },
      (err) => console.log(err)
    );*/
  }
}
