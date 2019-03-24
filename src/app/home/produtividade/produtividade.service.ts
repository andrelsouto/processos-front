import { BackendService } from './../../service/backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutividadeService {

  constructor(private baendService: BackendService) { }

  getDataChart(){

    return this.baendService.protectedRequest('get', 'processo/chartData');
  }
}
