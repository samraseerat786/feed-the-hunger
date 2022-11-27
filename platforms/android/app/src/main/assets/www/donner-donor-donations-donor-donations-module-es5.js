(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donor-donations-donor-donations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donor-donations/donor-donations.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donor-donations/donor-donations.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            My Donations\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"result.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\r\n                <ion-card-header *ngIf=\"item.donationType == 'food'\">\r\n                    <ion-card-title>{{item.foodName}}</ion-card-title>\r\n                    <ion-card-subtitle>Donated On {{item.date | date: 'MMMM d, y, h:mm a'}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content *ngIf=\"item.donationType == 'food'\">\r\n                    <img alt=\"food-image\" [src]=\"item.foodImage\" class=\"food-image\">\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Food Item:</p>\r\n                        <p class=\"value-p\"> {{item.foodType}}, {{item.quantityValue}} {{item.quantityUnit}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Expiry date: </p>\r\n                        <p class=\"value-p\">{{item.expiryDate | date: 'MMMM d, y, h:mm a'}}</p>\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n                    <ion-row>\r\n                        <ion-col size-md=\"10\">\r\n                            <div>\r\n                                <p class=\"detail-p\">To:</p>\r\n                            </div>\r\n                            <div>\r\n                                <p class=\"detail-p\"> {{item.toName}}</p>\r\n                                <p class=\"value-p\"> {{item.toEmail}}</p>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"2\">\r\n                            <img (click)=\"openChat(item.fromFirstName, item.fromLastName, item.toFirstName, item.toLastName)\"\r\n                                 class=\"chatIcon\" src=\"/assets/chatbox-ellipses-outline.svg\" alt=\"status\"/>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <div class=\"line\"></div>\r\n                    <ion-row>\r\n                        <ion-col size-md=\"10\">\r\n                            <p class=\"detail-p\">Status</p>\r\n                            <p>{{item.status}} | {{item.acceptanceTime}}</p>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"2\">\r\n                            <img *ngIf=\"item?.status == 'new'\" class=\"statusIcon\" src=\"/assets/checkmark-outline.svg\"\r\n                                 alt=\"status\"/>\r\n                            <img *ngIf=\"item?.status == 'accepted'\" class=\"statusIcon\"\r\n                                 src=\"/assets/checkmark-done-outline.svg\" alt=\"status\"/>\r\n                            <img *ngIf=\"item?.status == 'rejected'\" class=\"statusIcon\" src=\"/assets/close-icon.svg\"\r\n                                 alt=\"status\"/>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n\r\n                <ion-card-header *ngIf=\"item.donationType == 'fund'\">\r\n                    <ion-card-title>{{item.amount}} {{item.currency}}</ion-card-title>\r\n                    <ion-card-subtitle>Donated On {{item.date | date: 'MMMM d, y, h:mm a'}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content *ngIf=\"item.donationType == 'fund'\">\r\n\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">From card:</p>\r\n                        <p class=\"value-p\"> {{item.donorCard}}</p>\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n                    <ion-row>\r\n                        <ion-col size-md=\"10\">\r\n                            <div>\r\n                                <p class=\"detail-p\">To:</p>\r\n                            </div>\r\n                            <div>\r\n                                <p class=\"detail-p\"> {{item.toName}}</p>\r\n                                <p class=\"value-p\"> {{item.toEmail}}</p>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"2\">\r\n                            <img (click)=\"openChat(item.fromFirstName, item.fromLastName, item.toFirstName, item.toLastName)\"\r\n                                 class=\"chatIcon\" src=\"/assets/chatbox-ellipses-outline.svg\" alt=\"status\"/>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <div class=\"line\"></div>\r\n                    <ion-row>\r\n                        <ion-col size-md=\"10\">\r\n                            <p class=\"detail-p\">Status</p>\r\n                            <p>{{item.status}} | {{item.acceptanceTime}}</p>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"2\">\r\n                            <img *ngIf=\"item.status == 'new'\" class=\"statusIcon\" src=\"/assets/checkmark-outline.svg\"\r\n                                 alt=\"status\"/>\r\n                            <img *ngIf=\"item.status == 'accepted'\" class=\"statusIcon\"\r\n                                 src=\"/assets/checkmark-done-outline.svg\" alt=\"status\"/>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"result.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No donation</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/donner/donor-donations/donor-donations.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/donner/donor-donations/donor-donations.module.ts ***!
  \******************************************************************/
/*! exports provided: DonorDonationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorDonationsPageModule", function() { return DonorDonationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donor_donations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donor-donations.page */ "./src/app/donner/donor-donations/donor-donations.page.ts");







