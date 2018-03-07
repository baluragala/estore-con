import { TestBed, inject } from '@angular/core/testing';

import { Productv2Service } from './productv2.service';

describe('Productv2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Productv2Service]
    });
  });

  it('should be created', inject([Productv2Service], (service: Productv2Service) => {
    expect(service).toBeTruthy();
  }));
});
