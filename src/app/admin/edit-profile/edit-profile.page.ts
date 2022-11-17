import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    updateForm;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private router: Router,
                private service: ListService,
                private formBuilder: FormBuilder) {
    }

    user;
    childUser;
    donner;
    data: Observable<any>;

    ngOnInit() {
        this.route.paramMap.subscribe(async paramMap => {
            const val = paramMap.get('id');
            const url = `${this.service.homeUrl}/users/getUser/${val}`;
            await this.utils.presentLoading("Please wait...");
            this.data = this.http.get(url);
            this.data.subscribe(data => {
                this.utils.stopLoading();
                this.user = data;
            });
        });
        this.formInitializer();
    }

    formInitializer() {
        console.log('formInitializer', this.user);
        this.updateForm = this.formBuilder.group({
            id: [null, [Validators.required]],
            first_name: [null, [Validators.required]],
            last_name: [null, [Validators.required]],
            email: [null, [Validators.required]],
            user_name: [null, [Validators.required]],
            password: [null, [Validators.required]]
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

    async updateData() {
        if (this.updateForm.valid) {
            const formData = this.updateForm.value;
            await this.utils.presentLoading("Please wait...");
            this.saveHttpReq(this.generateUser()).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentToast('User updated successfully');
                const url = `/admin-profile/${this.user.id}`;
                this.router.navigateByUrl(url);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
        }
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/users/updateUser`;
        return this.http.put(url, dataObj);
    }
}
