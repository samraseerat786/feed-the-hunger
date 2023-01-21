import {Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ListService} from '../../../services/list.service';
import {UtilsService} from "../../../services/utils.service";

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

    constructor(private utils: UtilsService,
                private popoverController: PopoverController,
                private navParams: NavParams,
                private router: Router,
                private http: HttpClient,
                private service: ListService,
                private formBuilder: FormBuilder) {
    }

    id;
    c1 = '';
    c2 = '';
    c3 = '';
    c4 = '';
    c5 = '';
    n1 = 'star-outline';
    n2 = 'star-outline';
    n3 = 'star-outline';
    n4 = 'star-outline';
    n5 = 'star-outline';
    star: number;
    finalReviewObject;
    donnerID;
    reviewForm: FormGroup;

    ngOnInit() {
        this.id = this.navParams.data.id;
        console.log('id ' + this.id);
        this.donnerID = this.id;
        this.formInitializer();
    }

    formInitializer() {
        this.reviewForm = this.formBuilder.group({
            stars: [this.star, Validators.compose([Validators.required])],
            title: [null, [Validators.required]]
        });
    }

    clickFirst(item: any) {
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.n1 = 'star';
    }

    clickSecond(item: any) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
    }

    clickThird(item: any) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
    }

    clickForth(item: any) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.c4 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
        this.n4 = 'star';
    }

    clickFifth(item: any) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.c4 = 'primary';
        this.c5 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
        this.n4 = 'star';
        this.n5 = 'star';
    }

    async addReview() {
        const test = this.reviewForm.value;
        const charityHouse = JSON.parse(localStorage.getItem('user'));
        const charityID = charityHouse.id;
        let today = this.dateToString(new Date);
        this.finalReviewObject = '{"star": ' + this.star + ',' +
            '"title": "' + test.title + '",' +
            '"date": "' + today + '",' +
            '"donner": { "id": ' + this.donnerID + '},' +
            '"charityHouse": { "id": ' + charityID + '}' + '}';
        const review = JSON.parse(this.finalReviewObject);
        await this.utils.presentLoading("Please wait...");
        await this.popoverController.dismiss();
        this.saveReview(review).subscribe(data => {
                this.utils.stopLoading();
                this.router.navigate(['donner-list']);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    saveReview(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/reviews/newReview`;
        return this.http.post(url, dataObj);
    }

    dateToString(today) {
        let dateFormat = "";
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let hour = today.getHours();
        let mint = today.getMinutes();
        let second = today.getSeconds();
        dateFormat = `${year}-${month}-${day} ${hour}:${mint}:${second}`;
        return dateFormat;
    }
}
