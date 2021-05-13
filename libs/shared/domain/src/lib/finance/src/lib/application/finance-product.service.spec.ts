import { TestBed } from '@angular/core/testing';
import { FinanceProductService } from './finance-product.service';

describe('FinanceProductService', () => {
  let service: FinanceProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
