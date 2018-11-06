import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//import { TestPage } from '../test/test';
import { ActionCategoryPage } from '../action-category/action-category';
import { AllCategoryPage } from '../all-category/all-category';
import { ClassicsCategoryPage } from '../classics-category/classics-category';
import { DramaCategoryPage } from '../drama-category/drama-category';
import { HorrorCategoryPage } from '../horror-category/horror-category';
import { RomcomCategoryPage } from '../romcom-category/romcom-category';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;
  title: string[];

  rootPage: any = ListPage;
  pages: Array<{title: string, icon: string,component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.pages = [
      {title: 'All', icon: 'shuffle', component: AllCategoryPage},
      {title: 'Classics/Academy Award Winners', icon: 'ribbon', component: ClassicsCategoryPage},
      {title: 'Action', icon: 'jet', component: ActionCategoryPage},
      {title: 'Horror/Thriller', icon: 'moon', component: HorrorCategoryPage},
      {title: 'Romance/Comedy', icon: 'heart-outline', component: RomcomCategoryPage},
      {title: 'Drama', icon: 'medkit', component: DramaCategoryPage}
    ];

    // Let's populate this page with some filler content for funzies
    // this.icons = ['', 'shuffle', 'ribbon', 'jet', 'moon'/*'alert'*/, 'heart-outline',
    // 'medkit'];
    // this.title = ['', 'All', 'Classics/Academy Award Winners', 'Action', 'Horror/Thriller', 'Romance/Comedy', 'Drama'];
    // this.items = [];
    //  for (let i = 1; i < 7; i++) {
    //   this.items.push({
    //     title: this.title[i],
    //     //note: 'This is item #' + i,
    //     icon: this.icons[i]
    //   });
    // } 
  }

  openPage(page){
    this.navCtrl.setRoot(page.component)
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
