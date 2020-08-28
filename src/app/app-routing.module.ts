import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { AuthGuard } from './user/auth.guard';
import { LatexComponent } from './latex/latex.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', component: LatexComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
