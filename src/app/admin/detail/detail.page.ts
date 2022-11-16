import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private service: ListService,
                private http: HttpClient,
                private router: Router
    ) {
    }

    result: any = [];
    data: Observable<any>;
    user;

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            const val = paramMap.get('id');
            const url  = `${this.service.homeUrl}/donners/findById/${val}`;
            this.utils.presentLoading("Please wait...");
            this.data =  this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
            });
        });
    }

    contactDonner(contactNumber: any) {
        this.utils.presentAlert('You can contact with owner via <b>' + contactNumber + ' </b>.');
    }

    loadReports(id: any) {
        const url = `reports/${id}`;
        this.router.navigateByUrl(url);
    }
}
