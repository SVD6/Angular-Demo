import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatexRoutingModule } from './latex-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LatexPageComponent } from './latex-page/latex-page.component';
import { RendererComponent } from './renderer/renderer.component';
import { LatexComponent } from './latex.component';


@NgModule({
  declarations: [LatexPageComponent, RendererComponent, LatexComponent],
  imports: [
    CommonModule,
    LatexRoutingModule,
    SharedModule
  ]
})
export class LatexModule { }
