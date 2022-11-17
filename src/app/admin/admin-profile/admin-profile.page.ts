import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-admin-profile',
    templateUrl: './admin-profile.page.html',
    styleUrls: ['./admin-profile.page.scss'],
})
export class AdminProfilePage implements OnInit {

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private router: Router,
                private http: HttpClient,
                private service: ListService) {
    }

    user;
    data;
    ngOnInit() {
        this.route.paramMap.subscribe(async paramMap => {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/users/getUser/${val}`;
            await this.utils.presentLoading("Please wait...");
            this.data = this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
            });
        });
    }

    updateProfile() {
        this.router.navigate(['/edit-profile', this.user]);
    }
}
