import { TestBed } from '@angular/core/testing';

import { AutenticacionGuardService } from './autenticacion-guard.service';

describe('AutenticacionGuardService', () => {
  let service: AutenticacionGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
