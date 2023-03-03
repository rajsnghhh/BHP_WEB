import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSattuFamilyComponent } from './view-sattu-family.component';

describe('ViewSattuFamilyComponent', () => {
  let component: ViewSattuFamilyComponent;
  let fixture: ComponentFixture<ViewSattuFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSattuFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSattuFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
