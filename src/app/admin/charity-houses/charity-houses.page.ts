import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-charity-houses',
    templateUrl: './charity-houses.page.html',
    styleUrls: ['./charity-houses.page.scss'],
})
export class CharityHousesPage implements OnInit {

    constructor(private utils: UtilsService,
                public router: Router,
                public http: HttpClient,
                private service: ListService) {
    }

    result: any = [];
    data: Observable<any>;
    t;

    loadData() {
        this.result = JSON.parse(localStorage.getItem('charity houses'));
    }

    ngOnInit(): void {
        const url = this.service.homeUrl + '/charityHouses/list';
        this.utils.presentLoading("Please wait...");
        this.http.get(url, {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                this.result = this.t.content;
                localStorage.removeItem('charity Houses');
                localStorage.setItem('charity Houses', JSON.stringify(this.t.content));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
            console.log('error', error);
        });
    }

    showSingleItem(item: any) {
        const url = `show-single-charity-house/${item}`;
        this.router.navigateByUrl(url);
    }

    updateItem(id: any) {
        const url = `update-charity-house/${id}`;
        this.router.navigateByUrl(url);
    }

    deleteCharityHouse(item: any) {
        // this.callAPI(item).subscribe(
        //     data => {
        //       console.log('I got this response -> ', data);
        //       // this.router.navigate(['donners']);
        //     },
        //     error => {
        //       console.log('error', error);
        //     }
        // );
        this.utils.presentAlert('Can\'t delete. Please! contact with supper admin using samraseerat786@gmail.com');
        this.router.navigate(['tabs/charity-houses']);
    }
}
