import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.page.html',
    styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
    feedbackForm: FormGroup;

    constructor(private utils: UtilsService,
                private route: ActivatedRoute,
                private http: HttpClient,
                private router: Router,
                private service: ListService,
                private formBuilder: FormBuilder) {
    }

    donnerID;
    finalFeedbackObject;

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.donnerID = paramMap.get('id');
        });
        this.formInitializer();
    }

    formInitializer() {
        this.feedbackForm = this.formBuilder.group({
            email: [null, Validators.compose([Validators.required])],
            subject: [null, [Validators.required]],
            feedback_message: [null, [Validators.required]]
        });
    }

    async sendFeedback() {
        const test = this.feedbackForm.value;
        const charityHouse = JSON.parse(localStorage.getItem('user'));
        const charityID = charityHouse.id;
        this.finalFeedbackObject = '{"email": "' + test.email + '",' +
            ' "subject": "' + test.subject + '",' +
            ' "feedbackMessage": "' + test.feedback_message + '",' +
            ' "donner": { "id": ' + this.donnerID + '},' +
            ' "charityHouse": { "id": ' + charityID + '}' + '}';
        const feedback = JSON.parse(this.finalFeedbackObject);
        await this.utils.presentLoading("Please wait...");
        this.saveFeedback(feedback).subscribe(data => {
                this.utils.stopLoading();
                this.utils.presentAlert('Feedback is saved. Thanks for your feedback.');
                this.router.navigate(['donner-list']);
            },
            error => {
                this.utils.stopLoading();
                console.log('error', error);
            });
    }

    saveFeedback(dataObj): Observable<any> {
        const url = `${this.service.homeUrl}/feedbacks/newFeedback`;
        return this.http.post(url, dataObj);
    }
}
