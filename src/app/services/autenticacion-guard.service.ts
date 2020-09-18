
import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuardService implements CanActivate {

  constructor(public autenticar: AutenticacionService) {}
 
  canActivate(): boolean {
    return this.autenticar.estaAutenticado();
  }

}
