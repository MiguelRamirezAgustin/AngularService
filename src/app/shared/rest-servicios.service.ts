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
      return  this.http.get('https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json')
    }
}


// enviarNotificacionMensaje(content, conversationId, sender){
//   this.httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'token': this._storage.get('sesion') ? this._storage.get('sesion').IdToken : ''
//     })
//   }
//   let body = JSON.stringify({ content: content, conversationId: conversationId, sender: sender });
//   console.info('THE NOTIFICATION --> ', JSON.parse(body));
//   //return this._http.post("https://elirrv2l92.execute-api.us-east-2.amazonaws.com/EnviarNotificaciones",body,httpOptions);
//   if (this._dataService.entorno == 'desarrollo') {
//     return this._http.post("https://elirrv2l92.execute-api.us-east-2.amazonaws.com/EnviarNotificaciones", body, this.httpOptions);
//   } else if (this._dataService.entorno == 'pruebas') {
//     return this._http.post('https://pd6h78gqrb.execute-api.us-east-2.amazonaws.com/EnviarNotificaciones', body, this.httpOptions);
//   } else if (this._dataService.entorno == 'preproduccion') {
//     return this._http.post('https://pwt1vcggv1.execute-api.us-east-2.amazonaws.com/EnviarNotificaciones', body, this.httpOptions);
//   } else {//Produccion
//     return this._http.post('https://hf7vvu0id1.execute-api.us-east-2.amazonaws.com/EnviarNotificaciones', body, this.httpOptions);
//   }
// }
// this._servicios.enviarNotificacionMensaje(this.username + ': ' + message.content, message.conversationId, message.sender).subscribe();





