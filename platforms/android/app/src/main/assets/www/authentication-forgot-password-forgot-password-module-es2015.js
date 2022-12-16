(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/forgot-password/forgot-password.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/forgot-password/forgot-password.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Forgot Password</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"forgotPasswordForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Reset Your Password!</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input (change)=\"checkEmail()\" formControlName=\"email\" type=\"text\"\r\n                                       placeholder=\"Email\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"New Password\" formControlName=\"password\" [type]=\"passwordType\"\r\n                                       clearOnEdit=\"false\"></ion-input>\r\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'\r\n                                      color=\"secondary\"></ion-icon>\r\n                        </ion-item>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button shape=\"round\" (click)=\"resetPassword()\" color=\"primary\" type=\"submit\"\r\n                                    expand=\"block\">Reset Password\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/authentication/forgot-password/forgot-password.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.module.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/authentication/forgot-password/forgot-password.page.ts");







const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/authentication/forgot-password/forgot-password.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL0Q6XFxGWVBcXGZlZWQtdGhlLWh1bmRlci9zcmNcXGFwcFxcYXV0aGVudGljYXRpb25cXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmRJY29uIHtcclxuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnBhc3N3b3JkSWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/authentication/forgot-password/forgot-password.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.page.ts ***!
  \************************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(utils, route, http, formBuilder, service, router) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.formInitializer();
    }
    formInitializer() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    resetPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.forgotPasswordForm.valid) {
                const passwordData = this.forgotPasswordForm.value;
                yield this.utils.presentLoading("Please wait...");
                this.sendRequest(passwordData).subscribe(d => {
                    this.utils.stopLoading();
                    this.utils.presentToast('Password is successfully updated.');
                    this.router.navigate(['']);
                }, error => {
                    this.utils.stopLoading();
                    this.utils.presentAlert(':( OOPS ! Server Error.');
                    console.log('error', error);
                });
            }
            else {
                return false;
            }
        });
    }
    sendRequest(dataObj) {
        const url = `${this.service.homeUrl}/users/updatePassword`;
        const test = this.http.post(url, dataObj);
        return test;
    }
    checkEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mailloading = true;
            const test = this.forgotPasswordForm.value;
            const item = test.email;
            if (item) {
                yield this.utils.presentLoading("Please wait...");
                this.http.get(`${this.service.homeUrl}/users/email/${item}`, { observe: 'response' }).subscribe(response => {
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
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/forgot-password/forgot-password.page.html"),
        styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/authentication/forgot-password/forgot-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=authentication-forgot-password-forgot-password-module-es2015.js.map