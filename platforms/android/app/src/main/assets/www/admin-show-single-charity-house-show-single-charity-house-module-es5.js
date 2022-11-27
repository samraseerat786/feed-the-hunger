(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-show-single-charity-house-show-single-charity-house-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/show-single-charity-house/show-single-charity-house.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/show-single-charity-house/show-single-charity-house.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{user?.name}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\">\r\n                <ion-card-header>\r\n                    <ion-card-title>{{user?.name}}</ion-card-title>\r\n                    <ion-card-subtitle>{{user?.email}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <p> {{user?.name}} is {{user?.type}} in {{user?.address.streetAddress}} {{user?.address.city}}.</p>\r\n                    <p>{{user?.contact}} is Contact number and email is {{user?.email}}.</p>\r\n                    <p>there are {{user?.no_of_members}} members in house.</p>\r\n                    <p>{{user?.name}} have an account in {{user?.bank_name}} Bank where you can donate your funds\r\n                        in {{user?.account_no}} account Number.</p>\r\n                    <ion-icon size=\"large\" slot=\"end\" name=\"ios-call\" (click)=\"contactDealer(user?.email)\"\r\n                              color=\"secondary\"></ion-icon>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/show-single-charity-house/show-single-charity-house.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/show-single-charity-house/show-single-charity-house.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ShowSingleCharityHousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSingleCharityHousePageModule", function() { return ShowSingleCharityHousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _show_single_charity_house_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-single-charity-house.page */ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.ts");







var routes = [
    {
        path: '',
        component: _show_single_charity_house_page__WEBPACK_IMPORTED_MODULE_6__["ShowSingleCharityHousePage"]
    }
];
var ShowSingleCharityHousePageModule = /** @class */ (function () {
    function ShowSingleCharityHousePageModule() {
    }
    ShowSingleCharityHousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_show_single_charity_house_page__WEBPACK_IMPORTED_MODULE_6__["ShowSingleCharityHousePage"]]
        })
    ], ShowSingleCharityHousePageModule);
    return ShowSingleCharityHousePageModule;
}());



/***/ }),

/***/ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/show-single-charity-house/show-single-charity-house.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Nob3ctc2luZ2xlLWNoYXJpdHktaG91c2Uvc2hvdy1zaW5nbGUtY2hhcml0eS1ob3VzZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/show-single-charity-house/show-single-charity-house.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ShowSingleCharityHousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSingleCharityHousePage", function() { return ShowSingleCharityHousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");






var ShowSingleCharityHousePage = /** @class */ (function () {
    function ShowSingleCharityHousePage(utils, route, service, http) {
        this.utils = utils;
        this.route = route;
        this.service = service;
        this.http = http;
        this.result = [];
    }
    ShowSingleCharityHousePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var val, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = paramMap.get('id');
                        url = this.service.homeUrl + "/charityHouses/getCharityHouse/" + val;
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.data = this.http.get(url);
                        this.data.subscribe(function (data) {
                            _this.utils.stopLoading();
                            _this.user = data;
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ShowSingleCharityHousePage.prototype.contactDealer = function (contactNumber) {
        this.utils.presentAlert('You can contact with owner via <b>' + contactNumber + '</b>.');
    };
    ShowSingleCharityHousePage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ShowSingleCharityHousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-single-charity-house',
            template: __webpack_require__(/*! raw-loader!./show-single-charity-house.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/show-single-charity-house/show-single-charity-house.page.html"),
            styles: [__webpack_require__(/*! ./show-single-charity-house.page.scss */ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ShowSingleCharityHousePage);
    return ShowSingleCharityHousePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-show-single-charity-house-show-single-charity-house-module-es5.js.map