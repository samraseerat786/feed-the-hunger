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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charity_houses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charity-houses.page */ "./src/app/admin/charity-houses/charity-houses.page.ts");







const routes = [
    {
        path: '',
        component: _charity_houses_page__WEBPACK_IMPORTED_MODULE_6__["CharityHousesPage"]
    }
];
let CharityHousesPageModule = class CharityHousesPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");






let CharityHousesPage = class CharityHousesPage {
    constructor(utils, router, http, service) {
        this.utils = utils;
        this.router = router;
        this.http = http;
        this.service = service;
        this.result = [];
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('charity houses'));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = this.service.homeUrl + '/charityHouses/list';
            yield this.utils.presentLoading("Please wait...");
            this.http.get(url, { observe: 'response' }).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    this.t = response.body;
                    this.result = this.t.content;
                    localStorage.removeItem('charity Houses');
                    localStorage.setItem('charity Houses', JSON.stringify(this.t.content));
                }
            }, (error) => {
                this.utils.stopLoading();
                this.loadData();
                console.log('error', error);
            });
        });
    }
    showSingleItem(item) {
        const url = `show-single-charity-house/${item}`;
        this.router.navigateByUrl(url);
    }
    updateItem(id) {
        const url = `update-charity-house/${id}`;
        this.router.navigateByUrl(url);
    }
    deleteCharityHouse(item) {
        this.utils.presentAlert('Can\'t delete. Please! contact with supper admin using <b>samraseerat786@gmail.com</b>');
        this.router.navigate(['tabs/charity-houses']);
    }
};
CharityHousesPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=charity-houses-charity-houses-module-es2015.js.map