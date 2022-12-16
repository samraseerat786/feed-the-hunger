(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-charity-list-charity-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/charity-list/charity-list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/charity-list/charity-list.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Charity Houses\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"result.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\r\n                <ion-card-header>\r\n                    <ion-card-title>{{item?.name}}</ion-card-title>\r\n                    <ion-card-subtitle>{{item?.email}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Dependants: </p>\r\n                        <p class=\"value-p\">{{item.no_of_dependents}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Type: </p>\r\n                        <p class=\"value-p\">{{item.type}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Address: </p>\r\n                        <p class=\"value-p\">{{item?.address.streetAddress}} {{item?.address.city}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Contact Number: </p>\r\n                        <p class=\"value-p\">{{item.contact}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Bank detail: </p>\r\n                        <p class=\"value-p\">{{item.bank_name}} | {{item?.account_no}} </p>\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n\r\n                    <ion-row>\r\n                        <ion-col size=\"6\">\r\n                            <ion-button mode=\"ios\" (click)=\"donateFood(item)\" color=\"secondary\" expand=\"block\">Donate\r\n                                Food\r\n                            </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size=\"6\">\r\n                            <ion-button mode=\"ios\" (click)=\"donateFund(item)\" color=\"secondary\" expand=\"block\">Donate\r\n                                Fund\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"result.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No charity house</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/donner/charity-list/charity-list.module.ts":
/*!************************************************************!*\
  !*** ./src/app/donner/charity-list/charity-list.module.ts ***!
  \************************************************************/
/*! exports provided: CharityListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityListPageModule", function() { return CharityListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charity_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charity-list.page */ "./src/app/donner/charity-list/charity-list.page.ts");







const routes = [
    {
        path: '',
        component: _charity_list_page__WEBPACK_IMPORTED_MODULE_6__["CharityListPage"]
    }
];
let CharityListPageModule = class CharityListPageModule {
};
CharityListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_charity_list_page__WEBPACK_IMPORTED_MODULE_6__["CharityListPage"]]
    })
], CharityListPageModule);



/***/ }),

/***/ "./src/app/donner/charity-list/charity-list.page.scss":
/*!************************************************************!*\
  !*** ./src/app/donner/charity-list/charity-list.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-p {\n  font-size: 17px;\n  color: black;\n  font-weight: bold;\n}\n\n.value-p {\n  margin: 3px 0 0 7px;\n}\n\n.line {\n  background: gray;\n  height: 2px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVyL2NoYXJpdHktbGlzdC9EOlxcRllQXFxmZWVkLXRoZS1odW5kZXIvc3JjXFxhcHBcXGRvbm5lclxcY2hhcml0eS1saXN0XFxjaGFyaXR5LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9kb25uZXIvY2hhcml0eS1saXN0L2NoYXJpdHktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZG9ubmVyL2NoYXJpdHktbGlzdC9jaGFyaXR5LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kZXRhaWwtcCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnZhbHVlLXAge1xyXG4gIG1hcmdpbjogM3B4IDAgMCA3cHg7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iLCIuZGV0YWlsLXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52YWx1ZS1wIHtcbiAgbWFyZ2luOiAzcHggMCAwIDdweDtcbn1cblxuLmxpbmUge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/donner/charity-list/charity-list.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/charity-list/charity-list.page.ts ***!
  \**********************************************************/
/*! exports provided: CharityListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityListPage", function() { return CharityListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let CharityListPage = class CharityListPage {
    constructor(utils, router, storage, service, http) {
        this.utils = utils;
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.loading = true;
        this.result = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield yield this.utils.presentLoading("Please wait...");
            this.http.get(`${this.service.homeUrl}/charityHouses/list`, { observe: 'response' }).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    this.charityList = response.body;
                    this.result = this.charityList.content;
                    localStorage.removeItem('charityHouses');
                    localStorage.setItem('charityHouses', JSON.stringify(this.result));
                }
            }, (error) => {
                this.utils.stopLoading();
                this.loadData();
            });
        });
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('charityHouses'));
    }
    donateFund(item) {
        this.router.navigate(['donate-fund', item]);
    }
    donateFood(item) {
        this.router.navigate(['donate-food', item]);
    }
};
CharityListPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CharityListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-charity-list',
        template: __webpack_require__(/*! raw-loader!./charity-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/charity-list/charity-list.page.html"),
        styles: [__webpack_require__(/*! ./charity-list.page.scss */ "./src/app/donner/charity-list/charity-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CharityListPage);



/***/ })

}]);
//# sourceMappingURL=donner-charity-list-charity-list-module-es2015.js.map