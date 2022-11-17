import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-feed-backs',
    templateUrl: './feed-backs.page.html',
    styleUrls: ['./feed-backs.page.scss'],
})
export class FeedBacksPage implements OnInit {

    constructor(private utils: UtilsService,
                public router: Router,
                private storage: Storage,
                private service: ListService,
                public http: HttpClient) {
    }

    result: any = [];
    reviewsList: any = [];
    data: Observable<any>;
    user: any;

    async ngOnInit() {

        this.user = JSON.parse(localStorage.getItem('user'));
        const id = this.user.id;

        await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/feedbacks/findByDonner/${id}`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.reviewsList = response.body;
                this.result = this.reviewsList.content;
                localStorage.removeItem('reviewsList');
                localStorage.setItem('reviewsList', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            console.log('error', error);
        });
    }
}
