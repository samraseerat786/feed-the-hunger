import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-reports',
    templateUrl: './reports.page.html',
    styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

    constructor(private utils: UtilsService,
                public router: Router,
                private route: ActivatedRoute,
                private storage: Storage,
                private service: ListService,
                public http: HttpClient) {
    }

    user;
    donner: boolean;
    id;
    reportList: any = [];
    result: any = [];
    admin: boolean;
    data: Observable<any>;
    donnerID;
    isEmpty = false;

    ngOnInit() {

        this.route.paramMap.subscribe(paramMap => {
            this.donnerID = paramMap.get('id');
        });

        this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/reports/findByDonner/${this.donnerID}`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.reportList = response.body;
                this.result = this.reportList.content;
                if (this.result.length === 0) {
                    this.isEmpty = true;
                }
                localStorage.removeItem('reportList');
                localStorage.setItem('reportList', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            console.log('error', error);
        });
        this.loadData();
    }

    loadData() {
        // this.result = JSON.parse(localStorage.getItem('user'));
        this.user = localStorage.getItem('role');
        if (this.user === 'donner') {
            this.donner = true;
        }
        if (this.user === 'admin') {
            this.admin = true;
        }
    }

    loadDonnerList() {
        if (this.admin) {
            this.router.navigate(['/tabs']);
        } else {
            this.router.navigate(['/profile']);
        }
    }
}
