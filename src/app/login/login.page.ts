import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
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
      // Call Login to automatically login the new user
      this.autenticacionService.login(this.credentialsForm.value).subscribe();
    });
  }

}
