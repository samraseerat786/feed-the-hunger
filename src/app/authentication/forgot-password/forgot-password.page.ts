import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
    forgotPasswordForm: FormGroup;
    passwordType = 'password';
    passwordIcon = 'eye-off';
    mailloading: boolean;
    emailVerification: boolean;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router) {
    }

    ngOnInit() {
        this.formInitializer();
    }

    formInitializer() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    async resetPassword() {
        if (this.forgotPasswordForm.valid) {
            const passwordData = this.forgotPasswordForm.value;
            await this.utils.presentLoading("Please wait...");
            this.sendRequest(passwordData).subscribe(d => {
                    this.utils.stopLoading();
                    this.utils.presentToast('Password is successfully updated.');
                    this.router.navigate(['']);
                },
                error => {
                    this.utils.stopLoading();
                    this.utils.presentAlert(':( OOPS ! Server Error.');
                    console.log('error', error);
                });
        } else {
            return false;
        }
    }

    sendRequest(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/users/updatePassword`;
        const test = this.http.post(url, dataObj);
        return test;
    }

    async checkEmail() {
        this.mailloading = true;
        const test = this.forgotPasswordForm.value;
        const item = test.email;
        if (item) {
            await this.utils.presentLoading("Please wait...");
            this.http.get(`${this.service.homeUrl}/users/email/${item}`,
                {observe: 'response'}).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    const tester = response.body;
                    if (tester.toString() === 'true') {
                        this.utils.presentAlert('Email does not exist. Try with another email!');
                    }
                    this.mailloading = false;
                }
            }, (error) => {
                this.utils.stopLoading();
                console.log('error.', error);
            });
            this.mailloading = false;
        }
        this.mailloading = false;
    }
}
