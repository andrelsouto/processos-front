import { Component, OnInit, ViewChild } from '@angular/core';

import { Processo } from 'src/app/models/processo';
import { TableComponent } from '../table/table.component';
import { ProcessoService } from '../processo.service';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';

@Component({
  selector: 'app-sentaciados',
  templateUrl: './sentaciados.component.html',
  styleUrls: ['./sentaciados.component.css']
})
export class SentaciadosComponent implements OnInit {

  processos: Processo[];
  filter: string = '';
  @ViewChild(TableComponent) tableProcessos: TableComponent;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;

  constructor(private processoService: ProcessoService) { }

  ngOnInit() {

    this.processoService.getSentenciados().subscribe(p => {
      this.processos = p;
      console.log(p);
    }, e => console.log('erro', e));
  }

  sentenciar(processo: Processo){
    
    this.processoService.sentenciarProcesso(processo.numero).subscribe((res)=>{
      res = JSON.parse(res) as Processo;
      let index: number = this.tableProcessos.processos.findIndex(p => p.numero == res.numero);
      this.processos.splice(index, 1);
      this.message.message = 'Processo não mais sentenciado.';
      this.message.css = 'warning';
    },
    ()=>{
      this.message.message = 'Erro ao sentenciar processo.';
      this.message.css = 'danger';
    }
    );
  }

}
