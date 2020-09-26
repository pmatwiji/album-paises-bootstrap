import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaisesBanderaComponent } from './componentes/paises-bandera/paises-bandera.component';
import { RegionesComponent } from './componentes/regiones/regiones.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './componentes/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesBanderaComponent,
    RegionesComponent,
    PrincipalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
