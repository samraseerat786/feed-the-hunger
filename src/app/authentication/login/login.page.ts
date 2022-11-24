import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router) {
    }

    test = false;
    loginForm: FormGroup;
    data: Observable<any>;
    passwordType = 'password';
    passwordIcon = 'eye-off';
    isSubmitted = false;
    private userButDisAproved: boolean;
    appPages = [];
    ngOnInit() {
        this.formInitializer();
    }

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    formInitializer() {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    async login() {
        this.isSubmitted = true;
        if (this.loginForm.valid) {
            const loginData = this.loginForm.value;
            await this.utils.presentLoading("Please wait...");
            this.saveHttpReq(loginData).subscribe(d => {
                this.utils.stopLoading();
                if (d.emailStatus && d.loginStatus && d.applicationStatus === 'approved' && d.role != null) {
                    if (d.role === 'donner') {
                        this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                            { title: 'charity Houses', url: '/charityList', icon: 'list' },
                            { title: 'My Donations', url: '/donor-donations', icon: 'md-briefcase' },
                            { title: 'Chat', url: '/chat-channels', icon: 'ios-chatboxes'},
                            { title: 'Reports', url: `/reports/${d.donner.id}`, icon: 'list' },
                            { title: 'Settings', url: '/setting', icon: 'settings'},
                            { title: 'Feedbacks', url: '/feed-backs', icon: 'list' }];
                        this.service.setRole(d.role);
                        localStorage.setItem('user', JSON.stringify(d.donner));
                        localStorage.setItem('appPages', JSON.stringify(this.appPages));
                        localStorage.setItem('role', d.role); // store role in local storage
                        this.service.changeMessage({role: d.role});
                        this.router.navigate(['home']);
                    }
                    if (d.role === 'charity house') {
                        this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                            { title: 'Donner List', url: '/donner-list', icon: 'list', },
                            { title: 'New Donations', url: '/new-donations', icon: 'md-briefcase' },
                            { title: 'Chat', url: '/chat-channels', icon: 'ios-chatboxes'},
                            { title: 'Setting', url: '/setting', icon: 'settings'},
                            ];
                        this.service.setRole(d.role);
                        localStorage.setItem('appPages', JSON.stringify(this.appPages));
                        localStorage.setItem('user', JSON.stringify(d.charityHouse));
                        localStorage.setItem('role', d.role); // store role in local storage
                        this.service.changeMessage({role: d.role});
                        this.router.navigate(['home']);
                    }
                    if (d.role === 'admin') {
                        this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                            { title: 'Manage Users', url: '/tabs', icon: 'list', },
                            { title: 'Message', url: '/chat-list', icon: 'ios-chatboxes'},
                            { title: 'Profile', url: `/admin-profile/${d.user.id}`, icon: 'person'}];
                        this.service.setRole(d.role);
                        localStorage.setItem('user', JSON.stringify(d.user));
                        localStorage.setItem('appPages', JSON.stringify(this.appPages));
                        localStorage.setItem('role', d.role); // store role in local storage
                        this.service.changeMessage({role: d.role});
                        this.router.navigate(['home']);
                    }
                } else if (d.emailStatus && d.loginStatus && d.applicationStatus === null) {
                    this.utils.presentAlert('Application status is disapproved. ' +
                        'Please check your email and click the activation link in email. Thank you!');
                } else if (d.emailStatus || d.loginStatus) {
                    this.utils.presentAlert('Invalid Email, password. Try again latter !');
                } else if (d.emailStatus === false) {
                    this.utils.presentAlert('Sorry ! User with that email, password does not exist');
                }
            },
            error => {
                this.utils.stopLoading();
                this.utils.presentAlert(':( OOPS ! Server Error. Confirm your internet connection.');
                console.log('error', error);
            });
        } else {
            return false;
        }
    }

    get errorControl() {
        return this.loginForm.controls;
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/users/login`;
        const test = this.http.post(url, dataObj);
        return test;
    }

    registerUser() {
        this.router.navigate(['register']);
    }

    forgotPassword() {
        this.router.navigate(['forgot-password']);
    }
}
