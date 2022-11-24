import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-donate-fund',
    templateUrl: './donate-fund.page.html',
    styleUrls: ['./donate-fund.page.scss'],
})
export class DonateFundPage implements OnInit {
    donateForm: FormGroup;
    today = new Date();
    date;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private service: ListService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    data: Observable<any>;
    charityHouse;
    finalFundObject;
    currencies: string [] = ['PKR', 'Dollar', 'rayal', 'denaar'];

    ngOnInit() {
        this.formInitializer();
        this.route.paramMap.subscribe(paramMap => {
            this.charityHouse = paramMap.get('id');
        });
    }

    formInitializer() {
        this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        this.donateForm = this.formBuilder.group({
            amount: [null, [Validators.required]],
            currency: [null, [Validators.required]],
            donner_card: [null, [Validators.required]],
            card_expiry_date: [null, [Validators.required]],
        });
    }

    async donateFund() {
        const test = this.donateForm.value;
        const dateFormat = test.card_expiry_date.split('T')[0];
        const donner = JSON.parse(localStorage.getItem('user'));
        const donnerID = donner.id;
        this.finalFundObject = '{"amount": "' + test.amount + '",' +
            '"currency": "' + test.currency + '",' +
            '"donnerCard": "' + test.donner_card + '",' +
            '"cardExpiryDate": "' + dateFormat + '",' +
            '"donation": { ' + '"date": "' + this.date + '",' +
            '"donner": { "id": ' + donnerID + '},' +
            '"charityHouse": { "id": ' + this.charityHouse + '}' + '}' + '}';
        const fundDonation = JSON.parse(this.finalFundObject);
        let date = new Date();
        let acceptanceDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        fundDonation.donation.acceptanceTime = acceptanceDate;
        fundDonation.donation.status = "new";
        await this.utils.presentLoading("Please wait...");
        this.saveFoodDonation(fundDonation).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert('Your donation successfully sent to selected charity house. Thanks for donating fund.');
                this.router.navigate(['charityList']);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    saveFoodDonation(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/fundDonations/newFundDonation`;
        return this.http.post(url, dataObj);
    }
}
