(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-profile-admin-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-profile/admin-profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-profile/admin-profile.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-row align-items-end no-padding>\r\n                <ion-col size=\"3\"></ion-col>\r\n                <ion-col style=\"padding-top: 30px\" size=\"6\">\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                            <div class=\"profile\">\r\n                                <img [routerLink]=\"['profile-picture']\" class=\"profile-picture\"\r\n                                     src=\"{{user?.image || user?.user?.image || defaultImage}}\"/>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                            <input type=\"file\" accept=\"image/*\" id=\"profile-image\" (change)=\"imageFileChanged($event)\"/>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"3\">\r\n                    <ion-card class=\"border\">\r\n                        <ion-card-content class=\"ion-no-padding\">\r\n                            <ion-icon style=\"float: right;\" size=\"large\" name=\"Person\" color=\"secondary\"></ion-icon>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"9\">\r\n                    <ion-item class=\"ion-no-padding\">\r\n                        <ion-card class=\"border ion-no-padding\">\r\n                            <ion-card-header class=\"ion-no-padding\">\r\n                                <ion-card-subtitle>Name</ion-card-subtitle>\r\n                                <ion-card-title>{{user?.first_name}} {{user?.last_name}}</ion-card-title>\r\n                            </ion-card-header>\r\n                        </ion-card>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"0\"></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"3\">\r\n                    <ion-card class=\"border\">\r\n                        <ion-card-content class=\"ion-no-padding\">\r\n                            <ion-icon style=\"float: right;\" size=\"large\" name=\"ios-call\" color=\"secondary\"></ion-icon>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"9\">\r\n                    <ion-item class=\"ion-no-padding\">\r\n                        <ion-card class=\"border ion-no-padding\">\r\n                            <ion-card-header class=\"ion-no-padding\">\r\n                                <ion-card-title>Email</ion-card-title>\r\n                                <ion-card-subtitle>{{user?.email}}</ion-card-subtitle>\r\n                            </ion-card-header>\r\n                        </ion-card>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"0\"></ion-col>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-img class=\"bottom-right\" (click)=\"updateProfile()\" style=\"width: 45px; height: 45px;\"\r\n         src=\"/assets/edit-admin.jpg\" alt=\"update\" slot=\"end\"></ion-img>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfilePageModule", function() { return AdminProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-profile.page */ "./src/app/admin/admin-profile/admin-profile.page.ts");







const routes = [
    {
        path: '',
        component: _admin_profile_page__WEBPACK_IMPORTED_MODULE_6__["AdminProfilePage"]
    }
];
let AdminProfilePageModule = class AdminProfilePageModule {
};
AdminProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_profile_page__WEBPACK_IMPORTED_MODULE_6__["AdminProfilePage"]]
    })
], AdminProfilePageModule);



/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-right {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n}\n\n.profile-picture {\n  border-radius: 50%;\n  width: 145px;\n  height: 145px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.border {\n  box-shadow: none !important;\n}\n\n.star {\n  color: #a2a4ab;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.xc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.item-color {\n  color: #bababa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZmlsZS9EOlxcRllQXFxmZWVkLXRoZS1odW5kZXIvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi1wcm9maWxlXFxhZG1pbi1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXByb2ZpbGUvYWRtaW4tcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJvdHRvbS1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNSU7XHJcbiAgcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDE0NXB4O1xyXG4gIGhlaWdodDogMTQ1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXJcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgY29sb3I6ICNhMmE0YWI7XHJcbn1cclxuXHJcbi5mdWxsaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi54YyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1jb2xvciB7XHJcbiAgY29sb3I6ICNiYWJhYmE7XHJcbn1cclxuXHJcbiIsIi5ib3R0b20tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIHJpZ2h0OiA1JTtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE0NXB4O1xuICBoZWlnaHQ6IDE0NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJvcmRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN0YXIge1xuICBjb2xvcjogI2EyYTRhYjtcbn1cblxuLmZ1bGxoZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi54YyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1jb2xvciB7XG4gIGNvbG9yOiAjYmFiYWJhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.page.ts ***!
  \***********************************************************/
/*! exports provided: AdminProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfilePage", function() { return AdminProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");







let AdminProfilePage = class AdminProfilePage {
    constructor(utils, route, router, http, service, db) {
        this.utils = utils;
        this.route = route;
        this.router = router;
        this.http = http;
        this.service = service;
        this.db = db;
        this.defaultImage = 'assets/20181028_231840.png';
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
    }
    updateProfile() {
        this.router.navigate(['/edit-profile', this.user]);
    }
    imageFileChanged(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.profileImage = e.target.files[0];
            const filePath = `profile-images/${this.user.user_name}.png`;
            const storageRef = this.db.ref(filePath);
            debugger;
            let fileName = `Date.now().png`;
            yield this.utils.presentLoading("Please wait...");
            yield this.db.upload(filePath, this.profileImage).then((snapshot) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield storageRef.getDownloadURL().subscribe(downloadURL => {
                    console.log(downloadURL);
                    let userObject = {};
                    if (this.user.user) {
                        userObject = this.user.user;
                        this.user.user.image = downloadURL;
                    }
                    else {
                        userObject = this.user;
                        this.user.image = downloadURL;
                    }
                    localStorage.setItem("user", JSON.stringify(this.user));
                    this.saveHttpReq(userObject);
                });
            }));
        });
    }
    saveHttpReq(dataObj) {
        const url = `${this.service.homeUrl}/users/updateUser`;
        this.http.put(url, dataObj).subscribe(data => {
            this.utils.stopLoading();
        }, error => {
            this.utils.stopLoading();
            console.log('error', error);
        });
    }
};
AdminProfilePage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
AdminProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-profile',
        template: __webpack_require__(/*! raw-loader!./admin-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-profile/admin-profile.page.html"),
        styles: [__webpack_require__(/*! ./admin-profile.page.scss */ "./src/app/admin/admin-profile/admin-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
], AdminProfilePage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-profile-admin-profile-module-es2015.js.map