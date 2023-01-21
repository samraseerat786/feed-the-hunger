import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-send-report',
    templateUrl: './send-report.page.html',
    styleUrls: ['./send-report.page.scss'],
})
export class SendReportPage implements OnInit {
    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router) {
    }

    reportForm: FormGroup;
    finalReportObject;
    reportID
    types = ['Spam', 'Harassment', 'Violence', 'Other'];

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.reportID = paramMap.get('id');
        });
        console.log("this.reportID: ", this.reportID);
        this.formInitializer();
    }

    formInitializer() {
        this.reportForm = this.formBuilder.group({
            email: [null, [Validators.required]],
            type: [null, [Validators.required]],
            reportMessage: [null, [Validators.required]]
        });
    }

    async sendReport() {
        const test = this.reportForm.value;
        const charityHouse = JSON.parse(localStorage.getItem('user'));
        const charityID = charityHouse.id;
        this.finalReportObject = '{"email": "' + test.email + '",' +
            ' "type": "' + test.type + '",' +
            ' "message": "' + test.reportMessage + '",' +
            ' "donner": { "id": ' + charityID + '},' +
            ' "charityHouse": { "id": ' + this.reportID + '}' + '}';
        const feedback = JSON.parse(this.finalReportObject);
        await this.utils.presentLoading("Please wait...");
        this.saveFeedback(feedback).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert('Donner reported successfully.');
                this.router.navigate(['charityList']);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    saveFeedback(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/reports/add`;
        return this.http.post(url, dataObj);
    }
}
