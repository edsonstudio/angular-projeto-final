// ---------------Angular---------------
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ---------------Services---------------
import { ContaRoutingModule } from './conta.route';
import { ContaService } from './services/conta.service';

// ---------------Components---------------
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';

// ---------------Sub-modules---------------

// ---------------Validation modules---------------
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    ContaAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
