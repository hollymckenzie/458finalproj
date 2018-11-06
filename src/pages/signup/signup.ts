import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AuthService } from '../../services/auth.service';


// @NgModule({ imports: [NgxErrorsModule] })

@IonicPage()
@Component({
	selector: 'as-page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {
	loginForm: FormGroup;
	signupError: string;

	constructor(
		fb: FormBuilder,
    private navCtrl: NavController, 
    private auth: AuthService
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  
signup() {
  let data = this.loginForm.value;
  if(!data.email){
    return;
  }
  let credentials = {
    email: data.email,
    password: data.password
  };
  this.auth.signUp(credentials).then(
    () => this.navCtrl.setRoot(HomePage),
    error => this.signupError = error.message
  );
}
}