import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorInterceptor, HttpClientModule
    ],
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
