// ---------------Angular---------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ---------------Bootstrap---------------
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// ---------------Components---------------
// ---------------Services---------------

// ---------------Sub-modules---------------
import { AppRoutingModule } from './app-routing.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
// ---------------Validation modules---------------

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
