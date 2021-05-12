import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dealcard',
    loadChildren: () =>
      import('@deal-configurator-mfe/feature-dealcard').then((m) => m.FeatureDealcardModule),
  },
  {
    path: '',
    redirectTo: 'dealcard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
