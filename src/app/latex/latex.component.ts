import { Component, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as MediumEditor from 'medium-editor';

@Component({
  selector: 'app-latex',
  templateUrl: './latex.component.html',
  styleUrls: ['./latex.component.scss']
})
export class LatexComponent implements AfterViewInit, OnChanges {

  @Input() editorModel: any;
  @Output() editorModelChange = new EventEmitter();

  private lastViewModel: string;
  public outPut: string;

  editor: any;
  @ViewChild('editable', {
    static: true
  }) editable: ElementRef;


  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.editor = new MediumEditor(this.editable.nativeElement);
    this.editor.subscribe('editableInput', function(event, editable) {
      console.log(editable.textContent);
      this.outPut=editable.textContent;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes[this.lastViewModel]) {
      this.lastViewModel = this.editorModel;
      console.log(this.lastViewModel.toString());
    }
  }

  updateModel(event, editable): void {
      // const value = this.editor.getContent();
      // this.lastViewModel = value;
      const value = editable.textContent;
      // this.editorModelChange.emit(value);
      // console.log(this.lastViewModel.toString());
  }

}
