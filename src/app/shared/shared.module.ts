import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { MessageResponseComponent } from './message-response/message-response.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent, 
    LoadComponent, 
    MessageResponseComponent
  ],
  exports: [
    MenuComponent,
    LoadComponent,
    MessageResponseComponent
  ]
})
export class SharedModule { }
