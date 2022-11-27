(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-addUser-addUser-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/addUser/addUser.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/addUser/addUser.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Add User</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"signupForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Add new User</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input name=\"firstName\" formControlName=\"first_name\" type=\"text\"\r\n                                       placeholder=\"First Name\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input name=\"lastName\" formControlName=\"last_name\" type=\"text\"\r\n                                       placeholder=\"Last Name\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input name=\"email\" formControlName=\"email\" type=\"email\"\r\n                                       placeholder=\"your@email.com\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input name=\"username\" formControlName=\"user_name\" type=\"text\"\r\n                                       placeholder=\"username\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Password\" formControlName=\"password\" [type]=\"passwordType\"\r\n                                       clearOnEdit=\"false\"></ion-input>\r\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'\r\n                                      color=\"secondary\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Confirm Password\" formControlName=\"confirm_password\"\r\n                                       [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'\r\n                                      color=\"secondary\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label>User Role</ion-label>\r\n                            <ion-select value=\"Donner\" formControlName=\"role\" placeholder=\"--Select--\" okText=\"Okay\"\r\n                                        cancelText=\"Dismiss\">\r\n                                <ion-select-option value=\"admin\">Admin</ion-select-option>\r\n                                <ion-select-option value=\"donner\">Donner</ion-select-option>\r\n                                <ion-select-option value=\"charity house\">Charity House</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button [disabled]=\"signupForm.invalid\" (click)=\"save()\" color=\"primary\" type=\"submit\"\r\n                                    expand=\"block\">Add User\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/addUser/addUser.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/addUser/addUser.module.ts ***!
  \*************************************************/
/*! exports provided: AddUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function() { return AddUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _addUser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addUser.page */ "./src/app/admin/addUser/addUser.page.ts");








const routes = [
    {
        path: '',
        component: _addUser_page__WEBPACK_IMPORTED_MODULE_6__["AddUserPage"]
    }
];
let AddUserPageModule = class AddUserPageModule {
};
AddUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        declarations: [_addUser_page__WEBPACK_IMPORTED_MODULE_6__["AddUserPage"]]
    })
], AddUserPageModule);



/***/ }),

/***/ "./src/app/admin/addUser/addUser.page.scss":
/*!*************************************************!*\
  !*** ./src/app/admin/addUser/addUser.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-activatable {\n  position: relative;\n  overflow: hidden;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkVXNlci9EOlxcRllQXFxmZWVkLXRoZS1odW5kZXIvc3JjXFxhcHBcXGFkbWluXFxhZGRVc2VyXFxhZGRVc2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRkVXNlci9hZGRVc2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZGRVc2VyL2FkZFVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1hY3RpdmF0YWJsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYXNzd29yZEljb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iLCIuaW9uLWFjdGl2YXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/addUser/addUser.page.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/addUser/addUser.page.ts ***!
  \***********************************************/
/*! exports provided: AddUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPage", function() { return AddUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");






let AddUserPage = class AddUserPage {
    constructor(router, http, service, formBuilder) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.formInitializer();
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    formInitializer() {
        this.signupForm = this.formBuilder.group({
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    save() {
        if (this.signupForm.valid) {
            console.log('formData', this.signupForm.value);
            const formData = this.signupForm.value;
            alert(formData.role);
            console.log(formData.role);
            this.saveHttpReq(formData).subscribe(data => {
                console.log('I got this response -> ', data);
                this.router.navigate(['list']);
            }, error => {
                console.log('error', error);
            });
        }
    }
    saveHttpReq(dataObj) {
        // const url = 'http://test-node-api-test.herokuapp.com/students/newStudent'; // This link is working coorectly.
        console.log(dataObj);
        const url = `${this.service.homeUrl}/users/newUser`;
        return this.http.post(url, dataObj);
    }
};
AddUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addUser',
        template: __webpack_require__(/*! raw-loader!./addUser.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/addUser/addUser.page.html"),
        styles: [__webpack_require__(/*! ./addUser.page.scss */ "./src/app/admin/addUser/addUser.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AddUserPage);



/***/ })

}]);
//# sourceMappingURL=admin-addUser-addUser-module-es2015.js.map