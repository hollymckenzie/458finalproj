import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DramaCategoryPage } from './drama-category';

@NgModule({
  declarations: [
    DramaCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DramaCategoryPage),
  ],
})
export class DramaCategoryPageModule {}
