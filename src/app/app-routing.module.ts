import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page.component';

const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'modulo-auth', loadChildren: () => import('./moduloAuth/modulo-auth.module').then(m => m.AuthModule) },
  { path: 'modulo-home', loadChildren: () => import('./moduloHome/modulo-home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
