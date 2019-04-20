import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Processo } from 'src/app/models/processo';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appProcesso]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ProcessoDirective, multi: true }]
})
export class ProcessoDirective {

  @Input('appProcesso') public processo: Processo;
  @Output('processo') processoSelecionado = new EventEmitter<Processo>();

  @HostListener('mouseenter') showProcesso(){

    this.processoSelecionado.emit(this.processo);
  }

  constructor() { }

}
