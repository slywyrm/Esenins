import { TestBed, async, inject } from '@angular/core/testing';

import { ProjectResolverGuard } from './portfolio-item.resolver';

describe('ProjectResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectResolverGuard]
    });
  });

  it('should ...', inject([ProjectResolverGuard], (guard: ProjectResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
