import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CrudComponent } from './crud/crud.component';
import { UsuariosActualizarComponent } from './usuarios-actualizar/usuarios-actualizar.component';

const routes: Routes = [
  {path: 'crearCliente', component:CrearClienteComponent},
  {path: 'ListaCliente', component:ListaClienteComponent},
  {path: 'ActualizarCliente', component:ActualizarClienteComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'crudFireBAse', component:CrudComponent},
  {path: 'Usuario', component:UsuariosActualizarComponent},
  {path: '**', component:CrearClienteComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
