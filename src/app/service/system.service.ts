import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  [x: string]: any;
  data = {
    about:  'System Service',
    user: {
      loggedIn: false,
      instance: null
    }
  };
  constructor() { }
}
