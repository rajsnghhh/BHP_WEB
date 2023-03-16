import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SattuRecordHistoryComponent } from './sattu-record-history.component';

describe('SattuRecordHistoryComponent', () => {
  let component: SattuRecordHistoryComponent;
  let fixture: ComponentFixture<SattuRecordHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SattuRecordHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SattuRecordHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
