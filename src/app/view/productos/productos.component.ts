import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categorias: any = [];
  
  title:String="Produtos";
  seleccionado="";
  constructor(private db: DatabaseService) { }

  ngOnInit() { 
    this.db.GetJson().subscribe((data) => {
      //console.log(data.category);
      this.categorias = data.category;
      this.seleccionado=this.categorias[0].cardTitle;
    });
  }

}
