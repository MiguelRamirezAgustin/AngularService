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
  empleadoOptener: any = [];
  idActializar:any;
  constructor(
    public restApi: RestApiService,
    //para leer rutas los valores
    public actRoute: ActivatedRoute,
    public router: Router) {

    this.actRoute.params
      .subscribe(
        parametros => {
          //parametros variable declarada para obtener el id
          console.log('los parametros son ' + parametros['id']);
          this.idActializar= parametros['id'];
          //OptenerUnEmpleado es la function para obtener un elemento y se le pasa el valor de id que viene el la url

          this.restApi.OptenerUnEmpleado(parametros['id'])
          //La consulta yrespuesta del se alamcena en un avarible empleadoOptener
            .subscribe( result=>{
              this.empleadoOptener=result;
              console.log('los parametros son 0012 ' + JSON.stringify(this.empleadoOptener));
            },err=>{
              //Es el error en caso teberlo
              console.log('erro...!!!',err);
            })
        }
      )

  }

  ngOnInit() {
  
  }

  actualizarEmpleado(){
    this.restApi.actualizarEmpleado(this.idActializar, this.empleadoOptener)
    .subscribe(result=>{
      alert('Se actualizo el empleado correctamente' );
      console.log('La acualizacion ' + JSON.stringify( result));
      this.router.navigate(['ListaCliente']);
    })

  }
 

}




