import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {IonContent} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-donner-chat',
    templateUrl: './donner-chat.page.html',
    styleUrls: ['./donner-chat.page.scss'],
})
export class DonnerChatPage implements OnInit {

    messages = [];
    recivedData = [];
    currentUser;
    user;
    channel;
    channelName;
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
        this.channel = JSON.parse(localStorage.getItem('channelName'));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user.user_name.toLowerCase(); // + ' ' + this.user.user.last_name.toLowerCase();
        console.log('current user', this.currentUser);
    }

    async loadData(){
        await this.utils.presentLoading("Please wait...");
        this.db.list(`/channels/${this.channel}`).valueChanges().subscribe(data => {
            this.utils.stopLoading();
            this.recivedData = data;
            this.messages = data;
        });
        this.utils.stopLoading();
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
