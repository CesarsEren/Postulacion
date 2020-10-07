import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/model/category.interface";
import { CategoriasService } from "src/app/servicios/categorias.service";
import { DatabaseService } from "../../servicios/database.service";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"],
})
export class CategoriasComponent implements OnInit {
  category: Category;
  categoryform: FormGroup;
  categorias: Category[];
  constructor(private db: CategoriasService, private formBuilder: FormBuilder) {
    this.categoryform = formBuilder.group({
      //email: ["", [Validators.email, Validators.required]],
      cardTitle: ["", [Validators.required]],
      cardSubtitle: ["", [Validators.required]],
      imagem: ["", [Validators.required]],
    });
  }
  title: String = "Categorias";
  ngOnInit() {
    this.Listcategorias();
  }
  Listcategorias() {
    this.db.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }
  delete(id: number) {
    this.db.deleteCategory(id).subscribe(
      (res) => {
        console.log(res);
        this.Listcategorias();
      },
      (err) => console.error(err)
    );
  }

  submit() {
    //if (this.categoryform.valid) {
    this.db.addCategory(this.categoryform.getRawValue()).subscribe(
      (res) => {
        console.log(res);
        this.Listcategorias();
      },
      (err) => console.error(err)
    );
    //console.log(this.categoryform.value);
    //}
  }
}
