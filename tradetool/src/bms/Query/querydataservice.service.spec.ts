import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { QuerydataserviceService } from './querydataservice.service';

describe('QuerydataserviceService', () => {
  let service: QuerydataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(QuerydataserviceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
