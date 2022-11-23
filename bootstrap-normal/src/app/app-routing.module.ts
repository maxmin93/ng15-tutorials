import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';

const routes: Routes = [
  { path: '', children: [] }, // empty path
  { path: 'foo', component: FooComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
