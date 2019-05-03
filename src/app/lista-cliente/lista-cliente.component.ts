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
    this.cargarEmpledo();
  }

  cargarEmpledo() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.Empleado = data;
    })
  }

 
  eliminarEmpledado(id) {
    if (window.confirm('Eliminar usuario?')){
      this.restApi.eliminarEmpleado(id).subscribe(data => {
        this.cargarEmpledo()
      })
    }
  }  

}
