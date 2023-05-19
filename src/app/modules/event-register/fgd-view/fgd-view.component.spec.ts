import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgdViewComponent } from './fgd-view.component';

describe('FgdViewComponent', () => {
  let component: FgdViewComponent;
  let fixture: ComponentFixture<FgdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgdViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
