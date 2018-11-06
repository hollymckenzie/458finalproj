import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllCategoryPage } from './all-category';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase/app';

@NgModule({
  declarations: [
    AllCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AllCategoryPage),
  ],
})

// ionViewDidLoad() {
//    const movieRef: firebase.database.Reference = 
//       AngularFireDatabase.database().ref('/movie')
// }
export class AllCategoryPageModule {}
