import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe',
        exposedModule: './Module',
      }).then((m) => m.FeatureDealcardModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@dealership-portal/feature-home').then(
        (m) => m.FeatureHomeModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@dealership-portal/feature-dashboard').then(
        (m) => m.FeatureDashboardModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
