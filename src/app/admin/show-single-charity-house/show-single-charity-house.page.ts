import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-show-single-charity-house',
    templateUrl: './show-single-charity-house.page.html',
    styleUrls: ['./show-single-charity-house.page.scss'],
})
export class ShowSingleCharityHousePage implements OnInit {
    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private service: ListService,
                private http: HttpClient) {
    }

    result: any = [];
    data: Observable<any>;
    user;

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/charityHouses/getCharityHouse/${val}`;
            this.utils.presentLoading("Please wait...");
            this.data = this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
            });
        });
    }

    contactDealer(contactNumber: any) {
        this.utils.presentAlert('You can contact with owner via <b>' + contactNumber + '</b>.');
    }
}
