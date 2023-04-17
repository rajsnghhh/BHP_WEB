import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventRegisterComponent } from './create-event-register.component';

describe('CreateEventRegisterComponent', () => {
  let component: CreateEventRegisterComponent;
  let fixture: ComponentFixture<CreateEventRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
