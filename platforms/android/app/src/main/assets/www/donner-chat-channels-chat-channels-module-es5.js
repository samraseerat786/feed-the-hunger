(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-chat-channels-chat-channels-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/chat-channels/chat-channels.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/chat-channels/chat-channels.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Donner Conversation\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"channels.length > 0\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-list class=\"welcome-card\" *ngFor=\"let item of channels\">\r\n                <ion-item (click)=\"openChat(item?.name)\">\r\n                    <ion-icon slot=\"start\" name=\"person\" color=\"secondary\"></ion-icon>\r\n                    <ion-label>{{changeValue(item?.name)}}</ion-label>\r\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\" size=\"large\" color=\"secondary\"></ion-icon>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n<ion-content *ngIf=\"channels.length == 0\">\r\n    <div class=\"fullheight xc\">\r\n        <div>\r\n            <h3 class=\"item-color\">No chat</h3>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/donner/chat-channels/chat-channels.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/donner/chat-channels/chat-channels.module.ts ***!
  \**************************************************************/
/*! exports provided: ChatChannelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChannelsPageModule", function() { return ChatChannelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_channels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-channels.page */ "./src/app/donner/chat-channels/chat-channels.page.ts");







var routes = [
    {
        path: '',
        component: _chat_channels_page__WEBPACK_IMPORTED_MODULE_6__["ChatChannelsPage"]
    }
];
var ChatChannelsPageModule = /** @class */ (function () {
    function ChatChannelsPageModule() {
    }
    ChatChannelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_channels_page__WEBPACK_IMPORTED_MODULE_6__["ChatChannelsPage"]]
        })
    ], ChatChannelsPageModule);
    return ChatChannelsPageModule;
}());



/***/ }),

/***/ "./src/app/donner/chat-channels/chat-channels.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/donner/chat-channels/chat-channels.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9jaGF0LWNoYW5uZWxzL2NoYXQtY2hhbm5lbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/donner/chat-channels/chat-channels.page.ts":
/*!************************************************************!*\
  !*** ./src/app/donner/chat-channels/chat-channels.page.ts ***!
  \************************************************************/
/*! exports provided: ChatChannelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChannelsPage", function() { return ChatChannelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







var ChatChannelsPage = /** @class */ (function () {
    function ChatChannelsPage(utils, db, router, http, service) {
        this.utils = utils;
        this.db = db;
        this.router = router;
        this.http = http;
        this.service = service;
        this.channels = [];
        this.loadUser();
        this.loadData();
    }
    ChatChannelsPage.prototype.ngOnInit = function () {
        this.loadUser();
    };
    ChatChannelsPage.prototype.loadUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.compareUser = this.currentUser.user.first_name.toLowerCase() + '-' + this.currentUser.user.last_name.toLowerCase();
    };
    ChatChannelsPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.http.get(this.service.homeUrl + "/channels/list/" + this.compareUser, { observe: 'response' }).subscribe(function (response) {
                            _this.utils.stopLoading();
                            if (response.status === 200 || response.status === 201) {
                                _this.recivedData = response.body;
                                _this.channels = _this.recivedData;
                            }
                        }, function (error) {
                            _this.utils.stopLoading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatChannelsPage.prototype.openChat = function (item) {
        localStorage.setItem('channelName', JSON.stringify(item));
        this.router.navigate(['donner-chat']);
    };
    ChatChannelsPage.prototype.changeValue = function (channelName) {
        var trimString = channelName.replace(this.currentUser.user.first_name.toLowerCase(), '')
            .replace(this.currentUser.user.last_name.toLowerCase(), '')
            .split('-').join(' ');
        return trimString;
    };
    ChatChannelsPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] }
    ]; };
    ChatChannelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-channels',
            template: __webpack_require__(/*! raw-loader!./chat-channels.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/chat-channels/chat-channels.page.html"),
            styles: [__webpack_require__(/*! ./chat-channels.page.scss */ "./src/app/donner/chat-channels/chat-channels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]])
    ], ChatChannelsPage);
    return ChatChannelsPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-chat-channels-chat-channels-module-es5.js.map