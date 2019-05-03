import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  empleadoData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.restApi.getEmpleado(this.id).subscribe((data: {}) => {
      this.empleadoData = data;
    });
  }

  actualizarEmpleado(){
    if(window.confirm('Actualizar')){
      this.restApi.actualizarEmpleado(this.id ,this.empleadoData).subscribe(data=>{
        this.router.navigate(['/ListaCliente']);
      });
    }
  }


}




