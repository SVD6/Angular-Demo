import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit{

  @ViewChild('media') media: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const edit= this.media.nativeElement;
    const editor = new MediumEditor(edit);
  }

}
