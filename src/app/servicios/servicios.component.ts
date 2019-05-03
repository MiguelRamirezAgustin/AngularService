import { Component, OnInit, Input } from '@angular/core';
import { RestServiciosService } from '../shared/rest-servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(public restServicio: RestServiciosService) { }
  

  ngOnInit() {
  }

  consultar() {
    this.restServicio.cargarPrimas().subscribe(
      respuesta => {
        console.log('respuesta es___ ' + respuesta);
      });
  }
}


// this._servicios.enviarNotificacionMensaje(this.username + ': ' + message.content, message.conversationId, message.sender).subscribe();







// servicioSda(){
//   //alert(this.image2);
//   if(this.image == undefined){
//     alert("No se encuentra ninguna imagen.")
//   }else{
//     console.log("Imagen prueba:" + " " + this.image2);
//     this.comunicacion.cambiarEstadoLoader(false);
//     this.servicios.sdaImagen(this.image2)
//   .then(respuesta => {
//       //console.log("respuestaLogin", respuestaLogin);
//       this.comunicacion.cambiarEstadoLoader(true);
//       alert(JSON.stringify(respuesta));

//     })

//   }

// }

// sdaImagen(cadena){
//   let params = { source: cadena };
//   let headers100 = { 'Accept': 'application/json;charset=UTF-8' };
//   this.http.setDataSerializer('json');
//   return this.http.post('https://7chgh1ve59.execute-api.us-east-2.amazonaws.com/sda-test', params, headers100)
//                   .then((data) => {
//                       console.log(data);
//                   })
//                   .catch((error) => {
//                       console.log(error);
//                   });
//   }