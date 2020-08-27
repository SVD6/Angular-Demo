import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSecretComponent } from './main-secret/main-secret.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'secret', component: MainSecretComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
