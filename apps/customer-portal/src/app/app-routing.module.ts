import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'dealcard/:dealId',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
