import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import firebase from 'firebase';
import { SettingsProvider } from '../../providers/settings-provider/settings-provider';
/**
 * Generated class for the ActionCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-category',
  templateUrl: 'action-category.html',
})
export class ActionCategoryPage {

  movies: any[];
  difficulty: number = 0;

  constructor(public settingsProv: SettingsProvider, public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    
    var ref = firebase.database().ref('/genres/action/movies');
    ref.once('value', (resp)  => {
      let snapshot = resp.val();

     // this.movies.push(snapshot);
      console.log(snapshot);
      console.log(this.movies);
    })  
    
    let diff = this.settingsProv.getSettingsDifficulty();
    if (diff) this.difficulty = diff;
    console.log(this.difficulty);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionCategoryPage');
  }

}
