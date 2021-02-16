import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista.component';
import { NumeroEmpleadoComponent } from './components/empleado-lista/numero-empleado/numero-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListaComponent,
    NumeroEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
