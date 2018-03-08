import { TestBed, async, inject } from '@angular/core/testing';

import { InworkGuard } from './inwork.guard';

describe('InworkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InworkGuard]
    });
  });

  it('should ...', inject([InworkGuard], (guard: InworkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
