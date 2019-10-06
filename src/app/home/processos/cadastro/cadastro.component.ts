import { Processo } from 'src/app/models/processo';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ProcessoService } from '../processo.service';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';
import { ProcessoExistsValidator } from 'src/app/shared/validators/processo-exists.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;

  constructor(private fb: FormBuilder, private processoService: ProcessoService, private processoValidaor: ProcessoExistsValidator) { }

  ngOnInit() {
    this.form = this.fb.group({
      numero: ['', {
        validators:
          Validators.compose([
          Validators.pattern(/\d{20}/),
          Validators.required
      ]),
      asyncValidators: [this.processoValidaor.validate.bind(this.processoValidaor)]
    }
    ],
      nome: ['', Validators.required]
    });
  }

  cadastrarProcesso(processo) {

    this.processoService.salvar(processo).subscribe((p: Processo) => {
      this.message.message = `Processo ${p.numero} cadastrado!`;
      this.message.css = 'success';
      this.form.reset();
    },
    (err) => {
      this.message.message = 'Não foi possível cadastrar o processo.';
      this.message.css = 'danger';
    }
    );
  }

  get numero() { return this.form.get('numero'); }

  get nome() { return this.form.get('nome'); }

}
