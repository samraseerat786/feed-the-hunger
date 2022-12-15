import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";
import {Observable} from "rxjs";
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-update-charity-house',
    templateUrl: './update-charity-house.page.html',
    styleUrls: ['./update-charity-house.page.scss'],
})
export class UpdateCharityHousePage implements OnInit {

    constructor(private router: Router,
                private http: HttpClient,
                private service: ListService,
                private utils: UtilsService,
                private route: ActivatedRoute,
                private navCtrl: NavController,
                private formBuilder: FormBuilder) {
    }

    userForm: FormGroup;
    user; data;

    ngOnInit() {
        this.route.paramMap.subscribe(async paramMap => {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/charityHouses/getCharityHouse/${val}`;
            await this.utils.presentLoading("Please wait...");
            this.data = this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
                this.userFormInitializer();
            });
        });
    }

    userFormInitializer() {
        const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.userForm = this.formBuilder.group({
            id: [this.user.id, [Validators.required]],
            first_name: [this.user.user.first_name, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(20)]],
            last_name: [this.user.user.last_name, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(20)]],
            email: [this.user.user.email, [Validators.required, Validators.pattern(EMAILPATTERN)]],
            user_name: [this.user.user.user_name, [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
            role: [this.user.user.role, [Validators.required]],
            password: [this.user.user.password, Validators.compose([Validators.required, Validators.minLength(5)])],

            name: [this.user.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            NGOEmail: [this.user.email, [Validators.required, Validators.pattern(EMAILPATTERN)]],
            no_of_dependents: [this.user.no_of_dependents, [Validators.required, Validators.pattern('[0-9]*')]],
            contact: [this.user.contact, [Validators.required, Validators.pattern('[0-9]*')]],
            type: [this.user.type, [Validators.required]],
            bank_name: [this.user.bank_name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            account_no: [this.user.account_no, [Validators.required, Validators.pattern('[0-9]*')]],

            address: [this.user.address.streetAddress, [Validators.required]],
            city: [this.user.address.city, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            zipCode: [this.user.address.zipCode, [Validators.required, Validators.pattern('[0-9]*')]],
            state: [this.user.address.state, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            country: [this.user.address.country, [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
        });
    }

    updateData() {
        const formData = this.userForm.value;
        let user = '"user" : {"first_name" : "' + formData.first_name +
            '" , "last_name" : "' + formData.last_name +
            '" , "id" : "' + this.user.user.id +
            '" , "email" : "' + formData.email +
            '" , "user_name" : "' + formData.user_name +
            '" , "password" : "' + formData.password +
            '" , "role"  : "' + formData.role + '"}';
        let charityHouse = '{"name" : " ' + formData.name +
            '" , "email" : "' + formData.email +
            '" , "id" : "' + formData.id +
            '" , "no_of_dependents" : "' + formData.no_of_dependents +
            '" , "contact" : "' + formData.contact +
            '" , "type" : "' + formData.type +
            '" , "bank_name" : "' + formData.bank_name +
            '" , "account_no" : "' + formData.account_no +
            '" ,' + user +
            ',';

        let charity = '' + charityHouse + '"address" : {"streetAddress" : "' + formData.address +
            '" , "city" : "' + formData.city +
            '" , "id" : "' + this.user.address.id +
            '" , "zipCode" : "' + formData.zipCode +
            '" , "state" : "' + formData.state +
            '" , "country" : "' + formData.country +
            '" } }';
        const completeCharityHouse = JSON.parse(charity);
        this.utils.presentLoading("Please wait...");
        this.saveHttpReq(completeCharityHouse).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert("NGO successfully updated.")
                this.navCtrl.back();
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/charityHouses/updateCharityHouse`;
        const test = this.http.put(url, dataObj);
        return test;
    }
}
