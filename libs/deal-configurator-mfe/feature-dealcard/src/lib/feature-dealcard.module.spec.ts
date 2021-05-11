import { async, TestBed } from '@angular/core/testing';
import { FeatureDealcardModule } from './feature-dealcard.module';

describe('FeatureDealcardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureDealcardModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FeatureDealcardModule).toBeDefined();
  });
});
