import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);

  constructor(private auth: JwtService) { 

    this.auth.isLogged() && this.decodeAndNotify();
  }

  getLoggedUser(){

    return this.userSubject.asObservable();
  }

  updateLoggegUser(){

  }

  private decodeAndNotify(){

    const token = this.auth.getToken();
    this.auth.setToken(token);
    const user = this.auth.loggedInfo();
    this.userSubject.next(user);
  }

  logoffUser(){

    this.auth.deleteToken();
  }

  isLogged(): boolean{

    return this.auth.isLogged();
  }
}
