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

    result3:any=[];
    result4:any=[];


  ngOnInit() {
  }
 
  
   arrayData=[{
    "results": [{
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "lya",
        "last": "clement"
      },
      "location": {
        "street": "7030 rue bossuet",
        "city": "tours",
        "state": "yvelines",
        "postcode": 47347,
        "coordinates": {
          "latitude": "1.2445",
          "longitude": "37.0705"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "lya.clement@example.com",
      "login": {
        "uuid": "a21fb6ef-6af5-4d5f-a820-cc475fb131f5",
        "username": "angrypeacock812",
        "password": "bobafett",
        "salt": "P9w2u9AG",
        "md5": "27a6a64f2c05c9a6eaab502932d72430",
        "sha1": "5fab5d16dc7e5a69dd63ae3cacbfc65765fdd27a",
        "sha256": "6a8844f3dc571630640b37a49ea6fb479fe471131c8c53b515cec42c91ee911a"
      },
      "dob": {
        "date": "1958-08-27T00:01:11Z",
        "age": 60
      },
      "registered": {
        "date": "2009-12-09T22:55:04Z",
        "age": 9
      },
      "phone": "05-60-11-93-60",
      "cell": "06-68-17-33-32",
      "id": {
        "name": "INSEE",
        "value": "2NNaN80043984 95"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
      },
      "nat": "FR"
    }],
    "info": {
      "seed": "b873b2df512e29ff",
      "results": 1,
      "page": 1,
      "version": "1.2"
    }
  }]

  consultar() {
    this.restServicio.cargarPrimas()
    .subscribe( respuesta => {
      var result= respuesta;
        console.log('respuesta es___ ' + result);
      });
  }


  consultarGet() {
    this.restServicio.getResultados()
    .subscribe(res => {
      this.result2 = Object.keys(res).map(i => res[i])
      for(var c = 0; c < this.result2.length; c++){
        this.result1 = this.result2[c];
      }
      console.log('respuesta__!!! ', JSON.stringify( this.result1));
    });
  }


  consultarUsuarios(){
    this.restServicio.getApiWeb()
    .subscribe(res=>{
      console.log('respuesta de web ' , JSON.stringify(res));
      var respuesta001= JSON.stringify(res);
    });  
  }



}


