import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { MessageResponseComponent } from './message-response/message-response.component';
import { ConfirmAnswerComponent } from './confirm-answer/confirm-answer/confirm-answer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProcessoDirective } from './directives/processo.directive';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    MenuComponent, 
    LoadComponent, 
    MessageResponseComponent, 
    ConfirmAnswerComponent,
    ProcessoDirective,
    SpinnerComponent
  ],
  exports: [
    MenuComponent,
    LoadComponent,
    MessageResponseComponent,
    ConfirmAnswerComponent,
    SweetAlert2Module,
    ProcessoDirective,
    SpinnerComponent
  ]
})
export class SharedModule { }
