import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";
import {AlertController} from "@ionic/angular";

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
                private alertCtrl: AlertController,
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

    async ngOnInit() {

        this.route.paramMap.subscribe(paramMap => {
            this.donnerID = paramMap.get('id');
        });

        await this.utils.presentLoading("Please wait...");
        // reports/findByDonner/${this.donnerID}
        this.http.get(`${this.service.homeUrl}/reports/list`,
            {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.reportList = response.body;
                this.result = this.reportList.content;
                if (this.result.length === 0) {
                    this.isEmpty = true;
                } else {
                    this.result.sort((a,b) => {
                        var c = new Date(a.date);
                        var d = new Date(b.date);
                        return d.getTime() - c.getTime();
                    });
                    this.result.forEach(r => {
                        r.blocked = r.charityHouse.user.applicationStatus == "blocked" ? "Unblock" : "Block";
                    });
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

    async deleteReport(id: any) {
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: "Are you sure you want to delete the complaint?",
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
                        this.removeReport(id);
                    }
                }
            ]
        });
        alert.present();
    }
    async removeReport(id){
        this.utils.presentLoading("Please wait...");
        this.deleteHttpReq(id).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert("Report deleted successfully.");
                this.result.splice(this.result.findIndex((i) => {
                    return i.id === id;
                }), 1);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    deleteHttpReq(id): Observable<any> {
        const url = `${this.service.homeUrl}/reports/delete`;
        const test = this.http.post(url, id);
        return test;
    }

    async blockUser(report) {
        let user = report.charityHouse.user;
        let isBlocked = user.applicationStatus == 'blocked';
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: isBlocked ? "Are you sure you want to unblock this user?" : "Are you sure you want to block this user?",
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
                        user.applicationStatus = isBlocked ? "approved" : "blocked";
                        this.updateUser(user, isBlocked ? "User unblocked successfully." : "User blocked successfully.");
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
                this.result.forEach(r => {
                    if(r.charityHouse.user.email == user.email) r.charityHouse.user.applicationStatus = user.applicationStatus;
                });
                this.result.forEach(r => {
                    r.blocked = r.charityHouse.user.applicationStatus == "blocked" ? "unblock" : "block";
                });
                console.log(this.result)
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
}
