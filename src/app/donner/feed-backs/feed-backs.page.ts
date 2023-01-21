import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";
import {AlertController} from "@ionic/angular";

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
                public alertCtrl: AlertController,
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
                this.result.sort((a,b) => {
                    var c = new Date(a.date);
                    var d = new Date(b.date);
                    return d.getTime() - c.getTime();
                });
                localStorage.removeItem('reviewsList');
                localStorage.setItem('reviewsList', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            console.log('error', error);
        });
    }

    async deleteFeedback(id: any) {
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: "Are you sure you want to delete the feedback?",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'primary',
                    handler: () => {
                        this.removeFeedback(id);
                    }
                }
            ]
        });
        alert.present();
    }
    async removeFeedback(id){
        this.utils.presentLoading("Please wait...");
        this.deleteHttpReq(id).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert("Feedback deleted successfully.");
                this.result.splice(this.result.findIndex((i) => {
                    return i.id === id;
                }), 1);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    deleteHttpReq(id): Observable<any> {
        const url = `${this.service.homeUrl}/feedbacks/deleteFeedback/${id}`;
        const test = this.http.delete(url);
        return test;
    }
}
