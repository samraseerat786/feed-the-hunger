(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-title>Login</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"loginForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Login to your account!</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Email\"></ion-input>\r\n                        </ion-item>\r\n                        <span class=\"error-message\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">email is required.</span>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Password\" formControlName=\"password\" [type]=\"passwordType\"\r\n                                       clearOnEdit=\"false\"></ion-input>\r\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\"\r\n                                      (click)='hideShowPassword()' color=\"secondary\"></ion-icon>\r\n                        </ion-item>\r\n                        <span class=\"error-message\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">Password is required.</span>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button shape=\"round\" (click)=\"login()\" color=\"primary\" type=\"submit\"\r\n                                    expand=\"block\">Login\r\n                        </ion-button>\r\n                    </div>\r\n                    <div>\r\n                        <ion-label *ngIf=\"test\">Invalid email OR password. Please Enter correct details.</ion-label>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xl=\"4\" size-xs=\"12\">\r\n            <ion-text (click)=\"forgotPassword()\" color=\"danger\">\r\n                <h4 style=\"padding-left: 30px\">Forgot Password?</h4>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-footer style=\"padding-top: 40px\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xl=\"4\" size-xs=\"12\">\r\n                <ion-button (click)=\"registerUser()\" color=\"secondary\" expand=\"block\">\r\n                    <ion-img class=\"register-icon\" src=\"/assets/person-add-sharp.svg\"></ion-img>\r\n                    REGISTER A NEW USER\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-footer>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/authentication/login/login.module.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/authentication/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/authentication/login/login.page.scss":
/*!******************************************************!*\
  !*** ./src/app/authentication/login/login.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n\n.register-icon {\n  width: 35px;\n  height: 35px;\n  padding-right: 5px;\n}\n\n.forgot-password {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vRDpcXEZZUFxcZmVlZC10aGUtaHVuZGVyL3NyY1xcYXBwXFxhdXRoZW50aWNhdGlvblxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmRJY29uIHtcclxuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1pY29uIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgLy9jb2xvcjogZGFya3JlZDtcclxuICAvL3RleHQtdW5kZXJsaW5lOiAjMDA3MDY5O1xyXG59XHJcbiIsIi5wYXNzd29yZEljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5yZWdpc3Rlci1pY29uIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/login/login.page.ts":
/*!****************************************************!*\
  !*** ./src/app/authentication/login/login.page.ts ***!
  \****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let LoginPage = class LoginPage {
    constructor(utils, route, http, formBuilder, service, router) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.test = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.isSubmitted = false;
        this.appPages = [];
    }
    ngOnInit() {
        this.formInitializer();
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    formInitializer() {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.loginForm.valid) {
                const loginData = this.loginForm.value;
                yield this.utils.presentLoading("Please wait...");
                this.saveHttpReq(loginData).subscribe(d => {
                    this.utils.stopLoading();
                    if (d.emailStatus && d.loginStatus && d.applicationStatus === 'approved' && d.role != null) {
                        if (d.role === 'donner') {
                            this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                                { title: 'charity Houses', url: '/charityList', icon: 'list' },
                                { title: 'My Donations', url: '/donor-donations', icon: 'md-briefcase' },
                                { title: 'Chat', url: '/chat-channels', icon: 'ios-chatboxes' },
                                { title: 'Reports', url: `/reports/${d.donner.id}`, icon: 'list' },
                                { title: 'Feedbacks', url: '/feed-backs', icon: 'list' },
                                { title: 'Settings', url: '/setting', icon: 'settings' }];
                            this.service.setRole(d.role);
                            localStorage.setItem('user', JSON.stringify(d.donner));
                            localStorage.setItem('appPages', JSON.stringify(this.appPages));
                            localStorage.setItem('role', d.role); // store role in local storage
                            this.service.changeMessage({ role: d.role });
                            this.router.navigate(['home']);
                        }
                        if (d.role === 'charity house') {
                            this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                                { title: 'Donner List', url: '/donner-list', icon: 'list', },
                                { title: 'New Donations', url: '/new-donations', icon: 'md-briefcase' },
                                { title: 'Chat', url: '/chat-channels', icon: 'ios-chatboxes' },
                                { title: 'Setting', url: '/setting', icon: 'settings' },
                            ];
                            this.service.setRole(d.role);
                            localStorage.setItem('appPages', JSON.stringify(this.appPages));
                            localStorage.setItem('user', JSON.stringify(d.charityHouse));
                            localStorage.setItem('role', d.role); // store role in local storage
                            this.service.changeMessage({ role: d.role });
                            this.router.navigate(['home']);
                        }
                        if (d.role === 'admin') {
                            this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                                { title: 'Manage Users', url: '/tabs', icon: 'list', },
                                { title: 'Message', url: '/chat-list', icon: 'ios-chatboxes' },
                                { title: 'Profile', url: `/admin-profile/${d.user.id}`, icon: 'person' }];
                            this.service.setRole(d.role);
                            localStorage.setItem('user', JSON.stringify(d.user));
                            localStorage.setItem('appPages', JSON.stringify(this.appPages));
                            localStorage.setItem('role', d.role); // store role in local storage
                            this.service.changeMessage({ role: d.role });
                            this.router.navigate(['home']);
                        }
                    }
                    else if (d.emailStatus && d.loginStatus && d.applicationStatus === null) {
                        this.utils.presentAlert('Application status is disapproved. ' +
                            'Please check your email and click the activation link in email. Thank you!');
                    }
                    else if (d.emailStatus || d.loginStatus) {
                        this.utils.presentAlert('Invalid Email, password. Try again latter !');
                    }
                    else if (d.emailStatus === false) {
                        this.utils.presentAlert('Sorry ! User with that email, password does not exist');
                    }
                }, error => {
                    this.utils.stopLoading();
                    this.utils.presentAlert(':( OOPS ! Server Error. Confirm your internet connection.');
                    console.log('error', error);
                });
            }
            else {
                return false;
            }
        });
    }
    get errorControl() {
        return this.loginForm.controls;
    }
    saveHttpReq(dataObj) {
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
};
LoginPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/authentication/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=authentication-login-login-module-es2015.js.map