import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassicsCategoryPage } from './classics-category';

@NgModule({
  declarations: [
    ClassicsCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassicsCategoryPage),
  ],
})
export class ClassicsCategoryPageModule {}
