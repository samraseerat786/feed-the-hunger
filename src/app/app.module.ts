import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import {AutosizeModule} from 'ngx-autosize';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';
const firebaseConfig = {
    apiKey: 'AIzaSyCtHKb-EFeAK4vH317pp5zsYlZvc05rKIk',
    authDomain: 'feed-the-hunger-4771e.firebaseapp.com',
    databaseURL: 'https://feed-the-hunger-4771e-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'feed-the-hunger-4771e',
    storageBucket: 'feed-the-hunger-4771e.appspot.com',
    messagingSenderId: '45623475797',
    appId: '1:45623475797:web:2aa4f517132890811d9edc',
    measurementId: 'G-BVZYLNGE56'
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        AutosizeModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
  providers: [
    StatusBar, FCM,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
