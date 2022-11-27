(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donner-chat-donner-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donner-chat/donner-chat.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donner-chat/donner-chat.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Message</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-grid>\r\n                <ion-row *ngFor=\"let message of messages\">\r\n                    <ion-col size=\"9\" *ngIf=\"currentUser !== message?.sender\" class=\"message other-message\">\r\n                        <b>{{message?.sender}}</b><br>\r\n                        <span>{{message?.message}}</span>\r\n                        <div class=\"time\" text-right><br>\r\n                            {{message.createdAt | date:'short'}}</div>\r\n                    </ion-col>\r\n\r\n                    <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sender\" class=\"message my-message\">\r\n                        <b>{{message?.sender}}</b><br>\r\n                        <span>{{message?.message}}</span>\r\n                        <div class=\"time\" text-right><br>\r\n                            {{message.createdAt | date:'short'}}</div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar color=\"light\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                <ion-item color=\"light\">\r\n                    <textarea placeholder=\"Enter your message\" autosize [maxRows]=\"3\" [(ngModel)]=\"newMsg\"\r\n                              class=\"message-input\"></textarea>\r\n                    <ion-icon (click)=\"sendMessage()\" name=\"send\" size=\"large\"\r\n                              slot=\"end\" color=\"success\" mode=\"md\" class=\"sendIcon\"></ion-icon>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/donner/donner-chat/donner-chat.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/donner-chat/donner-chat.module.ts ***!
  \**********************************************************/
/*! exports provided: DonnerChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerChatPageModule", function() { return DonnerChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donner_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donner-chat.page */ "./src/app/donner/donner-chat/donner-chat.page.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm2015/ngx-autosize.js");








const routes = [
    {
        path: '',
        component: _donner_chat_page__WEBPACK_IMPORTED_MODULE_6__["DonnerChatPage"]
    }
];
let DonnerChatPageModule = class DonnerChatPageModule {
};
DonnerChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]
        ],
        declarations: [_donner_chat_page__WEBPACK_IMPORTED_MODULE_6__["DonnerChatPage"]]
    })
], DonnerChatPageModule);



/***/ }),

/***/ "./src/app/donner/donner-chat/donner-chat.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/donner/donner-chat/donner-chat.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-primary);\n  color: ghostwhite;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: white;\n}\n\n.time {\n  color: white;\n  float: right;\n}\n\n.message-input {\n  width: 100%;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 4px solid var(--ion-color-medium);\n  outline: none;\n  border-radius: 15px;\n}\n\n::-webkit-input-placeholder {\n  padding-top: 10px;\n  text-align: center;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVyL2Rvbm5lci1jaGF0L0Q6XFxGWVBcXGZlZWQtdGhlLWh1bmRlci9zcmNcXGFwcFxcZG9ubmVyXFxkb25uZXItY2hhdFxcZG9ubmVyLWNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9kb25uZXIvZG9ubmVyLWNoYXQvZG9ubmVyLWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9kb25uZXItY2hhdC9kb25uZXItY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ub3RoZXItbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xyXG59XHJcblxyXG4ubXktbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2UtaW5wdXQge1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgLy8td2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLy8tbW96LWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1zZy1idG4ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XHJcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XHJcbn1cclxuIiwiLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLm90aGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1zZy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/donner/donner-chat/donner-chat.page.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/donner-chat/donner-chat.page.ts ***!
  \********************************************************/
/*! exports provided: DonnerChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerChatPage", function() { return DonnerChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");








let DonnerChatPage = class DonnerChatPage {
    constructor(utils, route, http, service, db) {
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
    ngOnInit() {
    }
    loadchannelName() {
        this.channel = JSON.parse(localStorage.getItem('channelName'));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user.user_name.toLowerCase(); // + ' ' + this.user.user.last_name.toLowerCase();
        console.log('current user', this.currentUser);
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.utils.presentLoading("Please wait...");
            this.db.list(`/channels/${this.channel}`).valueChanges().subscribe(data => {
                this.utils.stopLoading();
                this.recivedData = data;
                this.messages = data;
            });
            this.utils.stopLoading();
        });
    }
    sendMessage() {
        const url = `${this.service.homeUrl}/channels/exist-or-not/${this.channel}`;
        this.http.post(url, 1).subscribe(data => {
            console.log('I got this response -> ', data);
        }, error => {
            console.log('error', error);
        });
        this.db.list(`/channels/${this.channel}`).push({
            sender: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(10);
        });
    }
};
DonnerChatPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], DonnerChatPage.prototype, "content", void 0);
DonnerChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donner-chat',
        template: __webpack_require__(/*! raw-loader!./donner-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donner-chat/donner-chat.page.html"),
        styles: [__webpack_require__(/*! ./donner-chat.page.scss */ "./src/app/donner/donner-chat/donner-chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], DonnerChatPage);



/***/ })

}]);
//# sourceMappingURL=donner-donner-chat-donner-chat-module-es2015.js.map