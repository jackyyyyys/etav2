import { TestBed } from '@angular/core/testing';

import { CtbNwfbService } from './ctb-nwfb.service';

describe('CtbNwfbService', () => {
  let service: CtbNwfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtbNwfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
