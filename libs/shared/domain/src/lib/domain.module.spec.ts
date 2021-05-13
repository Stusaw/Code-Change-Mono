import { async, TestBed } from '@angular/core/testing';
import { DomainModule } from './domain.module';

describe('DomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DomainModule).toBeDefined();
  });
});
