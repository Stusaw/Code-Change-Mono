import { async, TestBed } from '@angular/core/testing';
import { FeatureHomeModule } from './feature-home.module';

describe('FeatureHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureHomeModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FeatureHomeModule).toBeDefined();
  });
});
