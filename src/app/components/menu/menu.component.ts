import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes= [
    {
      "icon": "mail", 
      "name": "Mi Perfil",
      "url": "/perfil"
    },
    {
      "icon": "mail", 
      "name": "Categorias",
      "url": "/categorias"
    },
    {
      "icon": "mail", 
      "name": "Reservas",
      "url": "/reservas"
    },
    {
      "icon": "mail", 
      "name": "Presupuesto",
      "url": "/presupuesto"
    }
  ]

  selectedPath='';

//seleccionar ruta
constructor(private router: Router) {
  this.router.events.subscribe((event:RouterEvent)=> {
    this.selectedPath= event.url;
  })
 }


  ngOnInit() {
  }

}
