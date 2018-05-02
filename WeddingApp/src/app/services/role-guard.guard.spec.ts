import { TestBed, async, inject } from '@angular/core/testing';

import { RoleGuard } from './role-guard.guard';

describe('RouteGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard]
    });
  });

  it('should ...', inject([RoleGuard], (guard: RoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
