import { Injectable } from '@angular/core';

import { Processo } from './../../models/processo';
import { BackendService } from 'src/app/service/backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private backendService: BackendService) { }

  getProcessos() {

    return this.backendService.protectedRequest('get', 'processo/getAll');
  }

  getSentenciados() {

    return this.backendService.protectedRequest('get', 'processo/sentenciados');
  }

  getSuspensos() {

    return this.backendService.protectedRequest('get', 'processo/suspensos');
  }

  getNaoSentenciados() {

    return this.backendService.protectedRequest('get', 'processo/naoSentenciados');
  }

  sentenciarProcesso(numero: string) {

    return this.backendService.protectedRequest('post', 'processo/' + numero);
  }

  suspenderProcesso(numero: string) {

    return this.backendService.protectedRequest('post', 'processo/suspender/' + numero);
  }

  sentenciarProcessoQrCode(numero: string) {

    return this.backendService.request('get', 'processo/sentenciar/' + numero);
  }

  deleteProcesso(id: string) {

    return this.backendService.protectedRequest('post', 'processo/delete/' + id);
  }

  validateProcesso(numero: string) {
    return this.backendService.protectedRequest('get', 'processo/validarNumero', { numeroProcesso: numero });
  }

  salvar(processo: Processo) {
    return this.backendService.protectedRequest('post', 'processo/saveProcesso', processo);
  }
}
