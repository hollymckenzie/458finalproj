import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Nav, Platform } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToOtherPage(){
    this.navCtrl.push(ListPage);
  }
  

}
