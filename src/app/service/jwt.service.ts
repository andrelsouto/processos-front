import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  loggedInfo(){

    return jwt_decode(this.getToken());
  }

  setToken(token: string){

    localStorage.setItem('authToken', token);
  }

  getToken(){

    return localStorage.getItem('authToken');
  }

  deleteToken(){

    localStorage.removeItem('authToken');
  }

  isLogged(): boolean{
    
    return localStorage.getItem('authToken') ? true : false ;
  }
}
