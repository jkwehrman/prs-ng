import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrliDeleteComponent } from './prli-delete.component';

describe('PrliDeleteComponent', () => {
  let component: PrliDeleteComponent;
  let fixture: ComponentFixture<PrliDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrliDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrliDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
