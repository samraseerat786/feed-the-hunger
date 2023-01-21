import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
    selector: 'app-donate-food',
    templateUrl: './donate-food.page.html',
    styleUrls: ['./donate-food.page.scss'],
})
export class DonateFoodPage implements OnInit {
    private charityID;
    donateFoodForm: FormGroup;
    data: Observable<any>;
    units: string [] = ['grams', 'kilo grams', 'dozen', 'pieces'];
    charityHouse: any;
    today = new Date();
    date;
    finalDonationObject;
    dateTill;
    foodImage;
    labels = [];
    isLabeling = false;
    minDate: String = new Date().toISOString();
    maxDate: any = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString();

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router,
                public db: AngularFireStorage) {
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
            name: [null, Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            expiry_date: [null, [Validators.required]],
            type: [null, [Validators.required]],
            quantity: [null, Validators.compose([Validators.pattern('[0-9 ]*'), Validators.required])],
            unit: [null, Validators.required]
        });
    }

    async imageFileChanged(e) {
        this.foodImage = e.target.files[0];
        await this.utils.presentLoading("Please wait...");
        await this.getFoodLabels(this.foodImage).subscribe(data => {
            this.utils.stopLoading();
            console.log(data);
            if (data.length > 0) {
                const foodLabels = data.filter(d => d.label == 'food' || d.label == 'meal');
                if (foodLabels.length > 0) {
                    this.labels = data;
                    this.isLabeling = true;
                    setTimeout(() => {
                        document.getElementById("food-label").click();
                    }, 500);
                } else {
                    this.utils.presentAlert("Please select a food image.");
                }
            }
        },
        error => {
            this.utils.stopLoading();
        });
    }

    async uploadImageAndFoodDonation() {
        if (!this.foodImage) {
            alert("Please select a food image...");
            return;
        }
        const donner = JSON.parse(localStorage.getItem('user'));
        let fileName = `${Date.now()}.png`;
        const filePath = `food-images/${donner.id}/${fileName}`;
        const storageRef = this.db.ref(filePath);
        await this.utils.presentLoading("Please wait...");
        await this.db.upload(filePath, this.foodImage).then(async (snapshot) => {
            await storageRef.getDownloadURL().subscribe(downloadURL => {
                this.donateFood(downloadURL);
            });
        });
    }

    async donateFood(imageUrl) {
        this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        const test = this.donateFoodForm.value;
        // const dateFromForm = test.expiry_date.getFullYear() + '-' + (test.expiry_date.getMonth() + 1 ) + '-' + test.expiry_date.getDate();
        const dateFormat = test.expiry_date.split('T')[0];
        let today = this.dateToString(new Date);
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
            '"donation": {' + '"date": "' + today + '",' +
            '"donner": {' + '"id": ' + donnerID + ' },' +
            '"charityHouse": {' + '"id": ' + 1 + ' }}}';
        const foodDonation = JSON.parse(this.finalDonationObject);
        foodDonation.foodItem.image = imageUrl;
        foodDonation.donation.acceptanceTime = "not added yet";
        foodDonation.donation.status = "new";
        this.saveFoodDonation(foodDonation).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert('Food donated. Please! wait while charity house connect with you. Thanks for donating food.');
                this.router.navigate(['home']);
            },
            error => {
                this.utils.stopLoading();
            });
    }

    saveFoodDonation(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/foodDonationDetails/newFoodDonationDetails`;
        return this.http.post(url, dataObj);
    }

    getFoodLabels(file): Observable<any> {
        let formData = new FormData();
        formData.append("file", file);
        const url = `${this.service.homeUrl}/upload`;
        return this.http.post(url, formData);
    }

    dateToString(today) {
        let dateFormat = "";
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let hour = today.getHours();
        let mint = today.getMinutes();
        let second = today.getSeconds();
        dateFormat = `${year}-${month}-${day} ${hour}:${mint}:${second}`;
        return dateFormat;
    }
}
