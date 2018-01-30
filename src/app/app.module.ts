import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MiproviderProvider } from '../providers/miprovider/miprovider';
import { TabProvider } from '../providers/tab/tab'; 
import { Facebook } from '@ionic-native/facebook'; 
import firebase from 'firebase';
import {RegistroPageModule} from '../pages/registro/registro.module';
import { BuscadorPageModule } from '../pages/buscador/buscador.module';

firebase.initializeApp({
  apiKey: "AIzaSyCxx1PJ721QsDg77kzWRC7_6gWyU8TQEGs",
  authDomain: "barboapp-1f149.firebaseapp.com",
  databaseURL: "https://barboapp-1f149.firebaseio.com",
  projectId: "barboapp-1f149",
  storageBucket: "",
  messagingSenderId: "640256519206"
  });
@NgModule({
  declarations: [
    MyApp,
    HomePage  
  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegistroPageModule,
    BuscadorPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MiproviderProvider,
    TabProvider,
    Facebook
  ]
})
export class AppModule {}
