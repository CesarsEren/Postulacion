import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.interface';
import { Product } from 'src/app/model/producto.interface';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categorias: Category[];
  categoria: Category;
  producto: Product;
  title: String = "Produtos";
  seleccionado = "";
  productoform: FormGroup;
  constructor(private db: CategoriasService, private formBuilder: FormBuilder) {

    this.productoform = formBuilder.group({
      //email: ["", [Validators.email, Validators.required]],
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      imagePath: ["", [Validators.required]],
      price: ["", [Validators.required]],
      categoria: [this.seleccionado, [Validators.required]]
    });

  }
  ngOnInit() {
    this.getdata(true);
  }
  getdata(total: boolean) {
    this.db.getCategorias().subscribe((data) => {
      this.categorias = data;
      if (total) { this.seleccionado = this.categorias[0].cardTitle; }
    });
  }
  submit() {
    this.producto = this.productoform.value;
    console.log(this.producto);
    this.db.getCategoria(this.productoform.getRawValue().categoria).subscribe((data) => {
      this.categoria = data;
      this.categoria.menu.push(this.producto);
      this.db.actualizarCategory(this.productoform.getRawValue().categoria, this.categoria).subscribe(
        (res) => {
          this.getdata(false);
          console.log(res);
        },
        (err) => console.error(err)
      );
    });
  }

  delete(cate, id) {
    this.db.getCategoria(cate).subscribe((data) => {
      this.categoria = data;
      var filtrar = this.categoria.menu.filter(function (producto: Product) {
        return producto.id !== id
      });
      this.categoria.menu = filtrar;
      this.db.actualizarCategory(cate, this.categoria).subscribe(
        (res) => {
          this.getdata(false);
          console.log(res);
        },
        (err) => console.error(err)
      );
    });

  }
}
