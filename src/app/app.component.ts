import {Component, OnInit} from '@angular/core';
import {NavController, IonicModule, AlertController} from '@ionic/angular';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {ListService} from './services/list.service';
import {AuthService} from "./services/auth.service";
import {UtilsService} from "./services/utils.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    role: any;
    t: any;
    user: any;
    defaultImage = 'assets/20181028_231840.png';

    constructor(private alertCtrl: AlertController,
                private utils: UtilsService,
                private platform: Platform,
                private router: Router,
                private splashScreen: SplashScreen,
                private service: ListService,
                private statusBar: StatusBar,
                private authService: AuthService,
                private navCtrl: NavController,
                public http: HttpClient,
    ) {
        this.initializeApp();
    }

    appPages = [];

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.checkUser();
        });
    }

    checkUser() {
        this.user = this.authService.getUser();
        if (this.user) {
            this.loadUser(this.user.user.id);
            this.loadUserAndPages('');
            this.navCtrl.navigateRoot(['/home'], {replaceUrl: true});
        } else {
            this.navCtrl.navigateRoot(['']);
        }
    }

    ngOnInit() {
        this.service.currentMessage.subscribe(data => {
            if (data) {
                this.role = data;
                this.role = this.role.role;
                this.loadUserAndPages(this.role);
            }
        });
    }

    async loadUser(id) {
        const url = this.service.homeUrl + `/users/getUser/${id}`;
        await this.utils.presentLoading("Checking access, please wait...");
        this.http.get(url, {observe: 'response'}).subscribe(response => {
            this.utils.stopLoading();
            this.t = response.body;
            if(this.t.applicationStatus == "blocked"){
                localStorage.clear();
                this.user = null;
                this.router.navigate(['']);
                this.utils.presentAlert("OOPS! Your account is blocked. Please contact feed.hunger786@gmail.com to unblock your account.");
            }
        }, (error) => {
            this.utils.stopLoading();
            console.log('error', error);
        });
    }

    loadUserAndPages(role: any) {
        this.appPages = JSON.parse(localStorage.getItem('appPages'));
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    logOut() {
        this.presentAlert('Are you sure to logout application.');
    }

    addProfilePicture() {
        this.router.navigate(['profile-picture']);
    }

    async presentAlert(messag) {
        const alert = await this.alertCtrl.create({
            header: 'Alert !',
            message: messag,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'primary',
                    handler: () => {
                        localStorage.clear();
                        this.user = null;
                        this.router.navigate(['']);
                    }
                }
            ]
        });
        alert.present();
    }
}
