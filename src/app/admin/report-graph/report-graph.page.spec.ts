import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGraphPage } from './report-graph.page';

describe('ReportGraphPage', () => {
  let component: ReportGraphPage;
  let fixture: ComponentFixture<ReportGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGraphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
