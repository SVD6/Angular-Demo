import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
  // tslint:disable-next-line: typedef
  nativeGlobal() { return window; }
}
