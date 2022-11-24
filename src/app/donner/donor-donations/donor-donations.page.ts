import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UtilsService} from "../../services/utils.service";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {ListService} from "../../services/list.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-donor-donations',
    templateUrl: './donor-donations.page.html',
    styleUrls: ['./donor-donations.page.scss'],
})
export class DonorDonationsPage implements OnInit {

    loading = true;
    result: any = [];
    data: Observable<any>;
    user: any;

    constructor(private utils: UtilsService,
                public router: Router,
                private storage: Storage,
                private authService: AuthService,
                private service: ListService,
                public http: HttpClient) {
    }

    async ngOnInit() {
        this.user = this.authService.getUser();
        await await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/donations/find-by-id?id=${this.user.id}&user=donor`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                console.log(response.body);
                this.result = response.body;
                localStorage.removeItem('donorDonation');
                localStorage.setItem('donorDonation', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
        });
    }

    loadData() {
        this.result = JSON.parse(localStorage.getItem('donorDonation'));
    }

    openChat(donorFirst: string, donorLast: string, ngoFirstname: string, ngoLastname: string) {
        let donor = `${donorFirst.toLowerCase()}-${donorLast.toLowerCase()}`;
        let ngo = `${ngoFirstname.toLowerCase()}-${ngoLastname.toLowerCase()}`;
        localStorage.setItem('channelName', JSON.stringify(`${donor}-${ngo}`));
        this.router.navigate(['donner-chat']);
    }

}
