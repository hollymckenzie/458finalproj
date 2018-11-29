import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings-provider/settings-provider';

/**
 * Generated class for the ClassicsCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classics-category',
  templateUrl: 'classics-category.html',
})
export class ClassicsCategoryPage {

  difficulty: number = 0;

  constructor(public settingsProv: SettingsProvider, public navCtrl: NavController, public navParams: NavParams) {
      let diff = this.settingsProv.getSettingsDifficulty();
      if (diff) this.difficulty = diff;
      console.log(this.difficulty);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassicsCategoryPage');
  }

}
