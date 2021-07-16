import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponent } from './conta.app.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const contaRouterConfig: Routes = [
  {
    path: '', component: ContaAppComponent,
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
]

@NgModule({
  imports: [
      RouterModule.forChild(contaRouterConfig)
  ],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
