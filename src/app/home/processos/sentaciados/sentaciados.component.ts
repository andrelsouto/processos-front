import { Component, OnInit, ViewChild } from '@angular/core';

import { Processo } from 'src/app/models/processo';
import { TableComponent } from '../table/table.component';
import { ProcessoService } from '../processo.service';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';

@Component({
  selector: 'app-sentaciados',
  templateUrl: './sentaciados.component.html',
  styleUrls: ['./sentaciados.component.css'],
  providers: [ProcessoService]
})
export class SentaciadosComponent implements OnInit {

  processos: Processo[];
  filter: string = '';
  copied = false;
  numeros: Array<string>;
  @ViewChild(TableComponent) tableProcessos: TableComponent;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;

  constructor(private processoService: ProcessoService) { }

  ngOnInit() {

    this.processoService.getSentenciados().subscribe(p => {
      this.processos = p;
    });
  }

  sentenciar(processo: Processo) {

    this.processoService.sentenciarProcesso(processo.numero).subscribe((res: Processo) => {
      let index: number = this.tableProcessos.processos.findIndex(p => p.numero == res.numero);
      this.processos.splice(index, 1);
      this.message.message = 'Processo não mais sentenciado.';
      this.message.css = 'warning';
    },
    () => {
      this.message.message = 'Erro ao sentenciar processo.';
      this.message.css = 'danger';
    }
    );
  }

  suspender(processo: Processo) {
    this.processoService.suspenderProcesso(processo.numero).subscribe((res: Processo) => {
      const index: number = this.tableProcessos.processos.findIndex(p => p.numero === res.numero);
      this.tableProcessos.processos.splice(index, 1);
      this.message.message = 'Processo suspenso';
      this.message.css = 'success';
    },
    () => {
      this.message.message = 'Erro ao sentenciar processo.';
      this.message.css = 'danger';
    });
  }

  cpNumeros() {
    if (this.numeros && this.numeros.length > 0) {
      const cp = this.numeros
        .reduce((acumulado, atual, idx, arr) => {
          (idx + 1) % 2 === 0 ? acumulado += atual + ',\n' : acumulado += atual + ',\t';
          if (arr.length === idx + 1) {
            acumulado = acumulado.substr(0, acumulado.length - 2);
          }
          return acumulado;
        }, '');
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = cp;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        this.copied = document.execCommand('copy');
        document.body.removeChild(selBox);
    }
  }

  numerosParaCopia(numeros: Array<string>) {
    this.numeros = numeros;
  }

}
