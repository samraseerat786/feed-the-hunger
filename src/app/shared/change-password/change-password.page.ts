import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.page.html',
    styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router) {
    }

    user: any;
    object;
    changePasswordForm: FormGroup;
    passwordType = 'password';
    passwordIcon = 'eye-off';
    requestUser: any;
    formData: any;
    passwordMatch = false;

    ngOnInit() {
        this.formInitializer();
    }

    loadUser(): any {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user.user;
    }

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    formInitializer() {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: [null, [Validators.required]],
            newPassword: [null, [Validators.required]],
            repeatPassword: [null, [Validators.required]]
        });
    }

    matchPasswords() {
        const data = this.changePasswordForm.value;
        if (data.newPassword === data.repeatPassword) {
            this.passwordMatch = false;
        } else {
            this.passwordMatch = true;
        }
    }

    async changePassword() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.formData = this.changePasswordForm.value;
        this.user.user.password = this.formData.newPassword;
        this.object = '{"id" : ' + this.user.user.id +
            ' , "first_name" : "' + this.user.user.first_name +
            '" , "last_name" : "' + this.user.user.last_name +
            '" , "email" : "' + this.user.user.email +
            '" , "user_name" : "' + this.user.user.user_name +
            '" , "password" : "' + this.formData.newPassword +
            '" , "applicationStatus" : "' + this.user.user.applicationStatus +
            '" , "role"  : "' + this.user.user.role + '"}';
        const finalObject = JSON.parse(this.object);

        await this.utils.presentLoading("Please wait...");
        this.saveHttpReq(finalObject).subscribe(data => {
            this.utils.stopLoading();
            this.router.navigate(['/setting']);
        },
        error => {
            this.utils.stopLoading();
            console.log('error', error);
        });
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/users/changePassword`;
        const test = this.http.post(url, dataObj);
        return test;
    }

    removePasswordMatchError() {
        this.passwordMatch = false;
    }
}
