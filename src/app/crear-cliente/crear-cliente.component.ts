import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  limpiarphone: string;
  limpiarEmail: string;
  limpiarapellidos: string;
  limpiarNombre: string;
  @Input() empleadoDetalle = { nombre: '', apellidos: '', email:'', phone: 0 };

  constructor(public estaApi: RestApiService,
    public router: Router) { }
    show:boolean=false;

  ngOnInit() {
    this.estaApi.getEmpleados();
  }




  addEmpledado(empleado) {
    if(this.empleadoDetalle.nombre == '' || this.empleadoDetalle.apellidos=='' || this.empleadoDetalle.email==''){
        alert('Todos los campos son obtigatorios');
    }else{
      this.estaApi.crearEmpleado(this.empleadoDetalle)
      .subscribe((data: {}) => {
        alert('Se registro usuario: \n' + this.empleadoDetalle.nombre +' ' + this.empleadoDetalle.apellidos);
        setTimeout(() => { this.estaApi.getEmpleados(); }, 100);
        this.limpiarNombre = '';
        this.limpiarapellidos='';
        this.limpiarEmail='';
        this.limpiarphone='';
      })
    }
  
  }

}
