import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  Empleado: any = [];

  constructor(public restApi:RestApiService) { }

  ngOnInit() {
    this.cargarEmpleado();
  }

  cargarEmpleado() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.Empleado = data;
    })
  }

 
  eliminarEmpledado(id,nombre,apellidos) {
    if (window.confirm('Desea eliminar el usuario?\n  ' + nombre +' '+ apellidos)){
      this.restApi.eliminarEmpleado(id).subscribe(data => {
        this.cargarEmpleado()
      })
    }
  }  
  

}
