import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSattuRegisterComponent } from './create-sattu-register.component';

describe('CreateSattuRegisterComponent', () => {
  let component: CreateSattuRegisterComponent;
  let fixture: ComponentFixture<CreateSattuRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSattuRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSattuRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
