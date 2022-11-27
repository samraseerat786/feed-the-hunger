(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-feedback-feedback-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/feedback/feedback.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/feedback/feedback.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Feedback</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"feedbackForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Please! provide feedback</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Email\" formControlName=\"email\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"subject\" formControlName=\"subject\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-textarea placeholder=\"Feedback Message\"\r\n                                          formControlName=\"feedback_message\"></ion-textarea>\r\n                        </ion-item>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button size=\"default\" [disabled]=\"feedbackForm.invalid\" (click)=\"sendFeedback()\"\r\n                                    color=\"primary\" type=\"submit\" expand=\"block\">Send Feedback\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/charityHouse/feedback/feedback.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/charityHouse/feedback/feedback.module.ts ***!
  \**********************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/charityHouse/feedback/feedback.page.ts");







var routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }
];
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/charityHouse/feedback/feedback.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/charityHouse/feedback/feedback.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlIb3VzZS9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/charityHouse/feedback/feedback.page.ts":
/*!********************************************************!*\
  !*** ./src/app/charityHouse/feedback/feedback.page.ts ***!
  \********************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(utils, route, http, router, service, formBuilder) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    FeedbackPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.donnerID = paramMap.get('id');
        });
        this.formInitializer();
    };
    FeedbackPage.prototype.formInitializer = function () {
        this.feedbackForm = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            feedback_message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FeedbackPage.prototype.sendFeedback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var test, charityHouse, charityID, feedback;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = this.feedbackForm.value;
                        charityHouse = JSON.parse(localStorage.getItem('user'));
                        charityID = charityHouse.id;
                        this.finalFeedbackObject = '{"email": "' + test.email + '",' +
                            ' "subject": "' + test.subject + '",' +
                            ' "feedbackMessage": "' + test.feedback_message + '",' +
                            ' "donner": { "id": ' + this.donnerID + '},' +
                            ' "charityHouse": { "id": ' + charityID + '}' + '}';
                        feedback = JSON.parse(this.finalFeedbackObject);
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        this.saveFeedback(feedback).subscribe(function (data) {
                            _this.utils.stopLoading();
                            _this.utils.presentAlert('Feedback is saved. Thanks for your feedback.');
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
    FeedbackPage.prototype.saveFeedback = function (dataObj) {
        var url = this.service.homeUrl + "/feedbacks/newFeedback";
        return this.http.post(url, dataObj);
    };
    FeedbackPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! raw-loader!./feedback.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/charityHouse/feedback/feedback.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=charityHouse-feedback-feedback-module-es5.js.map