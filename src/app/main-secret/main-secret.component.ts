import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-secret',
  templateUrl: './main-secret.component.html',
  styleUrls: ['./main-secret.component.scss']
})
export class MainSecretComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
