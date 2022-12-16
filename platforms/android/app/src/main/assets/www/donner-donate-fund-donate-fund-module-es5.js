(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donate-fund-donate-fund-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donate-fund/donate-fund.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donate-fund/donate-fund.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Donate Fund</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"donateForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Provide Transaction Information</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Amount</ion-label>\r\n                            <ion-input formControlName=\"amount\"></ion-input>\r\n                        </ion-item>\r\n\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Currency</ion-label>\r\n                            <ion-select formControlName=\"currency\" placeholder=\"--Select--\" okText=\"Okay\"\r\n                                        cancelText=\"Dismiss\">\r\n                                <ion-select-option *ngFor=\"let item of currencies\"\r\n                                                   value=\"{{item}}\">{{item}}</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Card No</ion-label>\r\n                            <ion-input formControlName=\"donner_card\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Expiry Date</ion-label>\r\n                            <ion-datetime pickerFormat=\"YYYY MM DD\" formControlName=\"card_expiry_date\"></ion-datetime>\r\n                        </ion-item>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button [disabled]=\"donateForm.invalid\" (click)=\"donateFund()\" color=\"primary\" type=\"submit\"\r\n                                    expand=\"block\">Proceed\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/donner/donate-fund/donate-fund.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-fund/donate-fund.module.ts ***!
  \**********************************************************/
/*! exports provided: DonateFundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFundPageModule", function() { return DonateFundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donate_fund_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-fund.page */ "./src/app/donner/donate-fund/donate-fund.page.ts");







var routes = [
    {
        path: '',
        component: _donate_fund_page__WEBPACK_IMPORTED_MODULE_6__["DonateFundPage"]
    }
];
var DonateFundPageModule = /** @class */ (function () {
    function DonateFundPageModule() {
    }
    DonateFundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_donate_fund_page__WEBPACK_IMPORTED_MODULE_6__["DonateFundPage"]]
        })
    ], DonateFundPageModule);
    return DonateFundPageModule;
}());



/***/ }),

/***/ "./src/app/donner/donate-fund/donate-fund.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-fund/donate-fund.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9kb25hdGUtZnVuZC9kb25hdGUtZnVuZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donner/donate-fund/donate-fund.page.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/donate-fund/donate-fund.page.ts ***!
  \********************************************************/
/*! exports provided: DonateFundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFundPage", function() { return DonateFundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







var DonateFundPage = /** @class */ (function () {
    function DonateFundPage(utils, route, http, service, formBuilder, router) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.today = new Date();
        this.currencies = ['PKR', 'Dollar', 'rayal', 'denaar'];
    }
    DonateFundPage.prototype.ngOnInit = function () {
        var _this = this;
        this.formInitializer();
        this.route.paramMap.subscribe(function (paramMap) {
            _this.charityHouse = paramMap.get('id');
        });
    };
    DonateFundPage.prototype.formInitializer = function () {
        this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        this.donateForm = this.formBuilder.group({
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            currency: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            donner_card: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            card_expiry_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    DonateFundPage.prototype.donateFund = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var test, dateFormat, donner, donnerID, fundDonation, date, acceptanceDate;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = this.donateForm.value;
                        dateFormat = test.card_expiry_date.split('T')[0];
                        donner = JSON.parse(localStorage.getItem('user'));
                        donnerID = donner.id;
                        this.finalFundObject = '{"amount": "' + test.amount + '",' +
                            '"currency": "' + test.currency + '",' +
                            '"donnerCard": "' + test.donner_card + '",' +
                            '"cardExpiryDate": "' + dateFormat + '",' +
                            '"donation": { ' + '"date": "' + this.date + '",' +
                            '"donner": { "id": ' + donnerID + '},' +
                            '"charityHouse": { "id": ' + this.charityHouse + '}' + '}' + '}';
                        fundDonation = JSON.parse(this.finalFundObject);
                        date = new Date();
                        acceptanceDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
                        fundDonation.donation.acceptanceTime = acceptanceDate;
                        fundDonation.donation.status = "new";
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.saveFoodDonation(fundDonation).subscribe(function (data) {
                            _this.utils.stopLoading();
                            _this.utils.presentAlert('Your donation successfully sent to selected charity house. Thanks for donating fund.');
                            _this.router.navigate(['charityList']);
                        }, function (error) {
                            _this.utils.stopLoading();
                            console.log('error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DonateFundPage.prototype.saveFoodDonation = function (dataObj) {
        var url = this.service.homeUrl + "/fundDonations/newFundDonation";
        return this.http.post(url, dataObj);
    };
    DonateFundPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DonateFundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donate-fund',
            template: __webpack_require__(/*! raw-loader!./donate-fund.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donate-fund/donate-fund.page.html"),
            styles: [__webpack_require__(/*! ./donate-fund.page.scss */ "./src/app/donner/donate-fund/donate-fund.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DonateFundPage);
    return DonateFundPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-donate-fund-donate-fund-module-es5.js.map