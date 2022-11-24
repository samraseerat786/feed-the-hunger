import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-open-admin-chat',
    templateUrl: './open-admin-chat.page.html',
    styleUrls: ['./open-admin-chat.page.scss'],
})
export class OpenAdminChatPage implements OnInit {

    messages = [];
    recivedData = [];
    currentUser;
    user;
    channel;
    channelName;
    newMsg: '';
    objectOfChannel;
    // charityHouse;
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;

    constructor(private utils: UtilsService,
                public route: ActivatedRoute,
                public http: HttpClient,
                private service: ListService,
                public db: AngularFireDatabase) {
        this.loadUserName();
        this.loadData();
    }

    ngOnInit() {
    }

    loadUserName() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user.first_name.toLowerCase() + ' ' + this.user.user.last_name.toLowerCase();
        this.channel = this.user.user.user_name + '-admin';
    }

    async loadData() {
        await this.utils.presentLoading("Please wait...");
        this.db.list(`/channels/${this.channel}`).valueChanges().subscribe(data => {
            this.utils.stopLoading();
            this.recivedData = data;
            this.messages = data;
        });
    }

    sendMessage() {
        const url = `${this.service.homeUrl}/channels/exist-or-not/${this.channel}`;
        this.http.post(url, 1).subscribe(data => {
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
