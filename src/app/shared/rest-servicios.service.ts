import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { toBase64String } from '@angular/compiler/src/output/source_map';


@Injectable({
  providedIn: 'root'
})
export class RestServiciosService {

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': "Basic QUNBTkFMOlBIWVU2RDU1WDI="

    })
  }

  constructor(private http: HttpClient) { }

  cargarPrimas():Observable<any> {
    var user= "ACANAL:HI90RL06HD";
    var base= btoa(user);
    console.log('base' ,base )

    this.httpOptions ={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': "Basic "+base
      })
    }
    let json = [{ "numeroPersona": "50001263", "tipoPersona": "1", "numeroEstructura": "00000" }];

    console.log('envio ' + json );
    var datos=JSON.stringify(json);
    console.log('envio 01' + datos );
    return this.http.post('http://eigenserver.ddns.net:8082/iConfianzaDummy/REST/Api/wsResumenCliente/ObtenerPrimasGeneradas', datos, this.httpOptions);
   }

    getResultados(){
      return  this.http.get('https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json');
    }

    getApiWeb(){
      return this.http.get('https://randomuser.me/api/?results=1');
    }
}



