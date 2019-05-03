import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EiminarClienteComponent } from './eiminar-cliente/eiminar-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: 'crearCliente', component:CrearClienteComponent},
  {path: 'EliminarCliente', component:EiminarClienteComponent},
  {path: 'ListaCliente', component:ListaClienteComponent},
  {path: 'ActualizarCliente', component:ActualizarClienteComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: '**', component:CrearClienteComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
