import { async, TestBed } from '@angular/core/testing';
import { FinanceModule } from './finance.module';

describe('FinanceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FinanceModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FinanceModule).toBeDefined();
  });
});
