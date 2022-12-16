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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donate_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-food.page */ "./src/app/donner/donate-food/donate-food.page.ts");







const routes = [
    {
        path: '',
        component: _donate_food_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodPage"]
    }
];
let DonateFoodPageModule = class DonateFoodPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");








let DonateFoodPage = class DonateFoodPage {
    constructor(utils, route, http, formBuilder, service, router, db) {
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
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.charityID = paramMap.get('id');
        });
        this.formInitializer();
        // this.today.setDate(this.today.getDate() + 3);
        this.dateTill = this.today.toISOString().substr(0, 10);
    }
    formInitializer() {
        this.donateFoodForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            expiry_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9 ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    imageFileChanged(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.foodImage = e.target.files[0];
        });
    }
    uploadImageAndFoodDonation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.foodImage) {
                alert("Please select a food image...");
                return;
            }
            const donner = JSON.parse(localStorage.getItem('user'));
            let fileName = `${Date.now()}.png`;
            const filePath = `food-images/${donner.id}/${fileName}`;
            const storageRef = this.db.ref(filePath);
            yield this.utils.presentLoading("Please wait...");
            yield this.db.upload(filePath, this.foodImage).then((snapshot) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield storageRef.getDownloadURL().subscribe(downloadURL => {
                    this.donateFood(downloadURL);
                });
            }));
        });
    }
    donateFood(imageUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
            const test = this.donateFoodForm.value;
            // const dateFromForm = test.expiry_date.getFullYear() + '-' + (test.expiry_date.getMonth() + 1 ) + '-' + test.expiry_date.getDate();
            const dateFormat = test.expiry_date.split('T')[0];
            // This id will comes from the service, because when user will login, his ID will save to service
            // and retrieved at time of send data to server.
            const donner = JSON.parse(localStorage.getItem('user'));
            const donnerID = donner.id;
            this.finalDonationObject = '{"quantityValue" : "' + test.quantity + '",' +
                '"quantityUnit" : "' + test.unit + '",' +
                '"foodItem": {' +
                '"name": "' + test.name + '",' +
                '"expiry_date": "' + dateFormat + '",' +
                '"type": "' + test.type + '" },' +
                '"donation": {' + '"date": "' + this.date + '",' +
                '"donner": {' + '"id": ' + donnerID + ' },' +
                '"charityHouse": {' + '"id": ' + this.charityID + ' }}}';
            const foodDonation = JSON.parse(this.finalDonationObject);
            foodDonation.foodItem.image = imageUrl;
            foodDonation.donation.acceptanceTime = "not added yet";
            foodDonation.donation.status = "new";
            this.saveFoodDonation(foodDonation).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert('Notification sent. Please! wait while charity house connect with you. Thanks for donating fund.');
                this.router.navigate(['charityList']);
            }, error => {
                this.utils.stopLoading();
            });
        });
    }
    saveFoodDonation(dataObj) {
        const url = `${this.service.homeUrl}/foodDonationDetails/newFoodDonationDetails`;
        return this.http.post(url, dataObj);
    }
};
DonateFoodPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
];
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



/***/ })

}]);
//# sourceMappingURL=donner-donate-food-donate-food-module-es2015.js.map