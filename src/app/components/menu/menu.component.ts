import { AutenticacionService } from './../../services/autenticacion.service';
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
      "icon": "person", 
      "name": "Mi Perfil",
      "url": "/perfil"
    },
    {
      "icon": "restaurant", 
      "name": "Categorias",
      "url": "/categorias"
    },
    {
      "icon": "cart", 
      "name": "Reservas",
      "url": "/reservas"
    },
    {
      "icon": "pie-chart", 
      "name": "Presupuesto",
      "url": "/presupuesto"
    }
  ]

  selectedPath='';

temaOscuro: boolean=true;
//seleccionar ruta
constructor(private router: Router, private autenticacionService: AutenticacionService) {
  this.router.events.subscribe((event:RouterEvent)=> {
    this.selectedPath= event.url;
  })
 }
 
 //Activar Modo Oscuro
  activarTemOscuro(){
    this.temaOscuro= !this.temaOscuro;
    document.body.classList.toggle('dark');
  }

  //Cerrar Sesion
  cerrarSesion() {
    this.autenticacionService.logout();
  }

  ngOnInit() {
  }

}
