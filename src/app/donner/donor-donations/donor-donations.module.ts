import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DonorDonationsPage} from './donor-donations.page';

const routes: Routes = [
    {
        path: '',
        component: DonorDonationsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DonorDonationsPage]
})
export class DonorDonationsPageModule {
}
