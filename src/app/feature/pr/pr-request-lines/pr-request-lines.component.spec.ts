import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrRequestLinesComponent } from './pr-request-lines.component';

describe('PrRequestLinesComponent', () => {
  let component: PrRequestLinesComponent;
  let fixture: ComponentFixture<PrRequestLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrRequestLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrRequestLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
