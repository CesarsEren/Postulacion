import { Component, OnInit } from "@angular/core";
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  title:String = "Dashboard";
  constructor(private db:CategoriasService) {}

  ngOnInit() {}
}
