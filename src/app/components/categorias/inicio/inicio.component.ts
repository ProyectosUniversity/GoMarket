import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  categorias= [
    {
      "categoria": "Carne",
      "img": "../../../assets/img/carnes.jpg"
    },
    {
      "categoria": "Pescado",
      "img": "../../../assets/img/pescado.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {}

}
