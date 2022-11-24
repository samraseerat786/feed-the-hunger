import {Component, OnInit} from '@angular/core';
import {NavController, IonicModule, AlertController} from '@ionic/angular';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {ListService} from './services/list.service';
import {AuthService} from "./services/auth.service";
import {UtilsService} from "./services/utils.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    role: any;
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
        private navCtrl: NavController
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
            this.loadUserAndPages('');
            this.navCtrl.navigateRoot(['/home'], { replaceUrl: true });
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
