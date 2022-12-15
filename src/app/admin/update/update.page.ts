import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-update',
    templateUrl: './update.page.html',
    styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

    public signupForm;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private router: Router,
                private service: ListService,
                private formBuilder: FormBuilder) {
    }

    user;
    childUser;
    donner;
    data: Observable<any>;

    ngOnInit() {
        this.route.paramMap.subscribe(async paramMap => {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/donners/findById/${val}`;
            this.data = this.http.get(url);
            await this.utils.presentLoading("Please wait...");
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
                console.log(data)
                this.formInitializer();
            });
        });
    }

    formInitializer() {
        this.signupForm = this.formBuilder.group({
            id: [this.user.id, [Validators.required]],
            first_name: [this.user.user.first_name, [Validators.required]],
            last_name: [this.user.user.last_name, [Validators.required]],
            email: [this.user.user.email, [Validators.required]],
            user_name: [this.user.user.user_name, [Validators.required]],
            password: [this.user.user.password, [Validators.required]],
            role: [this.user.user.role, [Validators.required]],
            address: [this.user.address, [Validators.required]],
            contact: [this.user.contact, [Validators.required]]
        });
    }

    generateUser() {
        const data = this.signupForm.value;
        this.childUser = '"user" : {"id" : "' + this.user.user.id +
            '" , \n"first_name" : "' + data.first_name +
            '" , \n"last_name" : "' + data.last_name +
            '" , \n"email" : "' + data.email +
            '" , \n"user_name" : "' + data.user_name +
            '" , \n"password" : "' + data.password +
            '" , \n"role"  : "' + data.role + '"}';
        this.donner = '{"id" : "' + data.id +
            '", \n"address" : "' + data.address +
            '", \n"contact" : "' + data.contact +
            '", \n' + this.childUser + ' }';
        const completeDonner = JSON.parse(this.donner);
        return completeDonner;
    }

    async updateData() {
        if (this.signupForm.valid) {
            const formData = this.signupForm.value;
            await this.utils.presentLoading("Please wait...");
            this.saveHttpReq(this.generateUser()).subscribe(data => {
                    this.utils.stopLoading();
                    this.utils.presentToast('User updated successfully');
                    this.router.navigate(['tabs/donners']);
                },
                error => {
                    this.utils.stopLoading();
                    console.log('error', error);
                });
        }
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/donners/updateDonner`;
        return this.http.put(url, dataObj);
    }
}
