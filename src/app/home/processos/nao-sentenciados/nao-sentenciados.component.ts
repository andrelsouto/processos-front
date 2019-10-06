import { Component, OnInit, ViewChild } from '@angular/core';
import { Processo } from 'src/app/models/processo';
import { TableComponent } from '../table/table.component';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-nao-sentenciados',
  templateUrl: './nao-sentenciados.component.html',
  styleUrls: ['./nao-sentenciados.component.css'],
  providers: [ProcessoService]
})
export class NaoSentenciadosComponent implements OnInit {

  processos: Processo[];
  filter: string = '';
  copied = false;
  numeros: Array<string>;
  @ViewChild(TableComponent) tableProcessos: TableComponent;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;

  constructor(private processoService: ProcessoService) { }

  ngOnInit() {

    this.processoService.getNaoSentenciados().subscribe(p => {
      this.processos = p;
    });
  }

  sentenciar(processo: Processo) {

    this.processoService.sentenciarProcesso(processo.numero).subscribe((res: Processo) => {
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

  suspender(processo: Processo) {
    this.processoService.suspenderProcesso(processo.numero).subscribe((res: Processo) => {
      const index: number = this.tableProcessos.processos.findIndex(p => p.numero === res.numero);
      this.tableProcessos.processos.splice(index, 1);
      this.message.message = 'Processo suspenso.';
      this.message.css = 'warning';
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
