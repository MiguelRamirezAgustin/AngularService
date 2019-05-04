import { Component, OnInit, Input } from '@angular/core';
import { RestServiciosService } from '../shared/rest-servicios.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(public restServicio: RestServiciosService,
    private http: HttpClient) { }
    result1:any=[];
    result2:any=[];

    dataArray=[{
      "resultado":{            
        "id":"25",
        "id_padre":"5",
        "id_tipo_contenido":"0",
        "titulo":"Sex & Trends",
        "imagen":"",
        "fecha_alta":"2013-03-06 19:49:49",
        "status":"2"
     }
    }]

  ngOnInit() {
  }
 
  

  consultar() {
    this.restServicio.cargarPrimas()
    .subscribe( respuesta => {
      var result= respuesta;
        console.log('respuesta es___ ' + respuesta);
      });
  }


  consultarGet() {
    this.restServicio.getResultados()
    .subscribe(res => {

      this.result2 = Object.keys(res).map(i => res[i])
      for(var c = 0; c < this.result2.length; c++){
        this.result1 = this.result2[c];
      }
    });
  }


  consultarUsuarios(){
    this.restServicio.getApiWeb()
    .subscribe(res=>{
      
    })
    
  }

}


