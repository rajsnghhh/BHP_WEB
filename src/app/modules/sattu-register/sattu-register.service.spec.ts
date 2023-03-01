import { TestBed } from '@angular/core/testing';

import { SattuRegisterService } from './sattu-register.service';

describe('SattuRegisterService', () => {
  let service: SattuRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SattuRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
