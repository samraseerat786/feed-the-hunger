import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {Storage} from '@ionic/storage';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-charity-list',
    templateUrl: './charity-list.page.html',
    styleUrls: ['./charity-list.page.scss'],
})
export class CharityListPage implements OnInit {
    loading = true;
    charityList;

    constructor(private utils: UtilsService, public router: Router,
                private storage: Storage,
                private service: ListService,
                public http: HttpClient) {
    }

    result: any = [];
    data: Observable<any>;

    async ngOnInit() {
        await await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/charityHouses/list`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.charityList = response.body;
                this.result = this.charityList.content;
                localStorage.removeItem('charityHouses');
                localStorage.setItem('charityHouses', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
        });
    }

    loadData() {
        this.result = JSON.parse(localStorage.getItem('charityHouses'));
    }

    donateFund(item) {
        this.router.navigate(['donate-fund', item]);
    }

    donateFood(item) {
        this.router.navigate(['donate-food', item]);
    }

    reportNGO(item: any) {
        this.router.navigate(['send-report', item]);
    }
}
