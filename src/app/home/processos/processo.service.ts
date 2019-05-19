import { Injectable } from '@angular/core';

import { BackendService } from 'src/app/service/backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  
  constructor(private backendService: BackendService) { }

  getProcessos(){

    return this.backendService.protectedRequest('get', 'processo/getAll');
  }

  getSentenciados(){

    return this.backendService.protectedRequest('get', 'processo/sentenciados');
  }

  getNaoSentenciados(){

    return this.backendService.protectedRequest('get', 'processo/naoSentenciados');
  }
    

  sentenciarProcesso(numero: string){

    return this.backendService.protectedRequest('post', 'processo/' + numero);
  }

  sentenciarProcessoQrCode(numero: string){

    return this.backendService.request('get', 'processo/sentenciar/' + numero);
  }

  deleteProcesso(id: string){

    return this.backendService.protectedRequest('post', 'processo/delete/' + id);
  }
}
