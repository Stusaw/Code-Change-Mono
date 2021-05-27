import { async, TestBed } from '@angular/core/testing';
import { TranslationModule } from './translation.module';

describe('TranslationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslationModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TranslationModule).toBeDefined();
  });
});
