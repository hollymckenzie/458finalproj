import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RomcomCategoryPage } from './romcom-category';

@NgModule({
  declarations: [
    RomcomCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(RomcomCategoryPage),
  ],
})
export class RomcomCategoryPageModule {}
