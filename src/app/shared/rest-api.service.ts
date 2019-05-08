import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empleado } from './empleado';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL =  'http://localhost:3000';

  

  constructor(private http: HttpClient) { }

  //cabeceras
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getEmpleados(): Observable<Empleado> {
    return this.http.get<Empleado>(this.apiURL + '/empleados')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  OptenerUnEmpleado(id): Observable<Empleado> {
    return this.http.get<Empleado>(this.apiURL + '/empleados/' + [id])
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  crearEmpleado(empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiURL + '/empleados', JSON.stringify(empleado), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  actualizarEmpleado(id, empleado): Observable<Empleado> {
    return this.http.put<Empleado>(this.apiURL + '/empleados/' + id, JSON.stringify(empleado), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  eliminarEmpleado(id) {
    return this.http.delete<Empleado>(this.apiURL + '/empleados/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error : ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }



}


  






//El servicio es 
//noombre del archivo es db.json
//comando para levantar el servicio local
//json-server db.json   se ejecuta dentro de la carpeta 

// {
//   "empleados": [
//     {
//       "nombre": "Maria",
//       "apellidos": "Lopez Lopez",
//       "email": "maria@gmail.com",
//       "phone": 0,
//       "telefono": "55234541432",
//       "id": 18
//     },
//     {
//       "nombre": "Miguel",
//       "apellidos": "Ramirez Agustin",
//       "email": "miguel@outlook.com",
//       "phone": 0,
//       "telefono": "2381212312",
//       "id": 19
//     },
//     {
//       "nombre": "Pedro",
//       "apellidos": "Luna Martinez",
//       "email": "martine@hotmail.com",
//       "phone": 0,
//       "telefono": "7762535373",
//       "id": 20
//     },
//     {
//       "nombre": "Victora",
//       "apellidos": "Agustin Martinez",
//       "email": "Victoria@gmail.com",
//       "phone": 0,
//       "telefono": "5576264873",
//       "id": 22
//     }
//   ]
// }