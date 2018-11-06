import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorrorCategoryPage } from './horror-category';

@NgModule({
  declarations: [
    HorrorCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HorrorCategoryPage),
  ],
})
export class HorrorCategoryPageModule {}
