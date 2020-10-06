import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.interface';
import { CategoriasService } from 'src/app/servicios/categorias.service';
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
    this.categoryform = formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        cardSubtitle: ['', [Validators.required]],
        imagem: ['', [Validators.required]],
      }
    )
  }
  title: String = "Categorias";
  ngOnInit() {
    this.db.getCategorias().subscribe((data) => {
      //console.log(data);
      this.categorias = data;
    });
  }
  submit() {

  }
}
