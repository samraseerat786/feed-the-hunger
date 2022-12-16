(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-profile-picture-profile-picture-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/profile-picture/profile-picture.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/profile-picture/profile-picture.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons>\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Upload\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-item>\r\n        <ion-label>\r\n            <ion-row>\r\n                <ion-col size=\"6\">\r\n                    <ion-button color=\"danger\" type=\"button\" expand=\"full\" shape=\"round\" (click)=\"takePhoto()\">\r\n                        <ion-icon name=\"camera\" color=\"secondary\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                    <ion-button color=\"secondary\" type=\"button\" expand=\"full\" shape=\"round\" (click)=\"selectPhoto()\">\r\n                        <ion-icon name=\"image\" color=\"secondary\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"error\">\r\n        <ion-label>\r\n            <strong>{{error}}</strong>\r\n        </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>\r\n            <img *ngIf=\"myPhoto\" [src]=\"myPhoto\" alt=\"\"/>\r\n        </ion-label>\r\n    </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/authentication/profile-picture/profile-picture.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/profile-picture/profile-picture.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProfilePicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function() { return ProfilePicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-picture.page */ "./src/app/authentication/profile-picture/profile-picture.page.ts");







const routes = [
    {
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]
    }
];
let ProfilePicturePageModule = class ProfilePicturePageModule {
};
ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
    })
], ProfilePicturePageModule);



/***/ }),

/***/ "./src/app/authentication/profile-picture/profile-picture.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/profile-picture/profile-picture.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/profile-picture/profile-picture.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/profile-picture/profile-picture.page.ts ***!
  \************************************************************************/
/*! exports provided: ProfilePicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePage", function() { return ProfilePicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");







let ProfilePicturePage = class ProfilePicturePage {
    constructor(http, loadingCtrl, toastCtrl, service, changeDetectorRef) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
    }
    takePhoto() {
        const camera = navigator['camera'];
        camera.getPicture(imageData => {
            this.myPhoto = this.convertFileSrc(imageData);
            this.changeDetectorRef.detectChanges();
            this.changeDetectorRef.markForCheck();
            this.uploadPhoto(imageData);
        }, error => this.error = JSON.stringify(error), {
            quality: 100,
            destinationType: camera.DestinationType.FILE_URI,
            sourceType: camera.PictureSourceType.CAMERA,
            encodingType: camera.EncodingType.JPEG
        });
    }
    selectPhoto() {
        const camera = navigator['camera'];
        camera.getPicture(imageData => {
            this.myPhoto = this.convertFileSrc(imageData);
            this.uploadPhoto(imageData);
        }, error => this.error = JSON.stringify(error), {
            sourceType: camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: camera.DestinationType.FILE_URI,
            quality: 100,
            encodingType: camera.EncodingType.JPEG,
        });
    }
    convertFileSrc(url) {
        if (!url) {
            return url;
        }
        if (url.startsWith('/')) {
            return window['WEBVIEW_SERVER_URL'] + '/_app_file_' + url;
        }
        if (url.startsWith('file://')) {
            return window['WEBVIEW_SERVER_URL'] + url.replace('file://', '/_app_file_');
        }
        if (url.startsWith('content://')) {
            return window['WEBVIEW_SERVER_URL'] + url.replace('content:/', '/_app_content_');
        }
        return url;
    }
    uploadPhoto(imageFileUri) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.error = null;
            this.loading = yield this.loadingCtrl.create({
                message: 'Uploading...'
            });
            this.loading.present();
            window['resolveLocalFileSystemURL'](imageFileUri, entry => {
                entry['file'](file => this.readFile(file));
            });
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], { type: file.type });
            formData.append('file', imgBlob, file.name);
            this.postData(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    postData(formData) {
        this.http.post(`${this.service.homeUrl}/upload`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => this.handleError(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.loading.dismiss()))
            .subscribe(ok => this.showToast(ok));
    }
    showToast(ok) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (ok === true) {
                const toast = yield this.toastCtrl.create({
                    message: 'Upload successful',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'Upload failed',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        });
    }
    handleError(error) {
        const errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        this.changeDetectorRef.detectChanges();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errMsg);
    }
    ngOnInit() {
    }
};
ProfilePicturePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-picture',
        template: __webpack_require__(/*! raw-loader!./profile-picture.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/profile-picture/profile-picture.page.html"),
        styles: [__webpack_require__(/*! ./profile-picture.page.scss */ "./src/app/authentication/profile-picture/profile-picture.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ProfilePicturePage);



/***/ })

}]);
//# sourceMappingURL=authentication-profile-picture-profile-picture-module-es2015.js.map