import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BackendService } from './backend.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private config: BackendService, private auth: JwtService) { }

  saveProcesso(data: any): any{

    return this.http.post(`${this.config.getHost()}processo/saveProcesso`, { numero: 40503 }, { responseType: 'text' });
  }

  downloadPdf(){

    let header = new HttpHeaders({ 'Content-Disposition': 'attachment;filename=\'processo.pdf\'',  'Authorization': this.auth.getToken()});
    return this.http.get(`${this.config.getHost()}processo/get-relatorio`, { responseType: 'blob', headers: header });
  }

  uploadPdf(data: File) {

    const dataForm = new FormData();
    dataForm.append('file', data);
    return this.http.post(`${this.config.getHost()}processo/uploadFile`, dataForm);
  }
}
