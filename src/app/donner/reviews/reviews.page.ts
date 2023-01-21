import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from "../../services/utils.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor(private utils: UtilsService,
    public router: Router,
    private storage: Storage,
    private service: ListService,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public db: AngularFireStorage) { }

    result: any = [];
    reviewsList: any = [];
    temp: boolean;
    user: any;
    role: any;
    donner: boolean;
    isEmpty = false;

  async ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
        const id = this.user.id;

        await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/reviews/findByDonner/${id}`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.reviewsList = response.body;
                this.result = this.reviewsList.content;
                if (this.result.length === 0) {
                    this.isEmpty = true;
                } else {
                    this.result.sort((a,b) => {
                        var c = new Date(a.date);
                        var d = new Date(b.date);
                        return d.getTime() - c.getTime();
                    });
                }
                localStorage.removeItem('reviewsList');
                localStorage.setItem('reviewsList', JSON.stringify(this.result));
                console.log('reviewsList : ', this.reviewsList.content);
            }
        }, (error) => {
            this.utils.stopLoading();
            console.log('error', error);
        });
  }

    async deleteReview(id: any) {
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: "Are you sure you want to delete the review?",
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
                        this.removeReview(id);
                    }
                }
            ]
        });
        alert.present();
    }
    async removeReview(id){
        this.utils.presentLoading("Please wait...");
        this.deleteHttpReq(id).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert("Review deleted successfully.");
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
        const url = `${this.service.homeUrl}/reviews/deleteReview/${id}`;
        const test = this.http.delete(url);
        return test;
    }
}
