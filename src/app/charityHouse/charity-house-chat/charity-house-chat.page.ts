import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute} from '@angular/router';
import {IonContent} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-charity-house-chat',
    templateUrl: './charity-house-chat.page.html',
    styleUrls: ['./charity-house-chat.page.scss'],
})
export class CharityHouseChatPage implements OnInit {
    messages = [];
    recivedData = [];
    currentUser;
    user;
    channel;
    newMsg: '';
    channelName;
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;

    constructor(private utils: UtilsService,
                public route: ActivatedRoute,
                public http: HttpClient,
                private service: ListService,
                public db: AngularFireDatabase) {
        this.loadchannelName();
        this.utils.presentLoading("Please wait...");
        this.db.list(`/channels/${this.channel}`).valueChanges().subscribe(data => {
            this.utils.stopLoading();
            this.recivedData = data;
            this.messages = data;
        });
        this.utils.stopLoading();
    }

    ngOnInit() {
    }

    loadchannelName() {
        const donner = JSON.parse(localStorage.getItem('donnerName'));
        this.user = JSON.parse(localStorage.getItem('user'));
        // this.currentUser = this.user.user.first_name.toLowerCase() + ' ' + this.user.user.last_name.toLowerCase();
        this.currentUser = this.user.user.user_name.toLowerCase(); // + ' ' + this.user.user.last_name.toLowerCase();
        this.channel = donner + '-' + this.user.user.first_name.toLowerCase() + '-' + this.user.user.last_name.toLowerCase();
    }

    sendMessage() {
        const url = `${this.service.homeUrl}/channels/exist-or-not/${this.channel}`;
        this.utils.presentLoading("Please wait...");
        this.http.post(url, 1).subscribe(data => {
            this.utils.stopLoading();
        },
        error => {
            this.utils.stopLoading();
            console.log('error', error);
        });
        this.db.list(`/channels/${this.channel}`).push({
            sender: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime()
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(10);
        });
    }
}
