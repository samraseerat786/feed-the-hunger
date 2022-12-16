(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/change-password/change-password.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/change-password/change-password.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Change Password</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"changePasswordForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Change your password!</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input formControlName=\"oldPassword\" type=\"text\" placeholder=\"Old Password\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Password\" formControlName=\"newPassword\" [type]=\"passwordType\"\r\n                                       clearOnEdit=\"false\"></ion-input>\r\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\"\r\n                                      (click)='hideShowPassword()' color=\"secondary\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input (keyup)=\"removePasswordMatchError()\" (focusout)=\"matchPasswords()\"\r\n                                       placeholder=\"Repeat Password\" formControlName=\"repeatPassword\"\r\n                                       [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\"\r\n                                      (click)='hideShowPassword()' color=\"secondary\"></ion-icon>\r\n                        </ion-item>\r\n                        <div *ngIf=\"passwordMatch\">\r\n                            <span class=\"text-danger\">Password and confirm password should match.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button [disabled]=\"changePasswordForm.invalid\" (click)=\"changePassword()\" color=\"primary\"\r\n                                    type=\"submit\" expand=\"block\">Change Password\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/shared/change-password/change-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/change-password/change-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/shared/change-password/change-password.page.ts");







const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/shared/change-password/change-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/change-password/change-password.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n\n.register-icon {\n  width: 35px;\n  height: 35px;\n  padding-right: 5px;\n}\n\n.forgot-password {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYW5nZS1wYXNzd29yZC9EOlxcRllQXFxmZWVkLXRoZS1odW5kZXIvc3JjXFxhcHBcXHNoYXJlZFxcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZEljb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWljb24ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAvL2NvbG9yOiBkYXJrcmVkO1xyXG4gIC8vdGV4dC11bmRlcmxpbmU6ICMwMDcwNjk7XHJcbn1cclxuIiwiLnBhc3N3b3JkSWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZ2lzdGVyLWljb24ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/change-password/change-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/change-password/change-password.page.ts ***!
  \****************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let ChangePasswordPage = class ChangePasswordPage {
    constructor(utils, route, http, formBuilder, service, router) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.passwordMatch = false;
    }
    ngOnInit() {
        this.formInitializer();
    }
    loadUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user.user;
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    formInitializer() {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            repeatPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    matchPasswords() {
        const data = this.changePasswordForm.value;
        if (data.newPassword === data.repeatPassword) {
            this.passwordMatch = false;
        }
        else {
            this.passwordMatch = true;
        }
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            yield this.utils.presentLoading("Please wait...");
            this.saveHttpReq(finalObject).subscribe(data => {
                this.utils.stopLoading();
                this.router.navigate(['/setting']);
            }, error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
        });
    }
    saveHttpReq(dataObj) {
        const url = `${this.service.homeUrl}/users/changePassword`;
        const test = this.http.post(url, dataObj);
        return test;
    }
    removePasswordMatchError() {
        this.passwordMatch = false;
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/shared/change-password/change-password.page.html"),
        styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/shared/change-password/change-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=shared-change-password-change-password-module-es2015.js.map