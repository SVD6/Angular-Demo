import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Data } from './data.model';


@Injectable({
  providedIn: 'root'
})
export class LatexService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  async createData(data: Data) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('users').add({
      ...data,
      uid: user.uid,
      data: data.equation
    });
  }

  updateData(uid: string, data: Data) {
    return this.db.collection('users').doc(uid).update(data.equation);
  }

  getUserData() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.collection('users', ref =>
            ref.where('uid', '==' user.uid)
          )
        }
      })
    )
  }

}

/*
ERROR TypeError: listener is not a function
    at medium-editor.js:2608
    at Array.forEach (<anonymous>)
    at Events.triggerCustomEvent (medium-editor.js:2607)
    at Events.updateInput (medium-editor.js:2926)
    at MediumEditor.checkContentChanged (medium-editor.js:7771)
    at MediumEditor.setContent (medium-editor.js:7756)
    at LatexComponent.ngAfterViewInit (latex.component.ts:30)
    at callHook (core.js:3038)
    at callHooks (core.js:3008)
    at executeInitAndCheckHooks (core.js:2960) */