import { TestBed } from '@angular/core/testing';

import { OurproductService } from './ourproduct.service';

describe('OurproductService', () => {
  let service: OurproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
