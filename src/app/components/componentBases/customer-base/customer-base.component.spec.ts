import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBaseComponent } from './customer-base.component';

describe('CustomerBaseComponent', () => {
  let component: CustomerBaseComponent;
  let fixture: ComponentFixture<CustomerBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
