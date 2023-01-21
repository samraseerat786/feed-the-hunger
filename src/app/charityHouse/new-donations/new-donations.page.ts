import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UtilsService} from "../../services/utils.service";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {AuthService} from "../../services/auth.service";
import {ListService} from "../../services/list.service";
import {HttpClient} from "@angular/common/http";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-new-donations',
    templateUrl: './new-donations.page.html',
    styleUrls: ['./new-donations.page.scss'],
})
export class NewDonationsPage implements OnInit {

    loading = true;
    result: any = [];
    data: Observable<any>;
    user: any;

    constructor(private utils: UtilsService,
                public router: Router,
                private storage: Storage,
                private authService: AuthService,
                private service: ListService,
                public http: HttpClient,
                private alertCtrl: AlertController) {
    }

    async ngOnInit() {
        this.user = this.authService.getUser();
        await await this.utils.presentLoading("Please wait...");
        this.http.get(`${this.service.homeUrl}/donations/find-by-id?id=${this.user.id}&user=ngo`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                console.log(response.body);
                this.result = response.body;
                let newDonations = this.result.filter(d => d.status != 'accepted');
                let otherDonations = this.result.filter(d => d.status == 'accepted');
                this.result = [...newDonations, ...otherDonations];
                this.result = this.result.filter(d =>
                    !(d.charityHouseId == this.user.id && d.status == 'rejected') &&
                    !(d.charityHouseId != this.user.id && d.status == 'accepted')
                );
                console.log("this.result: ", this.result);
                localStorage.removeItem('newDonation');
                localStorage.setItem('newDonation', JSON.stringify(this.result));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
        });
    }

    loadData() {
        this.result = JSON.parse(localStorage.getItem('newDonation'));
    }

    openChat(first: string, last: string) {
        localStorage.setItem('donnerName', JSON.stringify(first.toLowerCase() + '-' + last.toLowerCase()));
        this.router.navigate(['charity-house-chat']);
    }

    async acceptFood(id) {

        let date = new Date();
        let minTime = `${date.getHours()}:${date.getMinutes()}`;
        let maxTime = `${date.getHours() + 5}:${date.getMinutes()}`;

        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: "Please select time to pick the food.",
            inputs: [{
                type: 'time',
                name: 'date',
                placeholder: 'Select Time',
                max: `${maxTime}`,
                min: `${minTime}`,
            }],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: 'OK',
                    cssClass: 'primary',
                    handler: async (data) => {
                        console.log(data.date);
                        if (data.date == '') {
                            await this.utils.presentAlert("Please select food picking time.")
                            return;
                        }
                        let dateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${data.date}:00`;
                        this.acceptOrRejectDonation(id, 'accepted', dateTime);
                    }
                }
            ]
        });
        await alert.present();
    }

    async rejectFood(id) {
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: "Are you sure, you want to reject the Food donation?",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'primary',
                    handler: () => {
                        this.acceptOrRejectDonation(id, 'rejected', '');
                    }
                }
            ]
        });
        await alert.present();
    }

    async acceptOrRejectDonation(id, status, time) {
        await await this.utils.presentLoading("Please wait...");
        let date = new Date();
        let acceptanceDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        if (time != '') {
            acceptanceDate = time;
        }
        this.http.get(`${this.service.homeUrl}/donations/update-donation-by-id?ngoId=${this.user.id}&id=${id}&status=${status}&time=${acceptanceDate}`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                console.log(response.body);
                if (response.body) {
                    this.utils.presentAlert("Donation acknowledged. Thanks for your acknowledgement.");
                    if(status == 'rejected') this.deleteById(id);
                    if(status == 'accepted') this.updateStatus(id);
                } else {
                    this.utils.presentAlert("Oops ! Something went wrong while acknowledging the fund.");
                }
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
        });
    }

    deleteById(id) {
        this.result.splice(this.result.findIndex(function (i) {
            return i.id === id;
        }), 1);
    }

    updateStatus(id) {
        this.result.forEach(d => {
            if(d.id == id) d.status = "accepted";
        });
    }
}
