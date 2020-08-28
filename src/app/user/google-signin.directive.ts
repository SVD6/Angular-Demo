import { Directive, HostListener } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from './../latex/data.model';


@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

  @HostListener('click')
  async onclick() {
    // this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  // tslint:disable-next-line: typedef
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      equation: 'Type your equation here.'
    };

    return userRef.set(data, { merge: true });
  }
}
