import { Pipe, PipeTransform } from '@angular/core';
import { Processo } from 'src/app/models/processo';

@Pipe({
  name: 'processo'
})
export class ProcessoPipe implements PipeTransform {

  transform(processos: Processo[], numero: string): Processo[] {
    
    numero = numero.trim();

    if(numero){

      return processos.filter(p => p.numero.includes(numero));
    } else {

      return processos;
    }
  }

}
