import { Component, OnInit, ViewChild } from '@angular/core';

import { ProcessoService } from './../processo.service';
import { Processo } from 'src/app/models/processo';
import { TableComponent } from '../table/table.component';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  processos: Processo[];
  filter: string = '';
  @ViewChild(TableComponent) tableProcessos: TableComponent;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;

  constructor(private processoService: ProcessoService) { }

  ngOnInit() {

    this.processoService.getProcessos().subscribe(p => {
      this.processos = p;
    }), erro => alert(erro);
  }

  sentenciar(processo: Processo){
    
    this.processoService.sentenciarProcesso(processo.numero).subscribe((res)=>{
      res = JSON.parse(res) as Processo;
      let index: number = this.tableProcessos.processos.findIndex(p => p.numero == res.numero);
      this.tableProcessos.processos[index] = res;
      processo.setenciado ? this.message.message = 'Processo não mais sentenciado.' : this.message.message = 'Processo sentenciado com sucesso!';
      processo.setenciado ? this.message.css = 'warning' : this.message.css = 'success';
    },
    () => {
      this.message.message = 'Erro ao sentenciar processo.';
      this.message.css = 'danger';
    });
  }

}
