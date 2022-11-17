import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services/list.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PopoverController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {UtilsService} from "../../services/utils.service";
import {utils} from "protractor";

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    t;
    constructor(private utils: UtilsService,
                public router: Router,
                private storage: Storage,
                public http: HttpClient,
                private service: ListService,
                public popoverController: PopoverController) {
    }
    result: any = [];
    data: Observable<any>;
    donnerActive: any;
    charityHouseActive = true;

    loadData() {
        this.result = JSON.parse(localStorage.getItem('users'));
    }

    async ngOnInit() {
        const url = this.service.homeUrl + '/users/list';
        await this.utils.presentLoading("Please wait...");
        this.http.get(url, {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                this.result = this.t.content;
                localStorage.removeItem('users');
                localStorage.setItem('users', JSON.stringify(this.t.content));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
            console.log('error', error);
        });
    }

    addUser() {
        this.router.navigate(['addUser']);
    }

    activateDonner() {
        this.donnerActive = true;
        this.charityHouseActive = false;
    }

    activateCharityHouse() {
        this.donnerActive = false;
        this.charityHouseActive = true;
    }
}
