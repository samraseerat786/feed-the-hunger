(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/edit-profile/edit-profile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Update Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-card no-border no-padding>\r\n                <ion-grid class=\"ion-padding-top\">\r\n                    <div [formGroup]=\"updateForm\">\r\n                        <ion-input [hidden]=\"true\" value=\"{{user?.id}}\" formControlName=\"id\"></ion-input>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">First Name</ion-label>\r\n                            <ion-input placeholder=\"First Name\" value=\"{{user?.first_name}}\"\r\n                                       formControlName=\"first_name\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Last Name</ion-label>\r\n                            <ion-input placeholder=\"Last Name\" value=\"{{user?.last_name}}\"\r\n                                       formControlName=\"last_name\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Email</ion-label>\r\n                            <ion-input placeholder=\"Email\" value=\"{{user?.email}}\" formControlName=\"email\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">User name</ion-label>\r\n                            <ion-input placeholder=\"User Name\" value=\"{{user?.user_name}}\"\r\n                                       formControlName=\"user_name\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Password</ion-label>\r\n                            <ion-input placeholder=\"Password\" value=\"{{user?.password}}\"\r\n                                       formControlName=\"password\"></ion-input>\r\n                        </ion-item>\r\n\r\n                        <ion-grid style=\"padding-top: 50px\" class=\"ion-padding-top\">\r\n                            <ion-row class=\"ion-justify-content-center\">\r\n                                <ion-button (click)=\"updateData()\" shape=\"square\" [disabled]=\"!updateForm.valid\">Save\r\n                                </ion-button>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-grid>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/admin/edit-profile/edit-profile.page.ts");







const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/admin/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");







let EditProfilePage = class EditProfilePage {
    constructor(utils, route, http, router, service, formBuilder) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/users/getUser/${val}`;
            yield this.utils.presentLoading("Please wait...");
            this.data = this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
            });
        }));
        this.formInitializer();
    }
    formInitializer() {
        console.log('formInitializer', this.user);
        this.updateForm = this.formBuilder.group({
            id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    generateUser() {
        const data = this.updateForm.value;
        this.childUser = '{ "id" : "' + this.user.id +
            '" , \n"first_name" : "' + data.first_name +
            '" , \n"last_name" : "' + data.last_name +
            '" , \n"email" : "' + data.email +
            '" , \n"user_name" : "' + data.user_name +
            '" , \n"password" : "' + data.password +
            '" , \n"applicationStatus" : "' + this.user.applicationStatus +
            '" , \n"role" : "' + this.user.role + '"}';
        const completeUser = JSON.parse(this.childUser);
        return completeUser;
    }
    updateData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.updateForm.valid) {
                const formData = this.updateForm.value;
                yield this.utils.presentLoading("Please wait...");
                this.saveHttpReq(this.generateUser()).subscribe(data => {
                    this.utils.stopLoading();
                    this.utils.presentToast('User updated successfully');
                    const url = `/admin-profile/${this.user.id}`;
                    this.router.navigateByUrl(url);
                }, error => {
                    this.utils.stopLoading();
                    console.log('error', error);
                });
            }
        });
    }
    saveHttpReq(dataObj) {
        const url = `${this.service.homeUrl}/users/updateUser`;
        return this.http.put(url, dataObj);
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/admin/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=admin-edit-profile-edit-profile-module-es2015.js.map