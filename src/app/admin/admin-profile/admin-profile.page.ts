import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {UtilsService} from "../../services/utils.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
    selector: 'app-admin-profile',
    templateUrl: './admin-profile.page.html',
    styleUrls: ['./admin-profile.page.scss'],
})
export class AdminProfilePage implements OnInit {

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private router: Router,
                private http: HttpClient,
                private service: ListService,
                public db: AngularFireStorage) {
    }

    user;
    data;
    profileImage: any;
    defaultImage = 'assets/20181028_231840.png';

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
    }

    updateProfile() {
        this.router.navigate(['/edit-profile', this.user]);
    }

    async imageFileChanged(e) {

        this.profileImage = e.target.files[0];

        const filePath = `profile-images/${this.user.user_name}.png`;
        const storageRef = this.db.ref(filePath);

        let fileName = `Date.now().png`;
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
