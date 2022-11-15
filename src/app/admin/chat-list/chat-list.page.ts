import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.page.html',
    styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
    users = [];
    currentUser;
    recivedData;
    compareUser;

    constructor(private utils: UtilsService,
                public db: AngularFireDatabase,
                public router: Router,
                public http: HttpClient,
                private service: ListService) {
        this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/channels/conversation-user-list`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.recivedData = response.body;
                this.users = this.recivedData;
            }
        }, (error) => {
            this.utils.stopLoading();
            console.log('error', error);
        });
    }

    ngOnInit() {
    }

    openChat(item: any) {
        localStorage.setItem('chatUsername', JSON.stringify(item));
        this.router.navigate(['admin-chat']);
    }
}
