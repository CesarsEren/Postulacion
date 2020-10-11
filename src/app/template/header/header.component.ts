import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/model/category.interface";
import { CategoriasService } from "src/app/servicios/categorias.service";

import { DatabaseService } from "../../servicios/database.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  
  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {}
}
