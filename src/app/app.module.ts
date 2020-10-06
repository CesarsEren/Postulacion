import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AsideComponent } from "./template/aside/aside.component";
import { CategoriasComponent } from "./view/categorias/categorias.component";
import { ProductosComponent } from "./view/productos/productos.component";
import { UsuariosComponent } from "./view/usuarios/usuarios.component";
import { DashboardComponent } from "./view/dashboard/dashboard.component";
import { HeaderComponent } from "./template/header/header.component";
import { FooterComponent } from "./template/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    CategoriasComponent,
    ProductosComponent,
    UsuariosComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
