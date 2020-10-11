import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/model/category.interface";
import { Product } from "src/app/model/producto.interface";
import { CategoriasService } from "src/app/servicios/categorias.service";
import { DatabaseService } from "src/app/servicios/database.service";
import Swal from "sweetalert2";
declare var $: any;

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"],
})
export class ProductosComponent implements OnInit {
  categorias: Category[];
  categoria: Category;
  producto: any;
  title: String = "Produtos";
  productoform: FormGroup;
  productoformedit: FormGroup;
  constructor(
    private db: CategoriasService,
    private formBuilder: FormBuilder
  ) {}

  seleccionado: Category;
  ngOnInit() {
    this.iniciarFormularios();
    this.seleccionado = this.db.seleccionado;
  }

  iniciarFormularios() {
    this.productoform = this.formBuilder.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      imagePath: ["", [Validators.required]],
      price: ["", [Validators.required]],
      categoria: [this.db.seleccionado, [Validators.required]],
    });
    this.productoformedit = this.formBuilder.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      imagePath: ["", [Validators.required]],
      price: ["", [Validators.required]],
      categoria: [this.db.seleccionado, [Validators.required]],
    });
  }
  submit() {
    this.producto = this.productoform.getRawValue();
    delete this.producto.categoria;
    console.log("this.producto", this.producto);
    this.db.getCategoria(this.db.seleccionado.id).subscribe((data) => {
      var id = this.producto.id;
      this.categoria = data;
      this.categoria.menu.push(this.producto);
      this.db
        .actualizarCategory(this.db.seleccionado.id, this.categoria)
        .subscribe(
          (res) => {
            console.log(res);
            Swal.fire(
              "Registrado",
              "El producto fue registrado correctamente.",
              "success"
            );
            this.db.getCategorias(false);
            $("#myModal").modal("hide");
            this.iniciarFormularios();
          },
          (err) => console.error(err)
        );
    });
  }

  delete(cate, id) {
    this.db.getCategoria(cate).subscribe((data) => {
      this.categoria = data;
      var filtrar = this.categoria.menu.filter(function (producto: Product) {
        return producto.id !== id;
      });
      this.categoria.menu = filtrar;
      this.db.actualizarCategory(cate, this.categoria).subscribe(
        (res) => {
          console.log(res);
          Swal.fire("Eliminado", "El producto fue eliminado.", "success");

          this.db.getCategorias(false);
        },
        (err) => console.error(err)
      );
    });
  }

  productoaux: Product;
  categoriaux: Category;
  openedit(producto: Product, category: Category) {
    this.productoaux = producto;
    this.categoriaux = category;
    $("#myModalEdit").modal("show");
    this.productoformedit = this.formBuilder.group({
      id: [producto.id, [Validators.required]],
      name: [producto.name, [Validators.required]],
      description: [producto.description, [Validators.required]],
      imagePath: [producto.imagePath, [Validators.required]],
      price: [producto.price, [Validators.required]],
      categoria: [this.db.seleccionado, [Validators.required]],
    });
  }

  edit() {
    var id = this.productoaux.id;
    this.db.getCategoria(this.categoriaux.id).subscribe((data) => {
      this.categoria = data;
      var filtrar = this.categoria.menu.filter(function (producto: Product) {
        return producto.id !== id;
      });
      this.categoria.menu = filtrar;
      this.db.actualizarCategory(this.categoriaux.id, this.categoria).subscribe(
        (res1) => {
          console.log(res1);
          {
            this.producto = this.productoformedit.getRawValue();
            //console.log("this.producto", this.producto);
            this.db
              .getCategoria(this.producto.categoria.id)
              .subscribe((data1) => {
                delete this.producto.categoria;
                this.categoria = data1;
                this.categoria.menu.push(this.producto);
                //console.log("this.categoria", this.categoria);
                this.db
                  .actualizarCategory(this.categoria.id, this.categoria)
                  .subscribe(
                    (res2) => {
                      console.log(res2);
                      Swal.fire(
                        "Editado",
                        "El producto fue actualizado correctamente.",
                        "success"
                      );
                      this.db.getCategorias(false);
                    },
                    (err2) => console.error(err2)
                  );
              });
          }
        },
        (err) => console.error(err)
      );
    });

    $("#myModalEdit").modal("hide");
  }
}
