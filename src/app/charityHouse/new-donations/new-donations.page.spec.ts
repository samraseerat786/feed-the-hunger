import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewDonationsPage} from './new-donations.page';

describe('NewDonationsPage', () => {
    let component: NewDonationsPage;
    let fixture: ComponentFixture<NewDonationsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewDonationsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewDonationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
