import { Component, OnInit, Injectable, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { RestServiciosService } from '../shared/rest-servicios.service';
import { Key } from 'protractor';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @Input() usuarioDetalle={name: '' ,age: '', email: '' ,password:''};
  respuesta1:any=[];
  respuesta2:any=[];
  //name:string;
  id:string;

  constructor(public restService:RestServiciosService) { }

  ngOnInit() {
    //Evento para mostara usuarios al cargar pagina
    //this.mostrarUsuario();
  }

  mostrarUsuario(){
    this.restService.GetUsuarios()
    .subscribe(respuesta =>{
        this.respuesta1= Object.keys(respuesta).map(i => respuesta[i])
        for(var c=0; c<this.respuesta1.length; c++){
            this.respuesta2=this.respuesta1[c];
        }
      }
    )
  }  
  

  agregarUsuarios(){
    if(this.usuarioDetalle.name=='' || this.usuarioDetalle.age == ' '){
          alert('Todos los campos \nson obrigatorios');
    }
    //console.log('envio__!!! ' + JSON.stringify(this.datos));
    //var envioDatos= JSON.stringify(this.datos);
     this.restService.crearUsuario(this.usuarioDetalle)
     .subscribe(rest =>{
       var result= JSON.stringify(rest);
       console.log('La respuesta es '+  result);
       alert('Registro exitoso');
     },err=>{
      console.log('erro...!!!',err);
    })
  }



  //Eliminar Usuario
  EliminarUsuario(id){
    console.log('Eliminacion___!!! ' +  JSON.stringify(id));
    this.restService.EliminarUsuario(id)
    .subscribe( rest =>{
     var resultado = JSON.stringify(rest);
     console.log('La respues es ' + resultado);
    },err=>{
      console.log('Error es_ ' +JSON.stringify( err));
    })
  }

  editar(id){
    alert('Editar el usuario\n '+ id)
  }


}
