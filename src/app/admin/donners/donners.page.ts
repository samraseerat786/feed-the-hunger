import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {AlertController} from '@ionic/angular';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-donners',
    templateUrl: './donners.page.html',
    styleUrls: ['./donners.page.scss'],
})
export class DonnersPage implements OnInit {

    constructor(private utils: UtilsService,
                public router: Router,
                private storage: Storage,
                public http: HttpClient,
                private alertController: AlertController,
                private service: ListService) {
    }

    t;
    result: any = [];
    data: Observable<any>;
    listActive = true;
    updateActive = false;

    async ngOnInit() {
        const url = this.service.homeUrl + '/donners/list';
        await this.utils.presentLoading("Please wait...");
        this.http.get(url, {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                this.result = this.t.content;
                localStorage.removeItem('donners');
                localStorage.setItem('donners', JSON.stringify(this.t.content));
            }
        }, (error) => {
            this.utils.stopLoading();
            this.loadData();
            console.log('error', error);
        });
    }

    loadData() {
        this.result = JSON.parse(localStorage.getItem('donners'));
    }

    showSingleItem(item: any) {
        const url = `detail/${item}`;
        this.router.navigateByUrl(url);
    }

    updateItem(id: any) {
        // this.listActive = false;
        // this.updateActive = true;
        const url = `update/${id}`;
        this.router.navigateByUrl(url);
    }

    deleteDonner(item: any) {
        this.utils.presentAlert("Can not delete user, please contact supper admin via a <b>samraseerat786@gmail.com</b>.");
        this.router.navigate(['tabs/donners']);
    }

    callAPI(studentId): Observable<any> {
        const url = `${this.service.homeUrl}/donners/deleteDonner/${studentId}`;
        return this.http.delete(url);
    }
}
