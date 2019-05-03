import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


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


  cargarPrimas() {
    let json = [{ "numeroPersona": "50001263", "tipoPersona": "1", "numeroEstructura": "00000" }];
    console.log('envio ' + JSON.stringify(json));
    return this.http.post('http://eigenserver.ddns.net:8082/iConfianzaDummy/REST/Api/wsResumenCliente/ObtenerPrimasGeneradas', json, this.httpOptions);
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





