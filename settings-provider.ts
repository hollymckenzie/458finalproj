import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the DatabaseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  public difficulty: number = 0;
  constructor() {
    console.log('Hello Settings Provider');
  }

  public setSettingsDifficulty(difficulty: any){
      if (difficulty) {
          this.difficulty = difficulty;
      }
  }

  public getSettingsDifficulty(){
      return this.difficulty;
  }

}
