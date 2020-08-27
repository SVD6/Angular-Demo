import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSecretComponent } from './main-secret/main-secret.component';
import { AuthGuard } from './services/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';

const routes: Routes = [
  // { path: '', component: LoginPageComponent },
  {
    path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
