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
    itration = [1, 2, 3, 4];

    async ngOnInit() {
        await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/donners/list`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.donnerList = response.body;
                this.result = this.donnerList.content;
                localStorage.removeItem('donners');
                localStorage.setItem('donners', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
            console.log('error', error);
        });
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
