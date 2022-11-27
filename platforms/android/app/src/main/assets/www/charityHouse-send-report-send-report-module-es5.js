(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-send-report-send-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/send-report/send-report.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/send-report/send-report.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Send Report</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"reportForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Please report the Donner!</h3>\r\n                    </div>\r\n                    <div>\r\n                        <ion-item style=\"padding-left: 25px; padding-right: 25px\">\r\n                            <ion-label position=\"floating\">Types</ion-label>\r\n                            <ion-select formControlName=\"type\" placeholder=\"--Select--\" okText=\"Okay\"\r\n                                        cancelText=\"Dismiss\">\r\n                                <ion-select-option *ngFor=\"let item of types\"\r\n                                                   value={{item}}>{{item}}</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-textarea rows=\"1\" style=\"height: 50px\" class=\"message-input\" formControlName=\"email\"\r\n                                      placeholder=\"Email\"></ion-textarea>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-textarea rows=\"7\" style=\"height: 150px\" class=\"message-input\"\r\n                                      formControlName=\"reportMessage\"\r\n                                      placeholder=\"Enter Report message here...\"></ion-textarea>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button shape=\"round\" (click)=\"sendReport()\" color=\"primary\" type=\"submit\" expand=\"block\">\r\n                            Send Report\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/charityHouse/send-report/send-report.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/send-report/send-report.module.ts ***!
  \****************************************************************/
/*! exports provided: SendReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportPageModule", function() { return SendReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-report.page */ "./src/app/charityHouse/send-report/send-report.page.ts");







var routes = [
    {
        path: '',
        component: _send_report_page__WEBPACK_IMPORTED_MODULE_6__["SendReportPage"]
    }
];
var SendReportPageModule = /** @class */ (function () {
    function SendReportPageModule() {
    }
    SendReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_send_report_page__WEBPACK_IMPORTED_MODULE_6__["SendReportPage"]]
        })
    ], SendReportPageModule);
    return SendReportPageModule;
}());



/***/ }),

/***/ "./src/app/charityHouse/send-report/send-report.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/send-report/send-report.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  border-style: inset;\n  border-width: 2px;\n}\n\n.message-input {\n  width: 95%;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 4px solid var(--ion-color-medium);\n  border-color: #4c8dff;\n  outline: none;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUhvdXNlL3NlbmQtcmVwb3J0L0Q6XFxGWVBcXGZlZWQtdGhlLWh1bmRlci9zcmNcXGFwcFxcY2hhcml0eUhvdXNlXFxzZW5kLXJlcG9ydFxcc2VuZC1yZXBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGFyaXR5SG91c2Uvc2VuZC1yZXBvcnQvc2VuZC1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2hhcml0eUhvdXNlL3NlbmQtcmVwb3J0L3NlbmQtcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGM4ZGZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbiIsInRleHRhcmVhIHtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDk1JTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItY29sb3I6ICM0YzhkZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/charityHouse/send-report/send-report.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/charityHouse/send-report/send-report.page.ts ***!
  \**************************************************************/
/*! exports provided: SendReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportPage", function() { return SendReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







var SendReportPage = /** @class */ (function () {
    function SendReportPage(utils, route, http, formBuilder, service, router) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.types = ['Spam', 'Harassment', 'nudity', 'violence', 'other'];
    }
    SendReportPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.reportID = paramMap.get('id');
        });
        this.formInitializer();
    };
    SendReportPage.prototype.formInitializer = function () {
        this.reportForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reportMessage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    SendReportPage.prototype.sendReport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var test, charityHouse, charityID, feedback;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = this.reportForm.value;
                        charityHouse = JSON.parse(localStorage.getItem('user'));
                        charityID = charityHouse.id;
                        this.finalReportObject = '{"email": "' + test.email + '",' +
                            ' "type": "' + test.type + '",' +
                            ' "message": "' + test.reportMessage + '",' +
                            ' "donner": { "id": ' + this.reportID + '},' +
                            ' "charityHouse": { "id": ' + charityID + '}' + '}';
                        feedback = JSON.parse(this.finalReportObject);
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.saveFeedback(feedback).subscribe(function (data) {
                            _this.utils.stopLoading();
                            _this.utils.presentAlert('Donner reported successfully.');
                            _this.router.navigate(['donner-list']);
                        }, function (error) {
                            _this.utils.stopLoading();
                            console.log('error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SendReportPage.prototype.saveFeedback = function (dataObj) {
        var url = this.service.homeUrl + "/reports/add";
        return this.http.post(url, dataObj);
    };
    SendReportPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SendReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-report',
            template: __webpack_require__(/*! raw-loader!./send-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/send-report/send-report.page.html"),
            styles: [__webpack_require__(/*! ./send-report.page.scss */ "./src/app/charityHouse/send-report/send-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SendReportPage);
    return SendReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=charityHouse-send-report-send-report-module-es5.js.map