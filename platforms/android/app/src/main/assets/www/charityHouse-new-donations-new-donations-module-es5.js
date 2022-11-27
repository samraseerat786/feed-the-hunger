(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-new-donations-new-donations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/new-donations/new-donations.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/new-donations/new-donations.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            New Donations\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"result.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\r\n                <ion-card-header *ngIf=\"item.donationType == 'food'\">\r\n                    <ion-card-title>{{item.foodName}}</ion-card-title>\r\n                    <ion-card-subtitle>Donated On {{item.date | date: 'MMMM d, y, h:mm a'}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content *ngIf=\"item.donationType == 'food'\">\r\n                    <img alt=\"food-image\" [src]=\"item.foodImage\" class=\"food-image\">\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Food Item:</p>\r\n                        <p class=\"value-p\"> {{item.foodType}}, {{item.quantityValue}} {{item.quantityUnit}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                        <p class=\"detail-p\">Expiry date: </p>\r\n                        <p class=\"value-p\">{{item.expiryDate | date: 'MMMM d, y, h:mm a'}}</p>\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n                    <div>\r\n                        <p class=\"detail-p\">From:</p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"detail-p\"> {{item.fromFirstName}} {{item.fromLastName}}</p>\r\n                        <p class=\"value-p\"> {{item.fromEmail}}</p>\r\n                    </div>\r\n                    <ion-row>\r\n                        <ion-col size-md=\"4\">\r\n                            <ion-button size=\"default\" (click)=\"acceptFood(item.id)\"\r\n                                        color=\"success\" expand=\"block\">Accept\r\n                            </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"4\">\r\n                            <ion-button size=\"default\" (click)=\"rejectFood(item.id)\"\r\n                                        color=\"danger\" expand=\"block\">Reject\r\n                            </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"4\">\r\n                            <ion-button size=\"default\" (click)=\"openChat(item.fromFirstName, item.fromLastName)\"\r\n                                        color=\"primary\" expand=\"block\">Message\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n\r\n                <ion-card-header *ngIf=\"item.donationType == 'fund'\">\r\n                    <ion-card-title>{{item.amount}} {{item.currency}}</ion-card-title>\r\n                    <ion-card-subtitle>Recieved On {{item.date | date: 'MMMM d, y, h:mm a'}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content *ngIf=\"item.donationType == 'fund'\">\r\n                    <div>\r\n                        <p class=\"detail-p\">From:</p>\r\n                    </div>\r\n                    <div>\r\n                        <p class=\"detail-p\"> {{item.fromFirstName}} {{item.fromLastName}}</p>\r\n                        <p class=\"value-p\"> {{item.fromEmail}}</p>\r\n                    </div>\r\n                    <ion-row>\r\n                        <ion-col size-md=\"6\">\r\n                            <ion-button size=\"default\" (click)=\"acceptOrRejectDonation(item.id, 'accepted', '')\"\r\n                                        color=\"success\" expand=\"block\">Acknowledge\r\n                            </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size-md=\"6\">\r\n                            <ion-button size=\"default\" (click)=\"openChat(item.fromFirstName, item.fromLastName)\"\r\n                                        color=\"primary\" expand=\"block\">Message\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"result.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">New donations not found</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/charityHouse/new-donations/new-donations.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/charityHouse/new-donations/new-donations.module.ts ***!
  \********************************************************************/
/*! exports provided: NewDonationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDonationsPageModule", function() { return NewDonationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_donations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-donations.page */ "./src/app/charityHouse/new-donations/new-donations.page.ts");







var routes = [
    {
        path: '',
        component: _new_donations_page__WEBPACK_IMPORTED_MODULE_6__["NewDonationsPage"]
    }
];
var NewDonationsPageModule = /** @class */ (function () {
    function NewDonationsPageModule() {
    }
    NewDonationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_donations_page__WEBPACK_IMPORTED_MODULE_6__["NewDonationsPage"]]
        })
    ], NewDonationsPageModule);
    return NewDonationsPageModule;
}());



/***/ }),

