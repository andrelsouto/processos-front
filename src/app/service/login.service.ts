import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private backendService: BackendService) { }

  login(credentials){

    return this.backendService.request('post', 'login', credentials);
  }
}
