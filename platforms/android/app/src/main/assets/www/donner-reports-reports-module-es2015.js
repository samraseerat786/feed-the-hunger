(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-reports-reports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/reports/reports.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/reports/reports.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button (click)=\"loadDonnerList()\" *ngIf=\"admin\"></ion-back-button>\r\n            <ion-menu-button *ngIf=\"!admin\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Reports</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!isEmpty\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-list class=\"ion-no-padding\" no-lines *ngFor=\"let item of result\">\r\n                <ion-card class=\"ion-no-padding\">\r\n                    <ion-card-header>\r\n                        <ion-card-title>{{item?.type}}</ion-card-title>\r\n                        <ion-card-subtitle>{{item?.message}}</ion-card-subtitle>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-card-content class=\"ion-no-padding\">\r\n                            <h5>From: {{ item?.charityHouse?.email }}</h5>\r\n                            <p>{{ item?.charityHouse?.name }}</p>\r\n                        </ion-card-content>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-list>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"isEmpty\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No Report</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/donner/reports/reports.module.ts":
/*!**************************************************!*\
  !*** ./src/app/donner/reports/reports.module.ts ***!
  \**************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "./src/app/donner/reports/reports.page.ts");







const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]
    }
];
let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
    })
], ReportsPageModule);



/***/ }),

/***/ "./src/app/donner/reports/reports.page.scss":
/*!**************************************************!*\
  !*** ./src/app/donner/reports/reports.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  box-shadow: none !important;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.xc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.item-color {\n  color: #bababa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVyL3JlcG9ydHMvRDpcXEZZUFxcZmVlZC10aGUtaHVuZGVyL3NyY1xcYXBwXFxkb25uZXJcXHJlcG9ydHNcXHJlcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9kb25uZXIvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZG9ubmVyL3JlcG9ydHMvcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi54YyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1jb2xvciB7XHJcbiAgY29sb3I6ICNiYWJhYmE7XHJcbn1cclxuIiwiLmJvcmRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZ1bGxoZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi54YyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1jb2xvciB7XG4gIGNvbG9yOiAjYmFiYWJhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/donner/reports/reports.page.ts":
/*!************************************************!*\
  !*** ./src/app/donner/reports/reports.page.ts ***!
  \************************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let ReportsPage = class ReportsPage {
    constructor(utils, router, route, storage, service, http) {
        this.utils = utils;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.reportList = [];
        this.result = [];
        this.isEmpty = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.route.paramMap.subscribe(paramMap => {
                this.donnerID = paramMap.get('id');
            });
            yield this.utils.presentLoading("Please wait...");
            this.http.get(`${this.service.homeUrl}/reports/findByDonner/${this.donnerID}`, { observe: 'response' }).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    this.reportList = response.body;
                    this.result = this.reportList.content;
                    if (this.result.length === 0) {
                        this.isEmpty = true;
                    }
                    localStorage.removeItem('reportList');
                    localStorage.setItem('reportList', JSON.stringify(this.result));
                }
            }, (error) => {
                this.utils.stopLoading();
                console.log('error', error);
            });
            this.loadData();
        });
    }
    loadData() {
        // this.result = JSON.parse(localStorage.getItem('user'));
        this.user = localStorage.getItem('role');
        if (this.user === 'donner') {
            this.donner = true;
        }
        if (this.user === 'admin') {
            this.admin = true;
        }
    }
    loadDonnerList() {
        if (this.admin) {
            this.router.navigate(['/tabs']);
        }
        else {
            this.router.navigate(['/profile']);
        }
    }
};
ReportsPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/reports/reports.page.html"),
        styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/donner/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], ReportsPage);



/***/ })

}]);
//# sourceMappingURL=donner-reports-reports-module-es2015.js.map