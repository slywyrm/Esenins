import { TestBed, inject } from '@angular/core/testing';

import { ApiUrlInterceptor } from './api-url-interceptor.service';

describe('ApiUrlInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUrlInterceptor]
    });
  });

  it('should be created', inject([ApiUrlInterceptor], (service: ApiUrlInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
