import { TestBed } from '@angular/core/testing';

import { KmbLwbService } from './kmb-lwb.service';

describe('KmbLwbService', () => {
  let service: KmbLwbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KmbLwbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
