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
      "img": "../../../assets/img/c-carnes.png"
    },
    {
      "categoria": "Pescado",
      "img": "../../../assets/img/c-frutas.png"
    },
    {
      "categoria": "Lacteos",
      "img": "../../../assets/img/c-lacteos.png"
    },
    {
      "categoria": "Lacteos",
      "img": "../../../assets/img/c-pescados.png"
    },
    {
      "categoria": "Lacteos",
      "img": "../../../assets/img/c-limpieza.png"
    }
  ]

  constructor() { }

  ngOnInit() {}

}
