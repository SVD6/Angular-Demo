import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatexRoutingModule } from './latex-routing.module';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    LatexRoutingModule
  ]
})
export class LatexModule { }
