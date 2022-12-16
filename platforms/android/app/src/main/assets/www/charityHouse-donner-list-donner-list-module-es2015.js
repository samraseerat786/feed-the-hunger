(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-donner-list-donner-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/donner-list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/donner-list/donner-list.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Donner List\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"result.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\r\n                <ion-card-header>\r\n                    <ion-card-title>{{item?.user.first_name}} {{item?.user.last_name}}</ion-card-title>\r\n                    <ion-card-subtitle>{{item?.user.email}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <ion-row>\r\n                        <ion-col size=\"10\">\r\n                            <div *ngIf=\"item.rating == 0\">\r\n                                <ion-icon *ngFor=\"let i of allInActiveStars\" name=\"star\" size=\"large\"\r\n                                          style=\"color: lightgray\"></ion-icon>\r\n                                <ion-label>no rating</ion-label>\r\n                            </div>\r\n                            <div *ngIf=\"item.rating > 0\">\r\n                                <ion-icon *ngFor=\"let i of item.activeStars\" name=\"star\" size=\"large\"\r\n                                          color=\"secondary\"></ion-icon>\r\n                                <ion-icon *ngIf=\"item.isHelfStar\" name=\"star-half\" size=\"large\"\r\n                                          color=\"secondary\"></ion-icon>\r\n                                <ion-icon *ngFor=\"let i of item.inActiveStars\" name=\"star-outline\" size=\"large\"\r\n                                          color=\"secondary\"></ion-icon>\r\n                                <ion-label>{{item.rating}}</ion-label>\r\n                            </div>\r\n                            <br>\r\n                        </ion-col>\r\n                        <ion-col align-items-start size=\"2\">\r\n                            <ion-icon size=\"large\" class=\"msg-btn\" style=\"cursor: pointer\"\r\n                                      (click)=\"openChat(item?.user.first_name, item?.user.last_name)\"\r\n                                      ios=\"ios-chatboxes\" md=\"md-chatboxes\" color=\"secondary\"></ion-icon>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Contact Number: </p>\r\n                        <p class=\"value-p\">{{item.contact}}</p>\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n\r\n                    <ion-row>\r\n                        <ion-col size=\"4\">\r\n                            <ion-button mode=\"ios\" (click)=\"feedBack(item)\" color=\"secondary\" expand=\"block\">Send\r\n                                Feedback\r\n                            </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size=\"4\">\r\n                            <ion-button mode=\"ios\" (click)=\"review($event, item)\" color=\"secondary\" expand=\"block\">Add\r\n                                Review\r\n                            </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size=\"4\">\r\n                            <ion-button mode=\"ios\" (click)=\"sendReport(item)\" color=\"danger\" expand=\"block\">Report\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"result.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No donor found</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/review/review.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/donner-list/review/review.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <form [formGroup]=\"reviewForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"12\">\r\n                    <div>\r\n                        <ion-icon size=\"large\" color=\"{{c1}}\" (click)=\" clickFirst(1)\" name=\"{{n1}}\"></ion-icon>\r\n                        <ion-icon size=\"large\" color=\"{{c2}}\" (click)=\" clickSecond(2)\" name=\"{{n2}}\"></ion-icon>\r\n                        <ion-icon size=\"large\" color=\"{{c3}}\" (click)=\" clickThird(3)\" name=\"{{n3}}\"></ion-icon>\r\n                        <ion-icon size=\"large\" color=\"{{c4}}\" (click)=\" clickForth(4)\" name=\"{{n4}}\"></ion-icon>\r\n                        <ion-icon size=\"large\" color=\"{{c5}}\" (click)=\" clickFifth(5)\" name=\"{{n5}}\"></ion-icon>\r\n                    </div>\r\n                    <ion-item>\r\n                        <ion-input placeholder=\"I Like That Donner\" formControlName=\"title\"></ion-input>\r\n                    </ion-item>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button size=\"default\" (click)=\"addReview()\" color=\"secondary\" type=\"submit\" expand=\"block\">\r\n                            SUBMIT\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/charityHouse/donner-list/donner-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/donner-list.module.ts ***!
  \****************************************************************/
/*! exports provided: DonnerListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerListPageModule", function() { return DonnerListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donner_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donner-list.page */ "./src/app/charityHouse/donner-list/donner-list.page.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/charityHouse/donner-list/review/review.component.ts");







// import {ReviewComponent} from './review/review.component';

const routes = [
    {
        path: '',
        component: _donner_list_page__WEBPACK_IMPORTED_MODULE_6__["DonnerListPage"]
    }
];
let DonnerListPageModule = class DonnerListPageModule {
};
DonnerListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        entryComponents: [_review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"]],
        declarations: [_donner_list_page__WEBPACK_IMPORTED_MODULE_6__["DonnerListPage"], _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"]]
    })
], DonnerListPageModule);



/***/ }),

