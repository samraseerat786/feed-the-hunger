import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PopoverController} from '@ionic/angular';
import {ReviewComponent} from './review/review.component';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-donner-list',
    templateUrl: './donner-list.page.html',
    styleUrls: ['./donner-list.page.scss'],
})
export class DonnerListPage implements OnInit {
    donnerList;

    constructor(private utils: UtilsService,
                public router: Router,
                public popoverController: PopoverController,
                private storage: Storage,
                private service: ListService,
                public http: HttpClient) {
    }

    result: any = [];
    data: Observable<any>;
    // activeStars = [1, 2, 3, 4];
    // inActiveStars = [1, 2, 3, 4, 5];
    allInActiveStars = [1, 2, 3, 4, 5];


    async ngOnInit() {
        await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/donners/list`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.donnerList = response.body;
                for (let i = 0; i < this.donnerList.length; i++) {
                    let donor = this.donnerList[i].donor;
                    donor['rating'] = this.donnerList[i].rating.toFixed(1);
                    donor['inActiveStars'] = this.createArrayByNumber(5 - parseInt(donor.rating));
                    donor['activeStars'] = this.createArrayByNumber(parseInt(donor.rating));
                    if (donor.rating % 1 == 0) {
                        donor['isHelfStar'] = false;
                    } else {
                        donor['isHelfStar'] = true;
                        donor.inActiveStars.splice(-1);
                    }
                    console.log(donor);
                    this.result.push(donor);
                }
                localStorage.removeItem('donners');
                localStorage.setItem('donners', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
            console.log('error', error);
        });
    }

    createArrayByNumber(num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        return arr;
    }

    loadData() {
        this.result = JSON.parse(localStorage.getItem('donners'));
    }

    async review(myEvent, item: any) {
        const review = await this.popoverController.create({
            component: ReviewComponent,
            componentProps: {id: item.id}
        });
        return await review.present();
    }

    feedBack(item: any) {
        // const url = `feedback/${item.id}`;
        this.router.navigate(['feedback', item]);
    }

    active($event: MouseEvent) {

    }

    openChat(first: string, last: string) {
        localStorage.setItem('donnerName', JSON.stringify(first.toLowerCase() + '-' + last.toLowerCase()));
        this.router.navigate(['charity-house-chat']);
    }

    sendReport(item: any) {
        this.router.navigate(['send-report', item]);
    }
}
