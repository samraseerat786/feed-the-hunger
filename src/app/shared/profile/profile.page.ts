import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../services/list.service';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from "../../services/utils.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(private utils: UtilsService,
                public router: Router,
                private storage: Storage,
                private service: ListService,
                public http: HttpClient,
                public db: AngularFireStorage) {
    }

    result: any = [];
    reviewsList: any = [];
    temp: boolean;
    user: any;
    close = true;
    open = false;
    role: any;
    admin: boolean;
    donner: boolean;
    isEmpty = false;
    profileImage: any;
    defaultImage = 'assets/20181028_231840.png';

    async ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        const id = this.user.id;
        this.loadUser();
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

    async imageFileChanged(e) {

        this.profileImage = e.target.files[0];

        const filePath = `profile-images/${this.user.user.user_name}.png`;
        const storageRef = this.db.ref(filePath);

        await this.utils.presentLoading("Please wait...");
        await this.db.upload(filePath, this.profileImage).then(async (snapshot) => {
            await storageRef.getDownloadURL().subscribe(downloadURL => {
                console.log(downloadURL);
                let userObject = {};
                if (this.user.user) {
                    userObject = this.user.user;
                    this.user.user.image = downloadURL;
                } else {
                    userObject = this.user;
                    this.user.image = downloadURL;
                }
                localStorage.setItem("user", JSON.stringify(this.user));
                this.saveHttpReq(userObject);
            });
        });
    }

    saveHttpReq(dataObj) {
        const url = `${this.service.homeUrl}/users/updateUser`;
        this.http.put(url, dataObj).subscribe(data => {
                this.utils.stopLoading();
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

}
