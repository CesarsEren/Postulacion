import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.interface';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categorias: Category[];
  title: String = "Produtos";
  seleccionado = "";
  constructor(private db: CategoriasService) { }
  ngOnInit() {
    this.db.getCategorias().subscribe((data) => {
      //console.log(data.category);
      this.categorias = data;
      this.seleccionado = this.categorias[0].cardTitle;
    });
  }

}
