(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/help/help.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/help/help.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Help</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card class=\"welcome-card\">\r\n                <img src=\"/assets/help.jpg\" alt=\"\"/>\r\n                <ion-card-header>\r\n                    <ion-card-subtitle>Help Desk</ion-card-subtitle>\r\n                    <ion-card-title>Welcome to Help Desk of App</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <p>This platform is build to help the users where they get error in application and don't understand\r\n                        what\r\n                        should they do.\r\n                        Send message us to on</p>\r\n\r\n                    <ion-row>\r\n                        <ion-col size=\"10\">\r\n                            <ion-label style=\"color: #3880ff\">feed.hunger786@gmail.com</ion-label>\r\n                        </ion-col>\r\n                        <ion-col align-items-start size=\"2\">\r\n                            <ion-img (click)=\"sendSmsToAdmin()\" style=\"width: 30px; height: 30px;\"\r\n                                     src=\"/assets/download.png\"\r\n                                     alt=\"messages\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/shared/help/help.module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/help/help.module.ts ***!
  \********************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/shared/help/help.page.ts");







var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/shared/help/help.page.scss":
/*!********************************************!*\
  !*** ./src/app/shared/help/help.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWxwL2hlbHAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/help/help.page.ts":
/*!******************************************!*\
  !*** ./src/app/shared/help/help.page.ts ***!
  \******************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HelpPage = /** @class */ (function () {
    function HelpPage(router) {
        this.router = router;
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage.prototype.sendSmsToAdmin = function () {
        this.router.navigate(['/open-admin-chat']);
    };
    HelpPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/index.js!./src/app/shared/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/shared/help/help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=shared-help-help-module-es5.js.map