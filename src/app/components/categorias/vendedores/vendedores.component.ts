import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss'],
})
export class VendedoresComponent implements OnInit {

  puestos= [
    {
      "img": "../../../assets/img/carnes.jpg",
      "puesto": "Carne"
    },
    {
      "img": "../../../assets/img/pescado.jpg",
      "puesto": "Pescado"
      
    }
  ]
  constructor() { }

  ngOnInit() {}

}
