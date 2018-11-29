import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings-provider/settings-provider';

/**
 * Generated class for the RomcomCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-romcom-category',
  templateUrl: 'romcom-category.html',
})
export class RomcomCategoryPage {
  difficulty: number = 0;

  constructor(public settingsProv: SettingsProvider, public navCtrl: NavController, public navParams: NavParams) {
    let diff = this.settingsProv.getSettingsDifficulty();
    if (diff) this.difficulty = diff;
    console.log(this.difficulty);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RomcomCategoryPage');
  }

}
