import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataFormComponent } from './customer-data-form.component';

describe('CustomerDataFormComponent', () => {
  let component: CustomerDataFormComponent;
  let fixture: ComponentFixture<CustomerDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
