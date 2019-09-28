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

}
