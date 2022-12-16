(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donate-food-donate-food-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donate-food/donate-food.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donate-food/donate-food.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\r\n    <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Donate Food</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"donateFoodForm\">\r\n        <ion-grid>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col class=\"ion-align-self-center\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\" size-xs=\"12\" size-sm=\"10\">\r\n                    <div class=\"ion-text-center\">\r\n                        <h3>Provide Food Information</h3>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Enter Name\" formControlName=\"name\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-datetime placeholder=\"Expiry Date\" pickerFormat=\"YYYY MM DD\"\r\n                                          formControlName=\"expiry_date\"></ion-datetime>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Select Type</ion-label>\r\n                            <ion-select formControlName=\"type\" placeholder=\"--Select--\" okText=\"Okay\"\r\n                                        cancelText=\"Dismiss\">\r\n                                <ion-select-option value=\"fast Food\">Fast Food</ion-select-option>\r\n                                <ion-select-option value=\"rise\">Rise</ion-select-option>\r\n                                <ion-select-option value=\"simple food\">Simple Food</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Quantity\" formControlName=\"quantity\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"floating\">Unit</ion-label>\r\n                            <ion-select formControlName=\"unit\" placeholder=\"--Select--\" okText=\"Okay\"\r\n                                        cancelText=\"Dismiss\">\r\n                                <ion-select-option *ngFor=\"let item of units\"\r\n                                                   value=\"{{item}}\">{{item}}</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label id=\"food_image\" color=\"primary\" stacked>Food Image</ion-label>\r\n                            <ion-input type=\"file\" accept=\"image/*\" id=\"upload\"\r\n                                       (change)=\"imageFileChanged($event)\"></ion-input>\r\n                        </ion-item>\r\n                    </div>\r\n                    <div class=\"ion-padding\">\r\n                        <ion-button size=\"default\" [disabled]=\"donateFoodForm.invalid\"\r\n                                    (click)=\"uploadImageAndFoodDonation()\"\r\n                                    color=\"primary\" type=\"submit\" expand=\"block\">Donate Food\r\n                        </ion-button>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/donner/donate-food/donate-food.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-food/donate-food.module.ts ***!
  \**********************************************************/
/*! exports provided: DonateFoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPageModule", function() { return DonateFoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donate_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-food.page */ "./src/app/donner/donate-food/donate-food.page.ts");







var routes = [
    {
        path: '',
        component: _donate_food_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodPage"]
    }
];
var DonateFoodPageModule = /** @class */ (function () {
    function DonateFoodPageModule() {
    }
    DonateFoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_donate_food_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodPage"]]
        })
    ], DonateFoodPageModule);
    return DonateFoodPageModule;
}());



/***/ }),

/***/ "./src/app/donner/donate-food/donate-food.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-food/donate-food.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9kb25hdGUtZm9vZC9kb25hdGUtZm9vZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donner/donate-food/donate-food.page.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/donate-food/donate-food.page.ts ***!
  \********************************************************/
/*! exports provided: DonateFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPage", function() { return DonateFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");








var DonateFoodPage = /** @class */ (function () {
    function DonateFoodPage(utils, route, http, formBuilder, service, router, db) {
        this.utils = utils;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.db = db;
        this.units = ['grams', 'kilo grams', 'dozen', 'pieces'];
        this.today = new Date();
    }
    DonateFoodPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.charityID = paramMap.get('id');
        });
        this.formInitializer();
        // this.today.setDate(this.today.getDate() + 3);
        this.dateTill = this.today.toISOString().substr(0, 10);
    };
    DonateFoodPage.prototype.formInitializer = function () {
        this.donateFoodForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            expiry_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9 ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    DonateFoodPage.prototype.imageFileChanged = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.foodImage = e.target.files[0];
                return [2 /*return*/];
            });
        });
    };
    DonateFoodPage.prototype.uploadImageAndFoodDonation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var donner, fileName, filePath, storageRef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.foodImage) {
                            alert("Please select a food image...");
                            return [2 /*return*/];
                        }
                        donner = JSON.parse(localStorage.getItem('user'));
                        fileName = Date.now() + ".png";
                        filePath = "food-images/" + donner.id + "/" + fileName;
                        storageRef = this.db.ref(filePath);
                        return [4 /*yield*/, this.utils.presentLoading("Please wait...")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.db.upload(filePath, this.foodImage).then(function (snapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, storageRef.getDownloadURL().subscribe(function (downloadURL) {
                                                _this.donateFood(downloadURL);
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DonateFoodPage.prototype.donateFood = function (imageUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var test, dateFormat, donner, donnerID, foodDonation;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
                test = this.donateFoodForm.value;
                dateFormat = test.expiry_date.split('T')[0];
                donner = JSON.parse(localStorage.getItem('user'));
                donnerID = donner.id;
                this.finalDonationObject = '{"quantityValue" : "' + test.quantity + '",' +
                    '"quantityUnit" : "' + test.unit + '",' +
                    '"foodItem": {' +
                    '"name": "' + test.name + '",' +
                    '"expiry_date": "' + dateFormat + '",' +
                    '"type": "' + test.type + '" },' +
                    '"donation": {' + '"date": "' + this.date + '",' +
                    '"donner": {' + '"id": ' + donnerID + ' },' +
                    '"charityHouse": {' + '"id": ' + this.charityID + ' }}}';
                foodDonation = JSON.parse(this.finalDonationObject);
                foodDonation.foodItem.image = imageUrl;
                foodDonation.donation.acceptanceTime = "not added yet";
                foodDonation.donation.status = "new";
                this.saveFoodDonation(foodDonation).subscribe(function (data) {
                    _this.utils.stopLoading();
                    _this.utils.presentAlert('Notification sent. Please! wait while charity house connect with you. Thanks for donating fund.');
                    _this.router.navigate(['charityList']);
                }, function (error) {
                    _this.utils.stopLoading();
                });
                return [2 /*return*/];
            });
        });
    };
    DonateFoodPage.prototype.saveFoodDonation = function (dataObj) {
        var url = this.service.homeUrl + "/foodDonationDetails/newFoodDonationDetails";
        return this.http.post(url, dataObj);
    };
    DonateFoodPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
    ]; };
    DonateFoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donate-food',
            template: __webpack_require__(/*! raw-loader!./donate-food.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donate-food/donate-food.page.html"),
            styles: [__webpack_require__(/*! ./donate-food.page.scss */ "./src/app/donner/donate-food/donate-food.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
    ], DonateFoodPage);
    return DonateFoodPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-donate-food-donate-food-module-es5.js.map