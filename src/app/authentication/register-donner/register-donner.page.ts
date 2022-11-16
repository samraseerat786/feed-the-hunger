import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-register-donner',
    templateUrl: './register-donner.page.html',
    styleUrls: ['./register-donner.page.scss'],
})
export class RegisterDonnerPage implements OnInit {

    private JSONObject;
    registerDonnerForm: FormGroup;
    today = new Date();
    date;
    obj;
    user;
    donner;
    addressVerification = false;
    contactEmptyCheck = false;
    private loading: boolean;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router) {
    }

    data: Observable<any>;
    charityHouse: any;
    submitted: any;

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.obj = paramMap.get('first_name');
            console.log('reciving data', this.obj);
            this.user = '"user" : {"first_name" : "' + paramMap.get('first_name') +
                '" , "last_name" : "' + paramMap.get('last_name') +
                '" , "email" : "' + paramMap.get('email') +
                '" , "user_name" : "' + paramMap.get('user_name') +
                '" , "password" : "' + paramMap.get('password') +
                '" , "role"  : "' + paramMap.get('role') + '"}';
        });
        this.formInitializer();
    }

    formInitializer() {
        this.registerDonnerForm = this.formBuilder.group({
            address: [null, [Validators.required]],
            contact: [null, [Validators.required, Validators.pattern('[0-9 ]*')]]
        });
    }

    get registerDonnerFormControl() {
        return this.registerDonnerForm.controls;
    }

    registerDonner() {
        this.submitted = true;
        if (this.registerDonnerForm.valid) {
            this.loading = true;
            const formData = this.registerDonnerForm.value;
            this.donner = '{"address" : "' + formData.address +
                '", \n"contact" : "' + formData.contact +
                '", \n' + this.user + ' }';
            const completeDonner = JSON.parse(this.donner);
            this.utils.presentLoading("Please wait...");
            this.saveHttpReq(completeDonner).subscribe(data => {
                    this.utils.stopLoading();
                    this.utils.presentAlert('Please! check your email and activate your account.');
                    this.router.navigate(['login']);
                },
                error => {
                    this.utils.stopLoading();
                    console.log('error', error);
                }
            );
        }
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/donners/newDonner`;
        const test = this.http.post(url, dataObj);
        this.loading = false;
        return test;
    }

    onFoucusOut() {
        const test = this.registerDonnerForm.value;
        const item = test.address;
        const str = '    ';
        if (!str.replace(/\s/g, '').length) {
        }
        if (item === '' || item == null) {
            this.addressVerification = true;
        }
    }

    removeError() {
        this.addressVerification = false;
    }

    onFoucusOutContact() {
        const test = this.registerDonnerForm.value;
        const item = test.contact;
        const str = '    ';
        if (!str.replace(/\s/g, '').length) {
        }
        if (item === '' || item == null) {
            this.contactEmptyCheck = true;
        }
    }

    removeErrorContact() {
        this.contactEmptyCheck = false;
    }
}
