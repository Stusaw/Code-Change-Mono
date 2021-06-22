import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dealcard/:dealId',
    loadChildren: () =>
      import('@deal-configurator-mfe/feature-dealcard').then(
        (m) => m.FeatureDealcardModule
      )
  },
  {
    path: '',
    redirectTo: 'dealcard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
