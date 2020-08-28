import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first());
  }

  ngOnInit(): void {
    this.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          this.router.navigateByUrl('');
        } else {

        }
      })
    );
  }
}
