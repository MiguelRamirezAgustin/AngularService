import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Usuario } from './Usuario';


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

  cargarPrimas(){
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


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'my-auth-token',
        'Authorization': "Basic QUNBTkFMOlBIWVU2RDU1WDI="
      })
    };
    let json = [{ "numeroPersona": "50001263", "tipoPersona": "1", "numeroEstructura": "00000" }];

    console.log('envio__1 ' + json );
    var datos=JSON.stringify(json);
    console.log('envio__01' + datos );

    return this.http.post('http://eigenserver.ddns.net:8082/iConfianzaDummy/REST/Api/wsResumenCliente/ObtenerPrimasGeneradas', datos, httpOptions);
   }

    getResultados(){
      return  this.http.get('https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json');
    }

    getApiWeb(){
      return this.http.get('https://randomuser.me/api/?results=2');
    }




    //Nuevos servicios CRUD
    GetUsuarios(){
      return this.http.get('http://14ffccf1.ngrok.io/api/users/listaUsuarios');

    }
    
    //Crear Usuario
    crearUsuario(usuario):Observable<any>{
      this.httpOptions ={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
      //Ejemplo de datos 
      //var  datos:any={name:'miguel',age:'12',email:'migurl@gmail.com', password:'12'};
        return this.http.post('http://14ffccf1.ngrok.io/api/users/agregarUsuarios', JSON.stringify(usuario), this.httpOptions)
    }

    EliminarUsuario(id):Observable<any>{
      this.httpOptions ={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
  
     return this.http.delete('http://14ffccf1.ngrok.io/api/users/eliminarUsuarios'  + id +this.httpOptions)
    }

    ActualizarUsuario(id, usuario):Observable<any>{
      return this.http.put('http://14ffccf1.ngrok.io/api/users/listaUsuarios', id + JSON.stringify(usuario)+ this.httpOptions)
    }

    
}



