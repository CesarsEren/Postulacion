import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/model/category.interface";
import { CategoriasService } from "src/app/servicios/categorias.service";
import { DatabaseService } from "../../servicios/database.service";
import Swal from "sweetalert2";

declare var $: any;
@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"],
})
export class CategoriasComponent implements OnInit {
  category: Category;
  categoryedit: Category;
  categoryformedit: FormGroup;
  categoryform: FormGroup;
  title: String = "Categorias";

  constructor(
    private db: CategoriasService,
    private formBuilder: FormBuilder
  ) {}

  iniciarFormularios() {
    this.categoryform = this.formBuilder.group({
      cardTitle: ["", [Validators.required]],
      cardSubtitle: ["", [Validators.required]],
      imagem: ["", [Validators.required]],
      menu: {},
    });

    this.categoryformedit = this.formBuilder.group({
      cardTitle: ["", [Validators.required]],
      cardSubtitle: ["", [Validators.required]],
      imagem: ["", [Validators.required]],
      //menu: {},
    });
  }
  ngOnInit() {
    console.log(this.db.categorias);
    this.iniciarFormularios();
  }

  Listcategorias() {
    this.db.getCategorias(false);
  }

  delete(id: number) {
    this.db.deleteCategory(id).subscribe(
      (res) => {
        console.log(res);
        Swal.fire(
          "Eliminado",
          "La Categoria fue eliminada correctamente.",
          "success"
        );
        this.Listcategorias();
      },
      (err) => console.error(err)
    );
  }

  openedit(categoria: Category) {
    $("#myModalEdit").modal("show");
    this.categoryformedit = this.formBuilder.group({
      cardTitle: [categoria.cardTitle, [Validators.required]],
      cardSubtitle: [categoria.cardSubtitle, [Validators.required]],
      imagem: [categoria.imagem, [Validators.required]],
      id: [categoria.id],
    });
  }

  edit() {
    this.db
      .getCategoria(this.categoryformedit.getRawValue().id)
      .subscribe((categoria) => {
        this.categoryedit = categoria;
        var categoria: Category = this.categoryformedit.getRawValue();
        this.categoryedit.cardTitle = categoria.cardTitle;
        this.categoryedit.cardSubtitle = categoria.cardSubtitle;
        this.categoryedit.imagem = categoria.imagem;
        console.log(this.categoryedit);
        this.db
          .actualizarCategory(
            this.categoryformedit.getRawValue().id,
            this.categoryedit
          )
          .subscribe(
            (res) => {
              //console.log(res);
              Swal.fire("Editado", "La Categoria fue actualizada.", "success");
              this.db.getCategorias(true);
            },
            (err) => console.error(err)
          );
      });
    $("#myModalEdit").modal("hide");
  }

  submit() {
    //if (this.categoryform.valid) {
    this.category = this.categoryform.getRawValue();
    this.category.menu = [];
    this.db.addCategory(this.category).subscribe(
      (res) => {
        //console.log(res);
        Swal.fire(
          "Registrado",
          "La categoria fue registrada correctamente.",
          "success"
        );
        this.Listcategorias();
      },
      (err) => console.error(err)
    );
    //console.log(this.categoryform.value);
    //}
    $("#myModal").modal("hide");
  }
}
