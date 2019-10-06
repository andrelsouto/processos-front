import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule } from 'ngx-mask'
import { MenuComponent } from './menu/menu.component';
import { LoadComponent } from './load/load.component';
import { MessageResponseComponent } from './message-response/message-response.component';
import { ConfirmAnswerComponent } from './confirm-answer/confirm-answer/confirm-answer.component';
import { ProcessoDirective } from './directives/processo.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProcessoExistsValidatorDirective } from './validators/processo-exists.validator';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    NgxMaskModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    LoadComponent,
    MessageResponseComponent,
    ConfirmAnswerComponent,
    ProcessoDirective,
    SpinnerComponent,
    ProcessoExistsValidatorDirective
  ],
  exports: [
    MenuComponent,
    LoadComponent,
    MessageResponseComponent,
    ConfirmAnswerComponent,
    SweetAlert2Module,
    ProcessoDirective,
    SpinnerComponent,
    ProcessoExistsValidatorDirective,
    NgxMaskModule
  ]
})
export class SharedModule { }
