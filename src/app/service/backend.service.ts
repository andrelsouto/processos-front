import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const configUrl = 'assets/config.json';
const host = 'https://glacial-brushlands-71010.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient) { }

  getConfig(){

    return this.http.get<any>(configUrl);
  }

  getHost(): string {

    return host;
  }

  request(method: string, url: string, params?): Observable<any>{

    if(method.toUpperCase() === 'POST'){

      return this.http.post(`${host}${url}`, params, { responseType: 'text' });
    }else if (method.toUpperCase() === 'GET'){

      return this.http.get(`${host}${url}`, { params: params });
    }
  }

}
