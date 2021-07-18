// ---------------Angular---------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ---------------Bootstrap---------------
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// ---------------Validation modules---------------
// ---------------Components---------------
// ---------------Services---------------
// ---------------NGX---------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// ---------------Sub-modules---------------
import { AppRoutingModule } from './app-routing.module';
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      progressAnimation: 'decreasing',
      progressBar: true,
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
