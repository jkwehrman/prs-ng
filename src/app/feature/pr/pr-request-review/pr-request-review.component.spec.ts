import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrRequestReviewComponent } from './pr-request-review.component';

describe('PrRequestReviewComponent', () => {
  let component: PrRequestReviewComponent;
  let fixture: ComponentFixture<PrRequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrRequestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
