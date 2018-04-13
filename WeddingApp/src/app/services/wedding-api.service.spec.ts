import { TestBed, inject } from '@angular/core/testing';

import { WeddingApiService } from './wedding-api.service';

describe('WeddingApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeddingApiService]
    });
  });

  it('should be created', inject([WeddingApiService], (service: WeddingApiService) => {
    expect(service).toBeTruthy();
  }));
});
