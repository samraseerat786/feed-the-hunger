import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-address',
    templateUrl: './address.page.html',
    styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

    addressForm: FormGroup;
    charity;
    loading: boolean;
    submitted: any;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private router: Router,
                private http: HttpClient,
                private service: ListService,
                private formBuilder: FormBuilder
    ) {
    }

    obj;
    user;

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.obj = paramMap.get('id');
        });
        this.formInitializer();
    }

    formInitializer() {
        this.addressForm = this.formBuilder.group({
            streetAddress: [null, [Validators.required]],
            city: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            zipCode: [null, [Validators.required, Validators.pattern('[0-9]*')]],
            state: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            country: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
        });
    }

    get registerAddressFormControl() {
        return this.addressForm.controls;
    }

    registerCharityHouse() {
        this.submitted = true;
        this.loading = true;
        if (this.addressForm.valid) {
            const formData = this.addressForm.value;
            this.charity = '' + this.obj + '"address" : {"streetAddress" : "' + formData.streetAddress +
                '" , "city" : "' + formData.city +
                '" , "zipCode" : "' + formData.zipCode +
                '" , "state" : "' + formData.state +
                '" , "country" : "' + formData.country +
                '" } }';
            const completeCharityHouse = JSON.parse(this.charity);
            this.utils.presentLoading("Creating your account, please be patient...");
            this.saveHttpReq(completeCharityHouse).subscribe(data => {
                    this.utils.stopLoading();
                    this.loading = false;
                    this.utils.presentAlert('Please! check your email and verify your account.');
                    this.router.navigate(['login']);
                },
                error => {
                    this.utils.stopLoading();
                    console.log('error', error);
                });
        }
        this.loading = false;
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/charityHouses/newCharityHouse`;
        const test = this.http.post(url, dataObj);
        this.loading = false;
        return test;
    }
}
