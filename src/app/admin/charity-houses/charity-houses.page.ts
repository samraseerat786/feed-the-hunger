import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-charity-houses',
    templateUrl: './charity-houses.page.html',
    styleUrls: ['./charity-houses.page.scss'],
})
export class CharityHousesPage implements OnInit {

    constructor(private utils: UtilsService,
                public router: Router,
                public http: HttpClient,
                private alertCtrl: AlertController,
                private service: ListService) {
    }

    result: any = [];
    data: Observable<any>;
    t;

    loadData() {
        this.result = JSON.parse(localStorage.getItem('charity houses'));
    }

    async ngOnInit() {
        const url = this.service.homeUrl + '/charityHouses/list';
        await this.utils.presentLoading("Please wait...");
        this.http.get(url, {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                this.result = this.t.content;
                this.result.forEach(u => {
                    u.blocked = u.user.applicationStatus == 'blocked'
                });
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

    blockUser(e, id) {
        if(e.target.checked) {
            this.presentAlert("Are you sure you want to block this user?", true, id);
        } else {
            this.presentAlert("Are you sure you want to unblock this user?", false, id);
        }
    }

    async presentAlert(messag, isBlocked, id) {
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: messag,
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
                        let ngo = this.result.filter(u => u.id == id)[0];
                        let user = ngo.user;
                        user.applicationStatus = isBlocked ? "blocked" : "approved";
                        this.updateUser(user, isBlocked ? "User blocked successfully." : "User unblocked successfully.");
                    }
                }
            ]
        });
        alert.present();
    }

    async updateUser(user, message){
        this.utils.presentLoading("Please wait...");
        this.saveHttpReq(user).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert(message);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/users/updateUser`;
        const test = this.http.put(url, dataObj);
        return test;
    }

    deleteCharityHouse(item: any) {
        this.utils.presentAlert('Can\'t delete. Please! contact with supper admin using <b>samraseerat786@gmail.com</b>');
        this.router.navigate(['tabs/charity-houses']);
    }
}
