(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-address-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/address/address.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/address/address.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Sign Up</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"addressForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Enter Address Details</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Street address\" formControlName=\"streetAddress\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerAddressFormControl.streetAddress.touched && registerAddressFormControl.streetAddress.errors?.required\">street Address required.</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerAddressFormControl.streetAddress.errors?.required\">street Address required.</span>\r\n                        </div>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"City\" formControlName=\"city\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerAddressFormControl.city.touched && registerAddressFormControl.city.errors?.required\">city required.</span>\r\n                            <span class=\"text-danger\" *ngIf=\"addressForm.get('city').hasError('pattern')\">Enter only digits</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerAddressFormControl.city.errors?.required\">city required.</span>\r\n                        </div>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"zip Code\" formControlName=\"zipCode\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerAddressFormControl.zipCode.touched && registerAddressFormControl.zipCode.errors?.required\">zip Code required.</span>\r\n                            <span class=\"text-danger\" *ngIf=\"addressForm.get('zipCode').hasError('pattern')\">Enter only digits</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerAddressFormControl.zipCode.errors?.required\">zip Code required.</span>\r\n                        </div>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"state\" formControlName=\"state\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerAddressFormControl.state.touched && registerAddressFormControl.state.errors?.required\">state required.</span>\r\n                            <span class=\"text-danger\" *ngIf=\"addressForm.get('state').hasError('pattern')\">Enter only Alphabets</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerAddressFormControl.state.errors?.required\">state required.</span>\r\n                        </div>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Country\" formControlName=\"country\"></ion-input>\r\n                        </ion-item>\r\n                        <div>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"registerAddressFormControl.country.touched && registerAddressFormControl.country.errors?.required\">country required.</span>\r\n                            <span class=\"text-danger\" *ngIf=\"addressForm.get('country').hasError('pattern')\">Enter only Alphabets</span>\r\n                            <span class=\"text-danger\"\r\n                                  *ngIf=\"submitted && registerAddressFormControl.country.errors?.required\">country required.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button (click)=\"registerCharityHouse()\" color=\"primary\" type=\"submit\" expand=\"block\">\r\n                            Register&nbsp;&nbsp;&nbsp;<ion-spinner name=\"lines\" *ngIf=\"loading\"></ion-spinner>\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/authentication/address/address.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/address/address.module.ts ***!
  \**********************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/authentication/address/address.page.ts");







var routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }
];
var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
        })
    ], AddressPageModule);
    return AddressPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/address/address.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/authentication/address/address.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/address/address.page.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/address/address.page.ts ***!
  \********************************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







var AddressPage = /** @class */ (function () {
    function AddressPage(utils, route, router, http, service, formBuilder) {
        this.utils = utils;
        this.route = route;
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    AddressPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.obj = paramMap.get('id');
        });
        this.formInitializer();
    };
    AddressPage.prototype.formInitializer = function () {
        this.addressForm = this.formBuilder.group({
            streetAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*')]],
            zipCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*')]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]*')]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*')]]
        });
    };
    Object.defineProperty(AddressPage.prototype, "registerAddressFormControl", {
        get: function () {
            return this.addressForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddressPage.prototype.registerCharityHouse = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        if (this.addressForm.valid) {
            var formData = this.addressForm.value;
            this.charity = '' + this.obj + '"address" : {"streetAddress" : "' + formData.streetAddress +
                '" , "city" : "' + formData.city +
                '" , "zipCode" : "' + formData.zipCode +
                '" , "state" : "' + formData.state +
                '" , "country" : "' + formData.country +
                '" } }';
            var completeCharityHouse = JSON.parse(this.charity);
            this.utils.presentLoading("Creating your account, please be patient...");
            this.saveHttpReq(completeCharityHouse).subscribe(function (data) {
                _this.utils.stopLoading();
                _this.loading = false;
                _this.utils.presentAlert('Please! check your email and verify your account.');
                _this.router.navigate(['login']);
            }, function (error) {
                _this.utils.stopLoading();
                console.log('error', error);
            });
        }
        this.loading = false;
    };
    AddressPage.prototype.saveHttpReq = function (dataObj) {
        var url = this.service.homeUrl + "/charityHouses/newCharityHouse";
        var test = this.http.post(url, dataObj);
        this.loading = false;
        return test;
    };
    AddressPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/address/address.page.html"),
            styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/authentication/address/address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddressPage);
    return AddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-address-address-module-es5.js.map