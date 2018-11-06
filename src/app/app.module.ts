import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { ActionCategoryPage } from '../pages/action-category/action-category';
import { AllCategoryPage } from '../pages/all-category/all-category';
import { ClassicsCategoryPage } from '../pages/classics-category/classics-category';
import { DramaCategoryPage } from '../pages/drama-category/drama-category';
import { HorrorCategoryPage } from '../pages/horror-category/horror-category';
import { RomcomCategoryPage } from '../pages/romcom-category/romcom-category';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';

import { NoteListService } from '../services/note-list.service';

  // Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBS3n_29KNoUevn7BeUjq7SmZESxqgjTh0",
    authDomain: "project-dc696.firebaseapp.com",
    databaseURL: "https://project-dc696.firebaseio.com",
    projectId: "project-dc696",
    storageBucket: "project-dc696.appspot.com",
    messagingSenderId: "9305725865"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    AboutPage,
    ActionCategoryPage,
    AllCategoryPage,
    ClassicsCategoryPage,
    DramaCategoryPage,
    HorrorCategoryPage,
    RomcomCategoryPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig.fire),
    NgxErrorsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    AboutPage,
    ActionCategoryPage,
    AllCategoryPage,
    ClassicsCategoryPage,
    DramaCategoryPage,
    HorrorCategoryPage,
    RomcomCategoryPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth,
    AngularFireModule,
    // DatabaseserviceProvider,
    NoteListService

  ]
})
export class AppModule {}

