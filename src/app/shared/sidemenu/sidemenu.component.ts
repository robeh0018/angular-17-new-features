import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    // Esto devuelve un array con todos los valores de array anidades en el mismo nivel.
    .flat()
    .filter(route => route && route.path && !route.path.includes(':'))
    // .filter(route => !route.path?.includes(':'));


  constructor() {
  }
}
