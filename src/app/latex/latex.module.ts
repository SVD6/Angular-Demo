import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatexRoutingModule } from './latex-routing.module';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';
import { LatexPageComponent } from './latex-page/latex-page.component';


@NgModule({
  declarations: [EditorComponent, LatexPageComponent],
  imports: [
    CommonModule,
    LatexRoutingModule,
    SharedModule
  ]
})
export class LatexModule { }
