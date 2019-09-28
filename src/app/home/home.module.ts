import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { GoogleChartsModule } from 'angular-google-charts';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { GeralComponent } from './processos/geral/geral.component';
import { NgxPaginationModule } from "ngx-pagination";
import { ProcessoPipe } from './processos/processo.pipe';
import { TableComponent } from './processos/table/table.component';
import { SentaciadosComponent } from './processos/sentaciados/sentaciados.component';
import { NaoSentenciadosComponent } from './processos/nao-sentenciados/nao-sentenciados.component';
import { ProdutividadeComponent } from './produtividade/produtividade.component';
import { SentenciarComponent } from './sentenciar/sentenciar.component';
import { SuspensosComponent } from './processos/suspensos/suspensos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    GoogleChartsModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    UploadComponent,
    GeralComponent,
    ProcessoPipe,
    TableComponent,
    SentaciadosComponent,
    NaoSentenciadosComponent,
    ProdutividadeComponent,
    SentenciarComponent,
    SuspensosComponent
  ]
})
export class HomeModule { }