/***/ "./src/app/charityHouse/new-donations/new-donations.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/charityHouse/new-donations/new-donations.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".food-image {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.detail-p {\n  font-size: 17px;\n  color: black;\n  font-weight: bold;\n}\n\n.value-p {\n  margin: 3px 0 0 7px;\n}\n\n.line {\n  background: gray;\n  height: 2px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUhvdXNlL25ldy1kb25hdGlvbnMvRDpcXEZZUFxcZmVlZC10aGUtaHVuZGVyL3NyY1xcYXBwXFxjaGFyaXR5SG91c2VcXG5ldy1kb25hdGlvbnNcXG5ldy1kb25hdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9jaGFyaXR5SG91c2UvbmV3LWRvbmF0aW9ucy9uZXctZG9uYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlIb3VzZS9uZXctZG9uYXRpb25zL25ldy1kb25hdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb29kLWltYWdlIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRldGFpbC1wIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udmFsdWUtcCB7XHJcbiAgbWFyZ2luOiAzcHggMCAwIDdweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5mb29kLWltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWwtcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZhbHVlLXAge1xuICBtYXJnaW46IDNweCAwIDAgN3B4O1xufVxuXG4ubGluZSB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/charityHouse/new-donations/new-donations.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/charityHouse/new-donations/new-donations.page.ts ***!
  \******************************************************************/
/*! exports provided: NewDonationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDonationsPage", function() { return NewDonationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var NewDonationsPage = /** @class */ (function () {
    function NewDonationsPage(utils, router, storage, authService, service, http, alertCtrl) {
        this.utils = utils;
        this.router = router;
        this.storage = storage;
        this.authService = authService;
        this.service = service;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loading = true;
        this.result = [];
    }
    NewDonationsPage.prototype.ngOnInit = function () {
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
                        this.http.get(this.service.homeUrl + "/donations/find-by-id?id=" + this.user.id + "&user=ngo", { observe: 'response' }).subscribe(function (response) {
                            _this.utils.stopLoading();
                            if (response.status === 200 || response.status === 201) {
                                console.log(response.body);
                                _this.result = response.body;
                                _this.result = _this.result.filter(function (d) { return d.status == 'new'; });
                                localStorage.removeItem('newDonation');
                                localStorage.setItem('newDonation', JSON.stringify(_this.result));
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
    NewDonationsPage.prototype.loadData = function () {
        this.result = JSON.parse(localStorage.getItem('newDonation'));
    };
    NewDonationsPage.prototype.openChat = function (first, last) {
        localStorage.setItem('donnerName', JSON.stringify(first.toLowerCase() + '-' + last.toLowerCase()));
        this.router.navigate(['charity-house-chat']);
    };
    NewDonationsPage.prototype.acceptFood = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, minTime, maxTime, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        minTime = date.getHours() + ":" + date.getMinutes();
                        maxTime = date.getHours() + 5 + ":" + date.getMinutes();
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Alert !',
                                message: "Please select time to pick the food.",
                                inputs: [{
                                        type: 'time',
                                        name: 'date',
                                        placeholder: 'Select Time',
                                        max: "" + maxTime,
                                        min: "" + minTime,
                                    }],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                        }
                                    }, {
                                        text: 'Okay',
                                        cssClass: 'primary',
                                        handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var dateTime;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log(data.date);
                                                        if (!(data.date == '')) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, this.utils.presentAlert("Please select food picking time.")];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                    case 2:
                                                        dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + data.date + ":00";
                                                        this.acceptOrRejectDonation(id, 'accepted', dateTime);
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewDonationsPage.prototype.rejectFood = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert !',
                            message: "Are you sure, you want to reject the Food donation?",
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Yes',
                                    cssClass: 'primary',
                                    handler: function () {
                                        _this.acceptOrRejectDonation(id, 'rejected', '');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewDonationsPage.prototype.acceptOrRejectDonation = function (id, status, time) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, acceptanceDate;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1: return [4 /*yield*/, _a.sent()];
                    case 2:
                        _a.sent();
                        date = new Date();
                        acceptanceDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        if (time != '') {
                            acceptanceDate = time;
                        }
                        this.http.get(this.service.homeUrl + "/donations/update-donation-by-id?id=" + id + "&status=" + status + "&time=" + acceptanceDate, { observe: 'response' }).subscribe(function (response) {
                            _this.utils.stopLoading();
                            if (response.status === 200 || response.status === 201) {
                                console.log(response.body);
                                if (response.body) {
                                    _this.utils.presentAlert("Donation acknowledged. Thanks for your acknowledgement.");
                                    _this.deleteById(id);
                                }
                                else {
                                    _this.utils.presentAlert("Oops ! Something went wrong while acknowledging the fund.");
                                }
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
    NewDonationsPage.prototype.deleteById = function (id) {
        this.result.splice(this.result.findIndex(function (i) {
            return i.id === id;
        }), 1);
    };
    NewDonationsPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
    ]; };
    NewDonationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-donations',
            template: __webpack_require__(/*! raw-loader!./new-donations.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/new-donations/new-donations.page.html"),
            styles: [__webpack_require__(/*! ./new-donations.page.scss */ "./src/app/charityHouse/new-donations/new-donations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
    ], NewDonationsPage);
    return NewDonationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=charityHouse-new-donations-new-donations-module-es5.js.map