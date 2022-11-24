import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ChatPage} from './chat.page';
import {AutosizeModule} from 'ngx-autosize';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirestoreModule} from '@angular/fire/firestore';

const routes: Routes = [
    {
        path: '',
        component: ChatPage
    }
];
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
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AutosizeModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ChatPage]
})
export class ChatPageModule {
}