var routes = [
    {
        path: '',
        component: _donor_donations_page__WEBPACK_IMPORTED_MODULE_6__["DonorDonationsPage"]
    }
];
var DonorDonationsPageModule = /** @class */ (function () {
    function DonorDonationsPageModule() {
    }
    DonorDonationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_donor_donations_page__WEBPACK_IMPORTED_MODULE_6__["DonorDonationsPage"]]
        })
    ], DonorDonationsPageModule);
    return DonorDonationsPageModule;
}());



/***/ }),

/***/ "./src/app/donner/donor-donations/donor-donations.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/donner/donor-donations/donor-donations.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".food-image {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.detail-p {\n  font-size: 17px;\n  color: black;\n  font-weight: bold;\n}\n\n.value-p {\n  margin: 3px 0 0 7px;\n}\n\n.line {\n  background: gray;\n  height: 2px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.statusIcon {\n  width: 30px;\n  height: 30px;\n  float: right;\n}\n\n.chatIcon {\n  width: 30px;\n  height: 30px;\n  float: right;\n  margin-top: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVyL2Rvbm9yLWRvbmF0aW9ucy9EOlxcRllQXFxmZWVkLXRoZS1odW5kZXIvc3JjXFxhcHBcXGRvbm5lclxcZG9ub3ItZG9uYXRpb25zXFxkb25vci1kb25hdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9kb25uZXIvZG9ub3ItZG9uYXRpb25zL2Rvbm9yLWRvbmF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZG9ubmVyL2Rvbm9yLWRvbmF0aW9ucy9kb25vci1kb25hdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb29kLWltYWdlIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRldGFpbC1wIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udmFsdWUtcCB7XHJcbiAgbWFyZ2luOiAzcHggMCAwIDdweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdHVzSWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZsb2F0OiByaWdodFxyXG59XHJcblxyXG4uY2hhdEljb24ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmZvb2QtaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbC1wIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udmFsdWUtcCB7XG4gIG1hcmdpbjogM3B4IDAgMCA3cHg7XG59XG5cbi5saW5lIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgaGVpZ2h0OiAycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGF0dXNJY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2hhdEljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/donner/donor-donations/donor-donations.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/donner/donor-donations/donor-donations.page.ts ***!
  \****************************************************************/
/*! exports provided: DonorDonationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorDonationsPage", function() { return DonorDonationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");








var DonorDonationsPage = /** @class */ (function () {
    function DonorDonationsPage(utils, router, storage, authService, service, http) {
        this.utils = utils;
        this.router = router;
        this.storage = storage;
        this.authService = authService;
        this.service = service;
        this.http = http;
        this.loading = true;
        this.result = [];
    }
    DonorDonationsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = this.authService.getUser();
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1: return [4 /*yield*/, _a.sent()];
                    case 2:
                        _a.sent();
                        this.http.get(this.service.homeUrl + "/donations/find-by-id?id=" + this.user.id + "&user=donor", { observe: 'response' }).subscribe(function (response) {
                            _this.utils.stopLoading();
                            if (response.status === 200 || response.status === 201) {
                                console.log(response.body);
                                _this.result = response.body;
                                localStorage.removeItem('donorDonation');
                                localStorage.setItem('donorDonation', JSON.stringify(_this.result));
                            }
                        }, function (error) {
                            _this.utils.stopLoading();
                            _this.loadData();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DonorDonationsPage.prototype.loadData = function () {
        this.result = JSON.parse(localStorage.getItem('donorDonation'));
    };
    DonorDonationsPage.prototype.openChat = function (donorFirst, donorLast, ngoFirstname, ngoLastname) {
        var donor = donorFirst.toLowerCase() + "-" + donorLast.toLowerCase();
        var ngo = ngoFirstname.toLowerCase() + "-" + ngoLastname.toLowerCase();
        localStorage.setItem('channelName', JSON.stringify(donor + "-" + ngo));
        this.router.navigate(['donner-chat']);
    };
    DonorDonationsPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    DonorDonationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donor-donations',
            template: __webpack_require__(/*! raw-loader!./donor-donations.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donor-donations/donor-donations.page.html"),
            styles: [__webpack_require__(/*! ./donor-donations.page.scss */ "./src/app/donner/donor-donations/donor-donations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], DonorDonationsPage);
    return DonorDonationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-donor-donations-donor-donations-module-es5.js.map