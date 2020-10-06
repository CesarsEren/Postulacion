import { Component, OnInit } from "@angular/core";

import { DatabaseService } from "../../servicios/database.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private db: DatabaseService) {}

  categorias: Number;
  productos: Number=0;
  ngOnInit() {
    this.db.GetJson().subscribe((data) => {
      console.log(data.category);
      this.categorias = data.category.length;
      data.category.forEach((element) => {
        this.productos += element.menu.length; 
      });
    });
  }
}
