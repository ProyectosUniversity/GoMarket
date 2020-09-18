import { AutenticacionService } from './../services/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor(private autenticacionService: AutenticacionService) { }
 

  ngOnInit() {
  }

  logout() {
    this.autenticacionService.logout();
  }

}
