import { async, TestBed } from '@angular/core/testing';
import { FeatureFinanceModule } from './feature-finance.module';

describe('FeatureFinanceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureFinanceModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FeatureFinanceModule).toBeDefined();
  });
});
