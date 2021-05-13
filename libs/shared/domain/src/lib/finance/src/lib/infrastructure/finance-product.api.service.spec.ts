import { TestBed } from '@angular/core/testing';
import { FinanceProductApiService } from './finance-product.api.service';


describe('FinanceApiService', () => {
  let service: FinanceProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
