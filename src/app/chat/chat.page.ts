import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {IonContent} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {UtilsService} from "../services/utils.service";
@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
messages = [];

    items: Observable<any[]>;
    currentUser = '';
    newMsg = '';
    s;
    role;
    user;
    donnerName;
    recivedData = [];
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;
    constructor(private utils: UtilsService,
                public db: AngularFireDatabase,
                private route: ActivatedRoute,
                private firestore: AngularFirestore) {
        this.utils.presentLoading("Please wait...");
        this.s = this.db.list('/messages').valueChanges().subscribe( data => {
            this.utils.stopLoading();
            this.recivedData = data;
            this.messages = this.recivedData.filter(x => x.user === this.donnerName || x.user === this.currentUser);
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.donnerName = paramMap.get('donnerName');
            this.loadUser();
        });
    }

    loadUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.role = localStorage.getItem('role');
    }

    sendMessage() {
        this.db.list('/messages').push({
            user: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(10);
        });
    }
}
