import { Component, OnInit, ViewChild } from '@angular/core';

import { Processo } from 'src/app/models/processo';
import { TableComponent } from '../table/table.component';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-suspensos',
  templateUrl: './suspensos.component.html',
  styleUrls: ['./suspensos.component.css']
})
export class SuspensosComponent implements OnInit {

  processos: Processo[];
  filter: string = '';
  copied = false;
  @ViewChild(TableComponent) tableProcessos: TableComponent;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;

  constructor(private processoService: ProcessoService) { }

  ngOnInit() {

    this.processoService.getSuspensos().subscribe(p => {
      this.processos = p;
    });
  }

  suspender(processo: Processo) {
    this.processoService.suspenderProcesso(processo.numero).subscribe((res: Processo) => {
      const index: number = this.tableProcessos.processos.findIndex(p => p.numero === res.numero);
      this.tableProcessos.processos.splice(index, 1);
      this.message.message = 'Processo sentenciado com sucesso.';
      this.message.css = 'success';
    },
    () => {
      this.message.message = 'Erro ao sentenciar processo.';
      this.message.css = 'danger';
    });
  }

  cpNumeros() {
    if (this.processos && this.processos.length > 0) {
      const cp = this.processos.map(p => p.numero)
        .reduce((acumulado, atual, idx, arr) => {
          (idx + 1) % 2 === 0 ? acumulado += atual + ',\n' : acumulado += atual + ',\t';
          if (arr.length === idx + 1) {
            acumulado = acumulado.substr(0, acumulado.length - 2);
          }
          return acumulado;
        }, '');
        const p: any = window.navigator;
        p.clipboard.writeText(cp);
        this.copied = true;
    }
  }
}
