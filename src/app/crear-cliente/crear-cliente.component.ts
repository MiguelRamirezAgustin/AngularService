import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  @Input() empleadoDetalle = { nombre: '', apellidos: '', email:'', phone: 0 };

  constructor(public estaApi: RestApiService,
    public router: Router) { }

  ngOnInit() {
  }


  addEmpledado(empleado) {
    this.estaApi.crearEmpleado(this.empleadoDetalle)
    .subscribe((data: {}) => {
      this.router.navigate(['/ListaCliente'])
    })
  }

}
