import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings-provider/settings-provider';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  

  difficulty = 0;
  // 0 = easy
  // 1 = medium
  // 2 = hard

  constructor (public alertCtrl: AlertController, public settingsProv: SettingsProvider){
   
  }


  showAlertEasy() {
    const alert = this.alertCtrl.create({
      title: 'Easy',
      subTitle: 'This difficulty will give you 5 hints.',
      buttons: ['OK']
    });
    alert.present();
    this.difficulty = 0;
    this.settingsProv.setSettingsDifficulty(this.difficulty);
    console.log(this.difficulty);

  }

  showAlertMed() {
    const alert = this.alertCtrl.create({
      title: 'Medium',
      subTitle: 'This difficulty will give you 4 hints.',
      buttons: ['OK']
    });
    alert.present();
    this.difficulty = 1;
    this.settingsProv.setSettingsDifficulty(this.difficulty);
    console.log(this.difficulty);

  }

  showAlertHard() {
    const alert = this.alertCtrl.create({
      title: 'Hard',
      subTitle: 'This difficulty will give you 3 hints.',
      buttons: ['OK']
    });
    alert.present();
    this.difficulty = 2;
    this.settingsProv.setSettingsDifficulty(this.difficulty);
    console.log(this.difficulty);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    //console.log(this.difficulty);


  }

}


