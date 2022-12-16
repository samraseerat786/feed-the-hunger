(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/detail/detail.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/detail/detail.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Details</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\">\r\n                <ion-card-header>\r\n                    <ion-card-title>{{user?.user?.first_name}}</ion-card-title>\r\n                    <ion-card-subtitle>{{user?.user?.last_name}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <p> Mr. {{user?.user?.first_name}} {{user?.user?.last_name}} is a {{user?.user?.role}} User of this\r\n                        system.\r\n                        His\r\n                        Contact number is {{user?.contact}} and address is {{user?.address}}</p>\r\n                    <p>Username of the user is {{user?.user?.user_name}} and password is {{user?.user?.password}} and\r\n                        email\r\n                        is {{user?.user?.email}}.</p>\r\n                    <ion-item lines=\"none\">\r\n                        <ion-button style=\"height: 40px\" (click)=\"loadReports(user.id)\" slot=\"start\">View Reports\r\n                        </ion-button>\r\n                        <ion-img (click)=\"contactDonner(user?.user?.email)\" style=\"width: 50px; height: 50px;\"\r\n                                 src=\"/assets/phone-icon.svg\" alt=\"update\" slot=\"end\"></ion-img>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/detail/detail.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/detail/detail.module.ts ***!
  \***********************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/admin/detail/detail.page.ts");







const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/admin/detail/detail.page.scss":
/*!***********************************************!*\
  !*** ./src/app/admin/detail/detail.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/detail/detail.page.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/detail/detail.page.ts ***!
  \*********************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");






let DetailPage = class DetailPage {
    constructor(utils, route, service, http, router) {
        this.utils = utils;
        this.route = route;
        this.service = service;
        this.http = http;
        this.router = router;
        this.result = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/donners/findById/${val}`;
            yield this.utils.presentLoading("Please wait...");
            this.data = this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
            });
        }));
    }
    contactDonner(contactNumber) {
        this.utils.presentAlert('You can contact with owner via <b>' + contactNumber + ' </b>.');
    }
    loadReports(id) {
        const url = `reports/${id}`;
        this.router.navigateByUrl(url);
    }
};
DetailPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/admin/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=admin-detail-detail-module-es2015.js.map