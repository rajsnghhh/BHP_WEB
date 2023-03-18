import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SattuRegisterReportComponent } from './sattu-register-report.component';

describe('SattuRegisterReportComponent', () => {
  let component: SattuRegisterReportComponent;
  let fixture: ComponentFixture<SattuRegisterReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SattuRegisterReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SattuRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
