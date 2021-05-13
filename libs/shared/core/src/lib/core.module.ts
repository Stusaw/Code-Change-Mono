import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DomainModule } from '@shared-domain';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [DomainModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('Core module constructing...');
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
