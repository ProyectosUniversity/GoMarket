import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AutenticacionService } from './services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Categorias',
      url: '/folder/Categorias',
      icon: 'mail'
    },
    {
      title: 'Reservas',
      url: '/folder/Reservas',
      icon: 'paper-plane'
    },
    {
      title: 'Lista de Compras',
      url: '/folder/Lista de Compras',
      icon: 'heart'
    },
    {
      title: 'Mi Perfil',
      url: '/folder/Mi Perfil',
      icon: 'heart'
    },
    {
      title: 'Cerrar Sesion',
      url: '/login',
      icon: 'log-out'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.autenticacionService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['prueba']);
        } else {
          this.router.navigate(['login']);
        }
      });

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
