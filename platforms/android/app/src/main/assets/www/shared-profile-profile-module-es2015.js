(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/profile/profile.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/profile/profile.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header xmlns=\"http://www.w3.org/1999/html\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button *ngIf=\"admin\"></ion-menu-button>\r\n            <ion-back-button *ngIf=\"!admin\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n            <ion-row align-items-end no-padding>\r\n                <ion-col size=\"3\"></ion-col>\r\n                <ion-col style=\"padding-top: 30px\" size=\"6\">\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                            <div class=\"profile\">\r\n                                <img [routerLink]=\"['profile-picture']\" class=\"profile-picture\"\r\n                                     src=\"{{user?.image || user?.user?.image || defaultImage}}\"/>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                            <input type=\"file\" accept=\"image/*\" id=\"profile-image\" (change)=\"imageFileChanged($event)\"/>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"3\">\r\n                    <ion-card class=\"border\">\r\n                        <ion-card-content class=\"ion-no-padding\">\r\n                            <ion-icon style=\"float: right;\" size=\"large\" name=\"Person\" color=\"secondary\"></ion-icon>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"9\">\r\n                    <ion-item class=\"ion-no-padding\">\r\n                        <ion-card class=\"border ion-no-padding\">\r\n                            <ion-card-header class=\"ion-no-padding\">\r\n                                <ion-card-subtitle>Name</ion-card-subtitle>\r\n                                <ion-card-title\r\n                                        class=\"title\">{{user?.user?.first_name}} {{user?.user?.last_name}}</ion-card-title>\r\n                                <ion-card-title class=\"title\">{{user?.first_name}} {{user?.last_name}}</ion-card-title>\r\n                            </ion-card-header>\r\n                        </ion-card>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"0\"></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"3\">\r\n                    <ion-card class=\"border\">\r\n                        <ion-card-content class=\"ion-no-padding\">\r\n                            <ion-icon style=\"float: right;\" size=\"large\" name=\"ios-call\" color=\"secondary\"></ion-icon>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"9\">\r\n                    <ion-item class=\"ion-no-padding\">\r\n                        <ion-card class=\"border ion-no-padding\">\r\n                            <ion-card-header class=\"ion-no-padding\">\r\n                                <ion-card-subtitle *ngIf=\"admin\">Email</ion-card-subtitle>\r\n                                <ion-card-title class=\"title\" *ngIf=\"admin\">{{user?.user_name}}</ion-card-title>\r\n                                <ion-card-subtitle *ngIf=\"!admin\">Phone</ion-card-subtitle>\r\n                                <ion-card-title class=\"title\">{{user?.contact}}</ion-card-title>\r\n                            </ion-card-header>\r\n                        </ion-card>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"0\"></ion-col>\r\n            </ion-row>\r\n\r\n            <ion-card *ngIf=\"donner\" class=\"ion-no-padding\">\r\n                <ion-item no-lines>\r\n                    <ion-label color=\"green\">Reviews</ion-label>\r\n                    <ion-img *ngIf=\"close\" (click)=\"expandCLick()\" style=\"width: 20px; height: 20px;\"\r\n                             src=\"/assets/down-arrow.svg\"\r\n                             alt=\"down\" slot=\"end\"></ion-img>\r\n                    <ion-img *ngIf=\"open\" (click)=\"expandCLick()\" style=\"width: 20px; height: 20px;\"\r\n                             src=\"/assets/up-arrow.svg\"\r\n                             alt=\"up\" slot=\"end\"></ion-img>\r\n                </ion-item>\r\n                <ion-card-content class=\"ion-no-padding\" *ngIf=\"open\">\r\n                    <ion-card no-border *ngFor=\"let review of result\">\r\n                        <ion-card-header style=\"padding-bottom: 0;\">\r\n                            <ion-icon slot=\"start\" name=\"person\" color=\"secondary\"></ion-icon>\r\n                            <ion-card-title class=\"title\">{{review?.charityHouse?.user?.first_name}}</ion-card-title>\r\n                            <ion-card-subtitle>{{review?.charityHouse?.contact}}</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                        <ion-card-content style=\"padding-top: 0;\">\r\n                            <ion-text color=\"primary\">\r\n                                <h4>{{review?.title}}.</h4>\r\n                            </ion-text>\r\n                            <div *ngIf=\"review?.star ==1\">\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-label>{{review?.star}}</ion-label>\r\n                                <br>\r\n                            </div>\r\n                            <div *ngIf=\"review?.star ==2\">\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-label>{{review?.star}}</ion-label>\r\n                                <br>\r\n                            </div>\r\n                            <div *ngIf=\"review?.star ==3\">\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-label>{{review?.star}}</ion-label>\r\n                                <br>\r\n                            </div>\r\n                            <div *ngIf=\"review?.star ==4\">\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\r\n                                <ion-label>{{review?.star}}</ion-label>\r\n                                <br>\r\n                            </div>\r\n                            <div *ngIf=\"review?.star ==5\">\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\r\n                                <ion-label>{{review?.star}}</ion-label>\r\n                                <br>\r\n                            </div>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                    <h4 *ngIf=\"isEmpty\">No Review Found.</h4>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/shared/profile/profile.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/profile/profile.module.ts ***!
  \**************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/shared/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/shared/profile/profile.page.scss":
/*!**************************************************!*\
  !*** ./src/app/shared/profile/profile.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture {\n  border-radius: 50%;\n  width: 145px;\n  height: 145px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.border {\n  box-shadow: none !important;\n  border-radius: 0 !important;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.star {\n  color: #a2a4ab;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.xc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.item-color {\n  color: #bababa;\n}\n\n.cameraIcon {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  margin: 9px 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUvRDpcXEZZUFxcZmVlZC10aGUtaHVuZGVyL3NyY1xcYXBwXFxzaGFyZWRcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTQ1cHg7XHJcbiAgaGVpZ2h0OiAxNDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlclxyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gIGNvbG9yOiAjYTJhNGFiO1xyXG59XHJcblxyXG4uZnVsbGhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ueGMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tY29sb3Ige1xyXG4gIGNvbG9yOiAjYmFiYWJhO1xyXG59XHJcblxyXG4uY2FtZXJhSWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDlweCAwIDAgMTBweDtcclxufVxyXG4iLCIucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTQ1cHg7XG4gIGhlaWdodDogMTQ1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN0YXIge1xuICBjb2xvcjogI2EyYTRhYjtcbn1cblxuLmZ1bGxoZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi54YyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1jb2xvciB7XG4gIGNvbG9yOiAjYmFiYWJhO1xufVxuXG4uY2FtZXJhSWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA5cHggMCAwIDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/profile/profile.page.ts":
/*!************************************************!*\
  !*** ./src/app/shared/profile/profile.page.ts ***!
  \************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");








let ProfilePage = class ProfilePage {
    constructor(utils, router, storage, service, http, db) {
        this.utils = utils;
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.db = db;
        this.result = [];
        this.reviewsList = [];
        this.close = true;
        this.open = false;
        this.isEmpty = false;
        this.defaultImage = 'assets/20181028_231840.png';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = JSON.parse(localStorage.getItem('user'));
            const id = this.user.id;
            yield this.utils.presentLoading("Please wait...");
            this.http.get(`${this.service.homeUrl}/reviews/findByDonner/${id}`, { observe: 'response' }).subscribe(response => {
                this.utils.stopLoading();
                if (response.status === 200 || response.status === 201) {
                    this.reviewsList = response.body;
                    this.result = this.reviewsList.content;
                    if (this.result.length === 0) {
                        this.isEmpty = true;
                    }
                    localStorage.removeItem('reviewsList');
                    localStorage.setItem('reviewsList', JSON.stringify(this.result));
                    console.log('reviewsList : ', this.reviewsList.content);
                }
            }, (error) => {
                this.utils.stopLoading();
                console.log('error', error);
            });
            this.loadUser();
        });
    }
    expandCLick() {
        this.temp = this.close;
        this.close = this.open;
        this.open = this.temp;
    }
    loadUser() {
        this.role = localStorage.getItem('role');
        if (this.role === 'donner') {
            this.donner = true;
        }
        if (this.role === 'admin') {
            this.admin = true;
        }
    }
    imageFileChanged(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.profileImage = e.target.files[0];
            const filePath = `profile-images/${this.user.user.user_name}.png`;
            const storageRef = this.db.ref(filePath);
            debugger;
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
ProfilePage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/shared/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/shared/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=shared-profile-profile-module-es2015.js.map