import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note/note.model';
import { NoteListService } from '../../services/note-list.service';
import firebase from 'firebase/app';
/**
 * Generated class for the AllCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//import { difficulty } from '../settings/settings';
//import { SettingsPage } from '../settings/settings';
import { SettingsProvider } from '../../providers/settings-provider/settings-provider';



@IonicPage()
@Component({
  selector: 'page-all-category',
  templateUrl: 'all-category.html',
  // template: `<ion-card-content *ngFor="let m in allMovies">
  //     {{m.title}}
  // </ion-card-content>`
})
export class AllCategoryPage {

  public allMovies = new Array();
  public settings: any;
  difficulty: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsProv: SettingsProvider, private alertCtrl: AlertController, private noteListService: NoteListService) {
      //this.settings = SettingsPage;
      //this.difficulty = this.settings.getDifficulty();
      var ref = firebase.database().ref('/genres/');
      ref.once('value', (resp)  => {
        let snapshot = resp.val();
        this.allMovies.push(snapshot);
        console.log(snapshot);
        console.log(this.allMovies);
      });
      let diff = this.settingsProv.getSettingsDifficulty();
      if (diff) this.difficulty = diff;
      console.log(this.difficulty);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AllCategoryPage');
    // this.note = this.navParams.get('note');
  }

  updateNote(note: Note){
    this.noteListService.updateNote(note).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Disclaimer',
      subTitle: 'When guess is submitted, it will display icons based on correctness',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  


}
