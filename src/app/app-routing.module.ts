import { AcessoNegadoComponent } from './navegacao/acesso-negado/acesso-negado.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module')
      .then(m => m.ContaModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./fornecedor/fornecedor.module')
      .then(m => m.FornecedorModule), data: {animation: 'fornecedores'}
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module')
      .then(m => m.ProdutoModule), data: {animation: 'produtos'}
  },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
