import { FornecedorService } from './services/fornecedor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorRoutingModule } from './fornecedor.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FornecedorAppComponent } from './fornecedor.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { FornecedorResolve } from './services/fornecedor.resolve';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    FornecedorAppComponent,
    DetalhesComponent,
    EditarComponent,
    ExcluirComponent,
    ListaComponent,
    NovoComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
    NgxSpinnerModule
    ],
  providers: [
    FornecedorService,
    FornecedorResolve
  ]
})
export class FornecedorModule { }
