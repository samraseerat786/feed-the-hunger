(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-chat-list-chat-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/chat-list/chat-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/chat-list/chat-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Help Conversation\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-list>\r\n                <ion-item (click)=\"openChat(item?.user_name)\" *ngFor=\"let item of users\">\r\n                    <ion-icon slot=\"start\" name=\"person\" color=\"secondary\"></ion-icon>\r\n                    <p>{{item?.first_name}} {{item?.last_name}}</p>\r\n                    <ion-img *ngIf=\"item?.role == 'charity house'\" style=\"width: 40px; height: 40px;\"\r\n                             src=\"/assets/charity.jpg\"\r\n                             alt=\"update\" slot=\"end\"></ion-img>\r\n                    <ion-img *ngIf=\"item?.role == 'donner'\" style=\"width: 40px; height: 40px;\"\r\n                             src=\"/assets/restaurant.ico\"\r\n                             alt=\"update\" slot=\"end\"></ion-img>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/chat-list/chat-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/chat-list/chat-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function() { return ChatListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-list.page */ "./src/app/admin/chat-list/chat-list.page.ts");







var routes = [
    {
        path: '',
        component: _chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]
    }
];
var ChatListPageModule = /** @class */ (function () {
    function ChatListPageModule() {
    }
    ChatListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]]
        })
    ], ChatListPageModule);
    return ChatListPageModule;
}());



/***/ }),

/***/ "./src/app/admin/chat-list/chat-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin/chat-list/chat-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXQtbGlzdC9jaGF0LWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/chat-list/chat-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/chat-list/chat-list.page.ts ***!
  \***************************************************/
/*! exports provided: ChatListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPage", function() { return ChatListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







var ChatListPage = /** @class */ (function () {
    function ChatListPage(utils, db, router, http, service) {
        this.utils = utils;
        this.db = db;
        this.router = router;
        this.http = http;
        this.service = service;
        this.users = [];
        this.loadData();
    }
    ChatListPage.prototype.ngOnInit = function () {
    };
    ChatListPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.http.get(this.service.homeUrl + "/channels/conversation-user-list", { observe: 'response' }).subscribe(function (response) {
                            _this.utils.stopLoading();
                            if (response.status === 200 || response.status === 201) {
                                _this.recivedData = response.body;
                                _this.users = _this.recivedData;
                            }
                        }, function (error) {
                            _this.utils.stopLoading();
                            console.log('error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatListPage.prototype.openChat = function (item) {
        localStorage.setItem('chatUsername', JSON.stringify(item));
        this.router.navigate(['admin-chat']);
    };
    ChatListPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] }
    ]; };
    ChatListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! raw-loader!./chat-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/chat-list/chat-list.page.html"),
            styles: [__webpack_require__(/*! ./chat-list.page.scss */ "./src/app/admin/chat-list/chat-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]])
    ], ChatListPage);
    return ChatListPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-chat-list-chat-list-module-es5.js.map