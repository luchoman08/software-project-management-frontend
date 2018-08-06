import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {
  constructor() {
    window.localStorage['jwtToken'] = 'f97dcbfa58c0be8ae1d9d23db04f98ba0ebe27d0'
  }
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
