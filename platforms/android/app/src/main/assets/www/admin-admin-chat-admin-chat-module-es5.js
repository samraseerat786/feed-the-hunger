(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-chat-admin-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-chat/admin-chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-chat/admin-chat.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"success\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Admin Chat</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-grid>\r\n                <ion-row *ngFor=\"let message of messages\">\r\n                    <ion-col size=\"9\" *ngIf=\"currentUser !== message?.sender\" class=\"message other-message\">\r\n                        <b>{{message?.sender}}</b><br>\r\n                        <span>{{message?.message}}</span>\r\n                        <div class=\"time\" text-right><br>\r\n                            {{message.createdAt | date:'short'}}</div>\r\n                    </ion-col>\r\n\r\n                    <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sender\" class=\"message my-message\">\r\n                        <b>{{message?.sender}}</b><br>\r\n                        <span>{{message?.message}}</span>\r\n                        <div class=\"time\" text-right><br>\r\n                            {{message.createdAt | date:'short'}}</div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar color=\"light\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                <ion-item color=\"light\">\r\n                    <textarea placeholder=\"Enter your message\" autosize [maxRows]=\"3\" [(ngModel)]=\"newMsg\"\r\n                              class=\"message-input\"></textarea>\r\n                    <ion-icon (click)=\"sendMessage()\" name=\"send\" size=\"large\"\r\n                              slot=\"end\" color=\"success\" mode=\"md\" class=\"sendIcon\"></ion-icon>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-chat/admin-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-chat/admin-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminChatPageModule", function() { return AdminChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-chat.page */ "./src/app/admin/admin-chat/admin-chat.page.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");








var routes = [
    {
        path: '',
        component: _admin_chat_page__WEBPACK_IMPORTED_MODULE_6__["AdminChatPage"]
    }
];
var AdminChatPageModule = /** @class */ (function () {
    function AdminChatPageModule() {
    }
    AdminChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]
            ],
            declarations: [_admin_chat_page__WEBPACK_IMPORTED_MODULE_6__["AdminChatPage"]]
        })
    ], AdminChatPageModule);
    return AdminChatPageModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-chat/admin-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-chat/admin-chat.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-primary);\n  color: ghostwhite;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: white;\n}\n\n.time {\n  color: white;\n  float: right;\n}\n\n.message-input {\n  width: 100%;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 4px solid var(--ion-color-medium);\n  outline: none;\n  border-radius: 15px;\n}\n\n::-webkit-input-placeholder {\n  padding-top: 10px;\n  text-align: center;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY2hhdC9EOlxcRllQXFxmZWVkLXRoZS1odW5kZXIvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi1jaGF0XFxhZG1pbi1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tY2hhdC9hZG1pbi1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1jaGF0L2FkbWluLWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tZXNzYWdlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLm90aGVyLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcclxufVxyXG5cclxuLm15LW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWlucHV0IHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIC8vLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC8vLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tc2ctYnRuIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xyXG59XHJcbiIsIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tc2ctYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-chat/admin-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/admin-chat/admin-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: AdminChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminChatPage", function() { return AdminChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");








var AdminChatPage = /** @class */ (function () {
    function AdminChatPage(utils, route, http, service, db) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.service = service;
        this.db = db;
        this.messages = [];
        this.recivedData = [];
        this.loadchannelName();
        this.loadData();
    }
    AdminChatPage.prototype.ngOnInit = function () {
    };
    AdminChatPage.prototype.loadchannelName = function () {
        this.username = JSON.parse(localStorage.getItem('chatUsername'));
        this.channel = this.username + '-admin';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user_name.toLowerCase();
    };
    AdminChatPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.db.list("/channels/" + this.channel).valueChanges().subscribe(function (data) {
                            _this.utils.stopLoading();
                            _this.recivedData = data;
                            _this.messages = data;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminChatPage.prototype.sendMessage = function () {
        var _this = this;
        var url = this.service.homeUrl + "/channels/exist-or-not/" + this.channel;
        this.http.post(url, 1).subscribe(function (data) {
            console.log('I got this response -> ', data);
        }, function (error) {
            console.log('error', error);
        });
        this.db.list("/channels/" + this.channel).push({
            sender: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(function () {
            _this.content.scrollToBottom(10);
        });
    };
    AdminChatPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], AdminChatPage.prototype, "content", void 0);
    AdminChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-chat',
            template: __webpack_require__(/*! raw-loader!./admin-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-chat/admin-chat.page.html"),
            styles: [__webpack_require__(/*! ./admin-chat.page.scss */ "./src/app/admin/admin-chat/admin-chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
    ], AdminChatPage);
    return AdminChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-chat-admin-chat-module-es5.js.map