import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CrudComponent } from './crud/crud.component';
import { UsuariosActualizarComponent } from './usuarios-actualizar/usuarios-actualizar.component';


// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    ListaClienteComponent,
    ActualizarClienteComponent,
    ServiciosComponent,
    CrudComponent,
    UsuariosActualizarComponent
    
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
