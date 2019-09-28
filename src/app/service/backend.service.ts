import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

const configUrl = 'assets/config.json';
const host = 'https://glacial-brushlands-71010.herokuapp.com/';
// const host = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient, private auth: JwtService) { }

  getConfig() {

    return this.http.get<{ backendHost: String, textfile: string }>(configUrl);
  }

  getHost(): string {

    return host;
  }

  request(method: string, url: string, params?): Observable<any> {

    if (method.toUpperCase() === 'POST') {

      return this.http.post(`${host}${url}`, params);
    } else if (method.toUpperCase() === 'GET') {

      return this.http.get(`${host}${url}`, { params: params });
    }
  }

  protectedRequest(method: string, url: string, params?): Observable<any> {

    if (method.toUpperCase() === 'POST') {

      return this.http.post<any>(`${host}${url}`, params, { headers: {'Authorization': this.auth.getToken()}});
    } else if (method.toUpperCase() === 'GET') {

      return this.http.get<any>(`${host}${url}`, { params: params, headers: {'Authorization': this.auth.getToken()}});
    }
  }

}