/***/ "./src/app/charityHouse/donner-list/donner-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/donner-list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.msg-btn {\n  padding-top: 5px;\n}\n\n.detail-p {\n  font-size: 17px;\n  color: black;\n  font-weight: bold;\n}\n\n.value-p {\n  margin: 3px 0 0 7px;\n}\n\n.line {\n  background: gray;\n  height: 2px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUhvdXNlL2Rvbm5lci1saXN0L0Q6XFxGWVBcXGZlZWQtdGhlLWh1bmRlci9zcmNcXGFwcFxcY2hhcml0eUhvdXNlXFxkb25uZXItbGlzdFxcZG9ubmVyLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9jaGFyaXR5SG91c2UvZG9ubmVyLWxpc3QvZG9ubmVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGFyaXR5SG91c2UvZG9ubmVyLWxpc3QvZG9ubmVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3Qge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubXNnLWJ0biB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmRldGFpbC1wIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udmFsdWUtcCB7XHJcbiAgbWFyZ2luOiAzcHggMCAwIDdweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi50ZXN0IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ubXNnLWJ0biB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5kZXRhaWwtcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZhbHVlLXAge1xuICBtYXJnaW46IDNweCAwIDAgN3B4O1xufVxuXG4ubGluZSB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/charityHouse/donner-list/donner-list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/donner-list.page.ts ***!
  \**************************************************************/
/*! exports provided: DonnerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerListPage", function() { return DonnerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/charityHouse/donner-list/review/review.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");









let DonnerListPage = class DonnerListPage {
    constructor(utils, router, popoverController, storage, service, http) {
        this.utils = utils;
        this.router = router;
        this.popoverController = popoverController;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.result = [];
        // activeStars = [1, 2, 3, 4];
        // inActiveStars = [1, 2, 3, 4, 5];
        this.allInActiveStars = [1, 2, 3, 4, 5];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.utils.presentLoading("Please wait...");
            this.http.get(`${this.service.homeUrl}/donners/list`, { observe: 'response' }).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    this.donnerList = response.body;
                    for (let i = 0; i < this.donnerList.length; i++) {
                        let donor = this.donnerList[i].donor;
                        donor['rating'] = this.donnerList[i].rating.toFixed(1);
                        donor['inActiveStars'] = this.createArrayByNumber(5 - parseInt(donor.rating));
                        donor['activeStars'] = this.createArrayByNumber(parseInt(donor.rating));
                        if (donor.rating % 1 == 0) {
                            donor['isHelfStar'] = false;
                        }
                        else {
                            donor['isHelfStar'] = true;
                            donor.inActiveStars.splice(-1);
                        }
                        console.log(donor);
                        this.result.push(donor);
                    }
                    localStorage.removeItem('donners');
                    localStorage.setItem('donners', JSON.stringify(this.result));
                }
            }, (error) => {
                this.utils.stopLoading();
                this.loadData();
                console.log('error', error);
            });
        });
    }
    createArrayByNumber(num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        return arr;
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('donners'));
    }
    review(myEvent, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const review = yield this.popoverController.create({
                component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"],
                componentProps: { id: item.id }
            });
            return yield review.present();
        });
    }
    feedBack(item) {
        // const url = `feedback/${item.id}`;
        this.router.navigate(['feedback', item]);
    }
    active($event) {
    }
    openChat(first, last) {
        localStorage.setItem('donnerName', JSON.stringify(first.toLowerCase() + '-' + last.toLowerCase()));
        this.router.navigate(['charity-house-chat']);
    }
    sendReport(item) {
        this.router.navigate(['send-report', item]);
    }
};
DonnerListPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DonnerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donner-list',
        template: __webpack_require__(/*! raw-loader!./donner-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/donner-list.page.html"),
        styles: [__webpack_require__(/*! ./donner-list.page.scss */ "./src/app/charityHouse/donner-list/donner-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], DonnerListPage);



/***/ }),

/***/ "./src/app/charityHouse/donner-list/review/review.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/review/review.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlIb3VzZS9kb25uZXItbGlzdC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/charityHouse/donner-list/review/review.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/review/review.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/utils.service */ "./src/app/services/utils.service.ts");








let ReviewComponent = class ReviewComponent {
    constructor(utils, popoverController, navParams, router, http, service, formBuilder) {
        this.utils = utils;
        this.popoverController = popoverController;
        this.navParams = navParams;
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
    }
    ngOnInit() {
        this.id = this.navParams.data.id;
        console.log('id ' + this.id);
        this.donnerID = this.id;
        this.formInitializer();
    }
    formInitializer() {
        this.reviewForm = this.formBuilder.group({
            stars: [this.star, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    clickFirst(item) {
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.n1 = 'star';
    }
    clickSecond(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
    }
    clickThird(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
    }
    clickForth(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.c4 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
        this.n4 = 'star';
    }
    clickFifth(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.c4 = 'primary';
        this.c5 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
        this.n4 = 'star';
        this.n5 = 'star';
    }
    addReview() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const test = this.reviewForm.value;
            const charityHouse = JSON.parse(localStorage.getItem('user'));
            const charityID = charityHouse.id;
            this.finalReviewObject = '{"star": ' + this.star + ',' +
                '"title": "' + test.title + '",' +
                '"donner": { "id": ' + this.donnerID + '},' +
                '"charityHouse": { "id": ' + charityID + '}' + '}';
            const review = JSON.parse(this.finalReviewObject);
            yield this.utils.presentLoading("Please wait...");
            yield this.popoverController.dismiss();
            this.saveReview(review).subscribe(data => {
                this.utils.stopLoading();
                this.router.navigate(['donner-list']);
            }, error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
        });
    }
    saveReview(dataObj) {
        const url = `${this.service.homeUrl}/reviews/newReview`;
        return this.http.post(url, dataObj);
    }
};
ReviewComponent.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/review/review.component.html"),
        styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/charityHouse/donner-list/review/review.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], ReviewComponent);



/***/ })

}]);
//# sourceMappingURL=charityHouse-donner-list-donner-list-module-es2015.js.map