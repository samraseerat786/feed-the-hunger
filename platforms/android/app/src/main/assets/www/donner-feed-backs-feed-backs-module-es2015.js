(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-feed-backs-feed-backs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/feed-backs/feed-backs.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/feed-backs/feed-backs.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Feedbacks</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"result.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\r\n                <ion-card-header>\r\n                    <ion-icon slot=\"start\" name=\"person\" color=\"secondary\"></ion-icon>\r\n                    <ion-card-title>{{item?.donner?.user?.first_name}}</ion-card-title>\r\n                    <ion-card-subtitle>{{item?.email}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <ion-text color=\"primary\">\r\n                        <h4>{{item?.subject}}</h4>\r\n                    </ion-text>\r\n                    <p>{{item?.feedbackMessage}}</p>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"result.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No Feedbacks</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/donner/feed-backs/feed-backs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/feed-backs/feed-backs.module.ts ***!
  \********************************************************/
/*! exports provided: FeedBacksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBacksPageModule", function() { return FeedBacksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_backs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-backs.page */ "./src/app/donner/feed-backs/feed-backs.page.ts");







const routes = [
    {
        path: '',
        component: _feed_backs_page__WEBPACK_IMPORTED_MODULE_6__["FeedBacksPage"]
    }
];
let FeedBacksPageModule = class FeedBacksPageModule {
};
FeedBacksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_feed_backs_page__WEBPACK_IMPORTED_MODULE_6__["FeedBacksPage"]]
    })
], FeedBacksPageModule);



/***/ }),

/***/ "./src/app/donner/feed-backs/feed-backs.page.scss":
/*!********************************************************!*\
  !*** ./src/app/donner/feed-backs/feed-backs.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9mZWVkLWJhY2tzL2ZlZWQtYmFja3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/donner/feed-backs/feed-backs.page.ts":
/*!******************************************************!*\
  !*** ./src/app/donner/feed-backs/feed-backs.page.ts ***!
  \******************************************************/
/*! exports provided: FeedBacksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBacksPage", function() { return FeedBacksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let FeedBacksPage = class FeedBacksPage {
    constructor(utils, router, storage, service, http) {
        this.utils = utils;
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.result = [];
        this.reviewsList = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = JSON.parse(localStorage.getItem('user'));
            const id = this.user.id;
            yield this.utils.presentLoading("Please wait...");
            this.http.get(`${this.service.homeUrl}/feedbacks/findByDonner/${id}`, { observe: 'response' }).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    this.reviewsList = response.body;
                    this.result = this.reviewsList.content;
                    localStorage.removeItem('reviewsList');
                    localStorage.setItem('reviewsList', JSON.stringify(this.result));
                }
            }, (error) => {
                this.utils.stopLoading();
                console.log('error', error);
            });
        });
    }
};
FeedBacksPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
FeedBacksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-backs',
        template: __webpack_require__(/*! raw-loader!./feed-backs.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/feed-backs/feed-backs.page.html"),
        styles: [__webpack_require__(/*! ./feed-backs.page.scss */ "./src/app/donner/feed-backs/feed-backs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], FeedBacksPage);



/***/ })

}]);
//# sourceMappingURL=donner-feed-backs-feed-backs-module-es2015.js.map