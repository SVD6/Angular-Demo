import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MainSecretComponent } from './main-secret/main-secret.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyC65_8mN3MLkm1zDtGqWl_7u8a8sYERSKU",
  authDomain: "lytx-693b7.firebaseapp.com",
  databaseURL: "https://lytx-693b7.firebaseio.com",
  projectId: "lytx-693b7",
  storageBucket: "lytx-693b7.appspot.com",
  messagingSenderId: "239816253586",
  appId: "1:239816253586:web:fce59422bbdf5b873e864b",
  measurementId: "G-976HYFY4FG"
};


@NgModule({
  declarations: [
    AppComponent,
    MainSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
