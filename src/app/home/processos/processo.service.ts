import { Injectable } from '@angular/core';

import { BackendService } from 'src/app/service/backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  
  constructor(private backendService: BackendService) { }

  getProcessos(){

    return this.backendService.request('get', 'processo/getAll');
  }

  getSentenciados(){

    return this.backendService.request('get', 'processo/sentenciados');
  }

  getNaoSentenciados(){

    return this.backendService.request('get', 'processo/naoSentenciados');
  }
    

  sentenciarProcesso(numero: string){

    return this.backendService.request('post', 'processo/' + numero);
  }
}
