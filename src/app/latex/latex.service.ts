import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { switchMap, map } from 'rxjs/operators';

import { User } from './data.model';


@Injectable({
  providedIn: 'root'
})
export class LatexService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  updateData(uid: string, data: User) {
    return this.db.collection('users').doc(uid).update(data.equation);
  }

  // tslint:disable-next-line: typedef
  getUserData(uid: string) {
      return this.db.collection('users').doc(uid).snapshotChanges();
  }
}
