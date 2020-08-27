import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatexPageComponent } from './latex-page/latex-page.component';

const routes: Routes = [
  { path: '', component: LatexPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatexRoutingModule { }
