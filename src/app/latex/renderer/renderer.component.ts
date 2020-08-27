import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-renderer',
  inputs: ['content'],
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnChanges, OnInit {
  @Input() content: string;

  constructor(public gs: GlobalService) { }

  mathJaxObject;

  // tslint:disable-next-line: typedef
  ngOnChanges(changes: SimpleChanges) {
    if (changes.content) {
     // console.log("content chnaged")
       this.renderMath();
     }
   }

   // tslint:disable-next-line: typedef
   renderMath(){

   this.mathJaxObject  = this.gs.nativeGlobal() ['MathJax'] ;

   const angObj = this;
   setTimeout(() => {
     console.log('1234');
     angObj.mathJaxObject.Hub.Queue(['Typeset', angObj.mathJaxObject.Hub], 'mathContent');

   }, 1000);
   }
   // tslint:disable-next-line: typedef
   loadMathConfig(){
     console.log('load config');

     this.mathJaxObject  = this.gs.nativeGlobal() ['MathJax'] ;
     this.mathJaxObject.Hub.Config({
       showMathMenu: false,
       tex2jax: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
       menuSettings: { zoom: 'Double-Click', zscale: '150%' },
       CommonHTML: { linebreaks: { automatic: true } },
       'HTML-CSS': { linebreaks: { automatic: true } },
              SVG: { linebreaks: { automatic: true } }
     });
   }

   // tslint:disable-next-line: typedef
   ngOnInit(){
      this.loadMathConfig();
      this.renderMath();

   }

}
