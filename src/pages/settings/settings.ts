import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  constructor (public alertCtrl: AlertController){ }

  // showConfirmEasy() {
  //   const confirm = this.alertCtrl.create({
  //     title: 'Easy',
  //     message: 'This difficulty will give you 5 hints. Do you wish to continue?',
  //     buttons: [
  //       {
  //         text: 'Agree',
  //         handler: () => {
  //           console.log('Agree clicked');
  //         }
  //       },
  //       {
  //         text: 'Disagree',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  // showConfirmMed() {
  //   const confirm = this.alertCtrl.create({
  //     title: 'Medium',
  //     message: 'This difficulty will give you 4 hints. Do you wish to continue?',
  //     buttons: [
  //       {
  //         text: 'Agree',
  //         handler: () => {
  //           console.log('Agree clicked');
  //         }
  //       },
  //       {
  //         text: 'Disagree',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  // showConfirmHard() {
  //   const confirm = this.alertCtrl.create({
  //     title: 'Hard',
  //     message: 'This difficulty will give you 3 hints. Do you wish to continue?',
  //     buttons: [
  //       {
  //         text: 'Agree',
  //         handler: () => {
  //           console.log('Agree clicked');
  //         }
  //       },
  //       {
  //         text: 'Disagree',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  showAlertEasy() {
    const alert = this.alertCtrl.create({
      title: 'Easy',
      subTitle: 'This difficulty will give you 5 hints.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertMed() {
    const alert = this.alertCtrl.create({
      title: 'Medium',
      subTitle: 'This difficulty will give you 4 hints.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertHard() {
    const alert = this.alertCtrl.create({
      title: 'Hard',
      subTitle: 'This difficulty will give you 3 hints.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
