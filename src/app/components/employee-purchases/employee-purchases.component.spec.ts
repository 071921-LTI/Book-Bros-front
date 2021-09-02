import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePurchasesComponent } from './employee-purchases.component';

describe('EmployeePurchasesComponent', () => {
  let component: EmployeePurchasesComponent;
  let fixture: ComponentFixture<EmployeePurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
