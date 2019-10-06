import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoSentenciadosComponent } from './home/processos/nao-sentenciados/nao-sentenciados.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './home/upload/upload.component';
import { GeralComponent } from './home/processos/geral/geral.component';
import { SentaciadosComponent } from './home/processos/sentaciados/sentaciados.component';
import { ProdutividadeComponent } from './home/produtividade/produtividade.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { RelatorioResolver } from './service/relatorio-resolver';
import { SentenciarComponent } from './home/sentenciar/sentenciar.component';
import { SentenciarResolver } from './service/sentenciar-resolver';
import { SuspensosComponent } from './home/processos/suspensos/suspensos.component';
import { CadastroComponent } from './home/processos/cadastro/cadastro.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'sentenciar/:numero', component: SentenciarComponent, resolve: { numero: SentenciarResolver } },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] , children: [
    { path: 'upload', component: UploadComponent },
    { path: 'processos/cadastro', component: CadastroComponent },
    { path: 'processos/geral', component: GeralComponent },
    { path: 'processos/sentenciados', component: SentaciadosComponent },
    { path: 'processos/suspensos', component: SuspensosComponent },
    { path: 'processos/nao/sentenciados', component: NaoSentenciadosComponent },
    { path: 'produtividade', component: ProdutividadeComponent },
    { path: 'get-relatorio', resolve: { rel: RelatorioResolver }, component: HomeComponent },
    { path: '**', redirectTo: '/' }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
