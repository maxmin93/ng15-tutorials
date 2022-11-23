import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsListComponent } from './dogs-list.component';
// import { DogViewComponent } from './dog-view.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
  // { path: 'view/:index', component: DogViewComponent },
  {
    path: 'details/:index',
    // lazy load the DogViewComponent
    loadComponent: () =>
      import('./dog-view.component').then((m) => m.DogViewComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
