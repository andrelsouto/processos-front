import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, ContentChild } from '@angular/core';

import { Processo } from 'src/app/models/processo';
import { ConfirmAnswerComponent } from 'src/app/shared/confirm-answer/confirm-answer/confirm-answer.component';
import { ProcessoService } from '../processo.service';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';
import { finalize } from 'rxjs/operators';
import { ProcessoDirective } from 'src/app/shared/directives/processo.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() processos: Processo[];
  @Input() isSuspensao = false;
  @Output() sentenciado = new EventEmitter<Processo>();
  @Output() suspensao = new EventEmitter<Processo>();
  @Output() selecionados = new EventEmitter<string[]>();
  @ViewChild(ConfirmAnswerComponent) answer: ConfirmAnswerComponent;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;
  @ContentChild(ProcessoDirective) proc!: ProcessoDirective;
  processoSelecionado: Processo;
  processosCp = new Array<any>();
  idxSelecionados = new Array<number>();
  page: number = 1;
  todos: any;

  constructor(private processoService: ProcessoService) { }

  sentenciar(p: Processo) {

    this.sentenciado.emit(p);
  }

  suspender(p: Processo) {
    this.suspensao.emit(p);
  }

  addRemoveNumeroParaCopia(value, idx: number) {
    this.processosCp.length === 0 && this.instancia();
    value ? this.idxSelecionados.push(idx) : this.idxSelecionados.splice(this.idxSelecionados.indexOf(idx), 1);
    const processoParaCopia = this.processos.map((p, indice, it) => {
      if (indice < this.idxSelecionados.length) {

        return it[this.idxSelecionados[indice]].numero;
      }
    }).filter(v => v);
    this.selecionados.emit(processoParaCopia);
    this.todos = this.processosCp.length === this.idxSelecionados.length;
  }

  selecionarTodos(value) {
    this.processosCp.length === 0 && this.instancia();
    this.processos.forEach((p, i) => this.processosCp[i] = value);
    const processoParaCopia = value ? this.processos.map(p => p.numero) : [];
    this.processosCp.forEach((p, i) => this.idxSelecionados.push(i));
    this.selecionados.emit(processoParaCopia);
  }

  instancia() {
    this.processosCp = new Array<any>(this.processos.length);
  }

  ngOnInit() {
  }

  confirmacao(processo: Processo) {

    this.processoService.deleteProcesso(processo.id).subscribe(
      (res) => {

        this.processos = this.processos.filter(p => p.id !== processo.id);
        this.message.message = 'Processo excluído com sucesso!';
        this.message.css = 'success';
      },
      (err) => {

        this.message.message = 'Erro ao excluir processo!';
        this.message.css = 'danger';
      }
    );
  }

  ngOnChanges(): void {

    this.processos && 
      this.processos.sort((a, b) => a.numero > b.numero ? 1 : -1);
  }

}
