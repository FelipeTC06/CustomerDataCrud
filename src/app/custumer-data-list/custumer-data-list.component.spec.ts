import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerDataListComponent } from './custumer-data-list.component';

describe('CustumerDataListComponent', () => {
  let component: CustumerDataListComponent;
  let fixture: ComponentFixture<CustumerDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumerDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumerDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
