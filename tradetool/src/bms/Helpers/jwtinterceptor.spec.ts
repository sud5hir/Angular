import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptor } from './jwtinterceptor.service';

describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterceptor, HttpClientModule
    ],
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
