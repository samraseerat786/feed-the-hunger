import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DonorDonationsPage} from './donor-donations.page';

describe('DonorDonationsPage', () => {
    let component: DonorDonationsPage;
    let fixture: ComponentFixture<DonorDonationsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DonorDonationsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DonorDonationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
