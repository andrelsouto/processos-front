import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Processo } from 'src/app/models/processo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() processos: Processo[];
  @Output() sentenciado = new EventEmitter<Processo>();
  page: number = 1;

  constructor() { }

  sentenciar(p){

    this.sentenciado.emit(p);
  }

  ngOnInit() {
  }
  
  ngOnChanges(): void {
    
    this.processos && 
      this.processos.sort((a, b) => a.numero > b.numero ? 1 : -1);
  }

}
