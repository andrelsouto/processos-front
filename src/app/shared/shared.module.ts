import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { MessageResponseComponent } from './message-response/message-response.component';
import { ConfirmAnswerComponent } from './confirm-answer/confirm-answer/confirm-answer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent, 
    LoadComponent, 
    MessageResponseComponent, 
    ConfirmAnswerComponent
  ],
  exports: [
    MenuComponent,
    LoadComponent,
    MessageResponseComponent,
    ConfirmAnswerComponent
  ]
})
export class SharedModule { }
