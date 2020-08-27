import { Component, ViewChild, ElementRef, OnInit, AfterViewInit,  } from '@angular/core';
import MediumEditor from 'medium-editor';
import { RendererComponent } from '../renderer/renderer.component';

@Component({
  selector: 'app-latex-page',
  templateUrl: './latex-page.component.html',
  styleUrls: ['./latex-page.component.scss']
})
export class LatexPageComponent implements AfterViewInit {
  @ViewChild('media') media: ElementRef;
  @ViewChild(RendererComponent) childView: RendererComponent;

  name = 'Mathjax ';
  mathContent = `When $ a \\ne 0 $, there are two solutions to \\(ax^2 + bx + c = 0 \\) and they are
  $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;

  constructor() { }

  ngAfterViewInit(): void {
    const edit = this.media.nativeElement;
    const editor = new MediumEditor(edit);
  }
}
