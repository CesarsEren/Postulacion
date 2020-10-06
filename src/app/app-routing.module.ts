import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriasComponent } from './view/categorias/categorias.component';
import { DashboardComponent } from "./view/dashboard/dashboard.component";
import { ProductosComponent } from './view/productos/productos.component';
import { UsuariosComponent } from "./view/usuarios/usuarios.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "categorias",
    component: CategoriasComponent,
  },
  {
    path: "productos",
    component: ProductosComponent
  },
  {
    path: "usuarios",
    component: UsuariosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
