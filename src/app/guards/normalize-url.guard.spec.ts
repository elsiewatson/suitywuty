import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { normalizeUrlGuard } from './normalize-url.guard';

describe('normalizeUrlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => normalizeUrlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
