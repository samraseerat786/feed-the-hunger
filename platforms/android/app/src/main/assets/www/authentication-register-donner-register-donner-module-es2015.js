(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-register-donner-register-donner-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/register-donner/register-donner.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/register-donner/register-donner.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Sign Up</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"registerDonnerForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Enter Donner Details!</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Address</ion-label>\r\n                            <ion-input (focusout)=\"onFoucusOut()\" (keyup)=\"removeError()\"\r\n                                       formControlName=\"address\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerDonnerFormControl.address.touched && registerDonnerFormControl.address.errors?.required\">Address required.</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerDonnerFormControl.address.errors?.required\">address required.</span>\r\n                        </div>\r\n                        <div *ngIf=\"addressVerification\">\r\n                            <span class=\"text-danger\">You can't enter only white space.</span>\r\n                        </div>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Contact</ion-label>\r\n                            <ion-input (focus)=\"onFoucusOutContact()\" (keyup)=\"removeErrorContact()\"\r\n                                       formControlName=\"contact\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerDonnerFormControl.contact.touched && registerDonnerFormControl.contact.errors?.required\">Contact required.</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerDonnerFormControl.contact.errors?.required\">Contact required.</span>\r\n                            <span class=\"text-danger\" *ngIf=\"registerDonnerForm.get('contact').hasError('pattern')\">Enter Only digits for contact.</span>\r\n                        </div>\r\n                        <div *ngIf=\"contactEmptyCheck\">\r\n                            <span class=\"text-danger\">You can't enter only white space.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button [disabled]=\"registerDonnerForm.invalid\" (click)=\"registerDonner()\" color=\"primary\"\r\n                                    type=\"submit\" expand=\"block\">Register\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/authentication/register-donner/register-donner.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/register-donner/register-donner.module.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterDonnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDonnerPageModule", function() { return RegisterDonnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_donner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-donner.page */ "./src/app/authentication/register-donner/register-donner.page.ts");







const routes = [
    {
        path: '',
        component: _register_donner_page__WEBPACK_IMPORTED_MODULE_6__["RegisterDonnerPage"]
    }
];
let RegisterDonnerPageModule = class RegisterDonnerPageModule {
};
RegisterDonnerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_donner_page__WEBPACK_IMPORTED_MODULE_6__["RegisterDonnerPage"]]
    })
], RegisterDonnerPageModule);



/***/ }),

/***/ "./src/app/authentication/register-donner/register-donner.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/register-donner/register-donner.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLWRvbm5lci9yZWdpc3Rlci1kb25uZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/register-donner/register-donner.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/register-donner/register-donner.page.ts ***!
  \************************************************************************/
/*! exports provided: RegisterDonnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDonnerPage", function() { return RegisterDonnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let RegisterDonnerPage = class RegisterDonnerPage {
    constructor(utils, route, http, formBuilder, service, router) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.today = new Date();
        this.addressVerification = false;
        this.contactEmptyCheck = false;
    }
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
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            contact: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9 ]*')]]
        });
    }
    get registerDonnerFormControl() {
        return this.registerDonnerForm.controls;
    }
    registerDonner() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.registerDonnerForm.valid) {
                this.loading = true;
                const formData = this.registerDonnerForm.value;
                this.donner = '{"address" : "' + formData.address +
                    '", \n"contact" : "' + formData.contact +
                    '", \n' + this.user + ' }';
                const completeDonner = JSON.parse(this.donner);
                yield this.utils.presentLoading("Please wait...");
                this.saveHttpReq(completeDonner).subscribe(data => {
                    this.utils.stopLoading();
                    this.utils.presentAlert('Please! check your email and activate your account.');
                    this.router.navigate(['login']);
                }, error => {
                    this.utils.stopLoading();
                    console.log('error', error);
                });
            }
        });
    }
    saveHttpReq(dataObj) {
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
};
RegisterDonnerPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterDonnerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-donner',
        template: __webpack_require__(/*! raw-loader!./register-donner.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/register-donner/register-donner.page.html"),
        styles: [__webpack_require__(/*! ./register-donner.page.scss */ "./src/app/authentication/register-donner/register-donner.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RegisterDonnerPage);



/***/ })

}]);
//# sourceMappingURL=authentication-register-donner-register-donner-module-es2015.js.map