import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscortReferRegisterMatModalComponent } from './escort-refer-register-mat-modal.component';

describe('EscortReferRegisterMatModalComponent', () => {
  let component: EscortReferRegisterMatModalComponent;
  let fixture: ComponentFixture<EscortReferRegisterMatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscortReferRegisterMatModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscortReferRegisterMatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
