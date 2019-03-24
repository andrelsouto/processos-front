import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Processo } from 'src/app/models/processo';

@Component({
  selector: 'app-confirm-answer',
  templateUrl: './confirm-answer.component.html',
  styleUrls: ['./confirm-answer.component.css']
})
export class ConfirmAnswerComponent implements OnInit {

  @Input() show: boolean = false;
  processo: Processo;
  @Output() confirma = new EventEmitter<Processo>();

  constructor() { }

  ngOnInit() {
  }

  delete(){

    this.confirma.emit(this.processo);
  }

}
