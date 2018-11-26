
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder,
		private afAuth: AngularFireAuth,
		public alertCtrl: AlertController
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}
	login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
	}

	
signup(){
	this.navCtrl.push(SignupPage);
  }

  loginWithGoogle() {
	this.auth.signInWithGoogle()
	  .then(
		() => this.navCtrl.setRoot(HomePage),
		error => console.log(error.message)
	  );
	}
	alert(message: string) {
    this.alertCtrl.create({
      title: 'Success!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


	showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Password Reset',
      message: "Enter email to recieve link to reset password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue',
          handler: data => {
						this.resetPassword(data.getText().toString().trim());
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
	}
	
	async resetPassword(email:string){
		const result = await this.afAuth.auth.sendPasswordResetEmail(email);
		this.alert("A password reset e-mail has been sent to you.");
    console.log('Sent Password Reset Email');
	}
}