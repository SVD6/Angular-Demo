import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import * as MediumEditor from 'medium-editor';
import { first, map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { LatexService } from './latex.service';
import { User } from './data.model';

@Component({
  selector: 'app-latex',
  templateUrl: './latex.component.html',
  styleUrls: ['./latex.component.scss'],
})
export class LatexComponent implements AfterViewInit {
  @Input() editorModel: any;
  @Output() editorModelChange = new EventEmitter();

  private lastViewModel: string;
  public paragraph = '';
  private placeholder = 'Type your equation here:';
  private editor: any;

  sub: Subscription;

  @ViewChild('editable', { static: true }) editable: ElementRef;

  // tslint:disable-next-line: typedef
  @HostListener('window:keyup') onKeyChange() {
    this.updateModel();
  }

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    public latexService: LatexService
  ) {}

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.editor = new MediumEditor(this.editable.nativeElement);
    this.editor.setContent(this.placeholder);
    this.getData();
  }

  async getData() {
    const user = await this.afAuth.currentUser;
    const ref = await this.db;

    this.db
      .collection<User>('users', (ref) => ref.where('uid', '==', user.uid))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            console.log(data);
          })
        )
      );
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first());
  }

  updateModel(): void {
    const plainText = this.editor
      .getContent()
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, '');
    console.log(plainText);
    this.paragraph = plainText;
    this.updateFirebase(plainText);
  }

  // tslint:disable-next-line: typedef
  async updateFirebase(equation: string) {
    const user = await this.afAuth.currentUser;
    this.db.collection('users').doc(user.uid).update({ equation });
  }
}
