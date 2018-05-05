import { TestBed, async, inject } from '@angular/core/testing';

import { PortfolioItemCanDeactivateGuard } from './portfolio-item-can-deactivate.guard';

describe('PortfolioItemCanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioItemCanDeactivateGuard]
    });
  });

  it('should ...', inject([PortfolioItemCanDeactivateGuard], (guard: PortfolioItemCanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
