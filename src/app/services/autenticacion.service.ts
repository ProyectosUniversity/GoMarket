import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.verificarToken();
    });
  }

  verificarToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decodicifar = this.helper.decodeToken(token);
        let estaExpirado = this.helper.isTokenExpired(token);
 
        if (!estaExpirado) {
          this.user = decodicifar;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }
  //Registro
  registro(credenciales) {
    return this.http.post(`${this.url}/api/registro`, credenciales).pipe(
      catchError(e => {
        this.mostrarAlerta(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credenciales) {
    return this.http.post(`${this.url}/api/login`, credenciales)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.mostrarAlerta(e.error.msg);
          throw new Error(e);
        })
      );
  }
  //Cerrar Sesion
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
  //Obetener Información
  getSpecialData() {
    return this.http.get(`${this.url}/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.mostrarAlerta('No tienes autorización.');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  estaAutenticado() {
    return this.authenticationState.value;
  }
 
  mostrarAlerta(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
