import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EiminarClienteComponent } from './eiminar-cliente/eiminar-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ServiciosComponent } from './servicios/servicios.component';


// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CrearClienteComponent,
    EiminarClienteComponent,
    ListaClienteComponent,
    ActualizarClienteComponent,
    ServiciosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
