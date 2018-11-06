import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note/note.model';
import { NoteListService } from '../../services/note-list.service';
import firebase from 'firebase/app'
/**
 * Generated class for the AllCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-category',
  templateUrl: 'all-category.html',
  // template: `<ion-card-content *ngFor="let m in allMovies">
  //     {{m.title}}
  // </ion-card-content>`
})
export class AllCategoryPage {

  // note: Note = {
  //   title: 'hint 1',
  //   content: ''
  // };

  public allMovies = new Array();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private noteListService: NoteListService) {
      
      var ref = firebase.database().ref('/genres/');
      ref.once('value', (resp)  => {
        let snapshot = resp.val();
        this.allMovies.push(snapshot);
        console.log(snapshot);
        console.log(this.allMovies);
      })    
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
