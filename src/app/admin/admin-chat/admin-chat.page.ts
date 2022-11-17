import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-admin-chat',
    templateUrl: './admin-chat.page.html',
    styleUrls: ['./admin-chat.page.scss'],
})
export class AdminChatPage implements OnInit {
    messages = [];
    recivedData = [];
    currentUser;
    user;
    channel;
    username;
    newMsg: '';
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;

    constructor(private utils: UtilsService,
                public route: ActivatedRoute,
                public http: HttpClient,
                private service: ListService,
                public db: AngularFireDatabase) {
        this.loadchannelName();
        this.loadData();
    }

    ngOnInit() {
    }

    loadchannelName() {
        this.username = JSON.parse(localStorage.getItem('chatUsername'));
        this.channel = this.username + '-admin';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user_name.toLowerCase();
    }

    async loadData(){
        await this.utils.presentLoading("Please wait...");
        this.db.list(`/channels/${this.channel}`).valueChanges().subscribe(data => {
            this.utils.stopLoading();
            this.recivedData = data;
            this.messages = data;
        });
    }

    sendMessage() {
        const url = `${this.service.homeUrl}/channels/exist-or-not/${this.channel}`;
        this.http.post(url, 1).subscribe(
            data => {
                console.log('I got this response -> ', data);
            },
            error => {
                console.log('error', error);
            });
        this.db.list(`/channels/${this.channel}`).push({
            sender: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(10);
        });
    }
}
