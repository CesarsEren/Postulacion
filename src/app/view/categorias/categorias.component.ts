import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../servicios/database.service";
@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"],
})
export class CategoriasComponent implements OnInit {
  categorias: any = [];
  constructor(private db: DatabaseService) {}

  title: String = "Categorias";
  ngOnInit() {
    this.db.GetJson().subscribe((data) => {
      console.log(data.category);
      this.categorias = data.category;
    });
  }
}
