import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SattuRegisterComponent } from './sattu-register.component';

describe('SattuRegisterComponent', () => {
  let component: SattuRegisterComponent;
  let fixture: ComponentFixture<SattuRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SattuRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SattuRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
