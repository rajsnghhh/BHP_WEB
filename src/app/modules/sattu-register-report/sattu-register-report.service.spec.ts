import { TestBed } from '@angular/core/testing';

import { SattuRegisterReportService } from './sattu-register-report.service';

describe('SattuRegisterReportService', () => {
  let service: SattuRegisterReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SattuRegisterReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
