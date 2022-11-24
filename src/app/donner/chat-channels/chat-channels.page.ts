import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-chat-channels',
    templateUrl: './chat-channels.page.html',
    styleUrls: ['./chat-channels.page.scss'],
})
export class ChatChannelsPage implements OnInit {
    channels = [];
    currentUser;
    recivedData;
    compareUser;

    constructor(private utils: UtilsService,
                public db: AngularFireDatabase,
                public router: Router,
                public http: HttpClient,
                private service: ListService) {
        this.loadUser();
        this.loadData();
    }

    ngOnInit() {
        this.loadUser();
    }

    loadUser() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.compareUser = this.currentUser.user.first_name.toLowerCase() + '-' + this.currentUser.user.last_name.toLowerCase();
    }

    async loadData() {
        await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/channels/list/${this.compareUser}`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.recivedData = response.body;
                this.channels = this.recivedData;
            }
        }, (error) => {
            this.utils.stopLoading();
        });
    }

    openChat(item: any) {
        localStorage.setItem('channelName', JSON.stringify(item));
        this.router.navigate(['donner-chat']);
    }

    changeValue(channelName: any) {
        const trimString = channelName.replace(this.currentUser.user.first_name.toLowerCase(), '')
            .replace(this.currentUser.user.last_name.toLowerCase(), '')
            .split('-').join(' ');
        return trimString;
    }
}
