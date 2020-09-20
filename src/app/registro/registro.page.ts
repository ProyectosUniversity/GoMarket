import { AutenticacionService } from './../services/autenticacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  credentialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.autenticacionService.login(this.credentialsForm.value).subscribe();
  }
  register() {
    this.autenticacionService.registro(this.credentialsForm.value).subscribe(res => {
      //login automatico luego del registro para ingresar a la interfaz
      this.autenticacionService.login(this.credentialsForm.value).subscribe();
    });
  }
}
