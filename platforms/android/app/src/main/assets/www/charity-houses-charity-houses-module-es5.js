(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charity-houses-charity-houses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/charity-houses/charity-houses.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/charity-houses/charity-houses.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [fullscreen]=\"true\" *ngIf=\"result.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-list>\r\n                <ion-item *ngFor=\"let item of result\">\r\n                    <ion-icon slot=\"start\" name=\"home\" color=\"secondary\"></ion-icon>\r\n                    <p (click)=\"showSingleItem(item?.id)\">{{item?.name}} {{item?.contact}}</p>\r\n                    <ion-img (click)=\"updateItem(item?.id)\" style=\"width: 30px; height: 30px;\"\r\n                             src=\"/assets/pencil-sharp.svg\"\r\n                             alt=\"update\" slot=\"end\"></ion-img>\r\n                    <ion-icon (click)=\"deleteCharityHouse(item?.id)\" size=\"default\" name=\"trash\" slot=\"end\"\r\n                              color=\"secondary\"></ion-icon>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n<ion-content *ngIf=\"result.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No charity house</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/charity-houses/charity-houses.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/charity-houses/charity-houses.module.ts ***!
  \***************************************************************/
/*! exports provided: CharityHousesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityHousesPageModule", function() { return CharityHousesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charity_houses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charity-houses.page */ "./src/app/admin/charity-houses/charity-houses.page.ts");







var routes = [
    {
        path: '',
        component: _charity_houses_page__WEBPACK_IMPORTED_MODULE_6__["CharityHousesPage"]
    }
];
var CharityHousesPageModule = /** @class */ (function () {
    function CharityHousesPageModule() {
    }
    CharityHousesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_charity_houses_page__WEBPACK_IMPORTED_MODULE_6__["CharityHousesPage"]]
        })
    ], CharityHousesPageModule);
    return CharityHousesPageModule;
}());



/***/ }),

/***/ "./src/app/admin/charity-houses/charity-houses.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/charity-houses/charity-houses.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXJpdHktaG91c2VzL2NoYXJpdHktaG91c2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/charity-houses/charity-houses.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/charity-houses/charity-houses.page.ts ***!
  \*************************************************************/
/*! exports provided: CharityHousesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityHousesPage", function() { return CharityHousesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");






var CharityHousesPage = /** @class */ (function () {
    function CharityHousesPage(utils, router, http, service) {
        this.utils = utils;
        this.router = router;
        this.http = http;
        this.service = service;
        this.result = [];
    }
    CharityHousesPage.prototype.loadData = function () {
        this.result = JSON.parse(localStorage.getItem('charity houses'));
    };
    CharityHousesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.service.homeUrl + '/charityHouses/list';
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.http.get(url, { observe: 'response' }).subscribe(function (response) {
                            _this.utils.stopLoading();
                            if (response.status === 200 || response.status === 201) {
                                _this.t = response.body;
                                _this.result = _this.t.content;
                                localStorage.removeItem('charity Houses');
                                localStorage.setItem('charity Houses', JSON.stringify(_this.t.content));
                            }
                        }, function (error) {
                            _this.utils.stopLoading();
                            _this.loadData();
                            console.log('error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CharityHousesPage.prototype.showSingleItem = function (item) {
        var url = "show-single-charity-house/" + item;
        this.router.navigateByUrl(url);
    };
    CharityHousesPage.prototype.updateItem = function (id) {
        var url = "update-charity-house/" + id;
        this.router.navigateByUrl(url);
    };
    CharityHousesPage.prototype.deleteCharityHouse = function (item) {
        this.utils.presentAlert('Can\'t delete. Please! contact with supper admin using <b>samraseerat786@gmail.com</b>');
        this.router.navigate(['tabs/charity-houses']);
    };
    CharityHousesPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] }
    ]; };
    CharityHousesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charity-houses',
            template: __webpack_require__(/*! raw-loader!./charity-houses.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/charity-houses/charity-houses.page.html"),
            styles: [__webpack_require__(/*! ./charity-houses.page.scss */ "./src/app/admin/charity-houses/charity-houses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"]])
    ], CharityHousesPage);
    return CharityHousesPage;
}());



/***/ })

}]);
//# sourceMappingURL=charity-houses-charity-houses-module-es5.js.map