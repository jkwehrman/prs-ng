import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrRequestApproveComponent } from './pr-request-approve.component';

describe('PrRequestApproveComponent', () => {
  let component: PrRequestApproveComponent;
  let fixture: ComponentFixture<PrRequestApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrRequestApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrRequestApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
