import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuarios-actualizar',
  templateUrl: './usuarios-actualizar.component.html',
  styleUrls: ['./usuarios-actualizar.component.css']
})
export class UsuariosActualizarComponent implements OnInit {

  @Input() usuario;
  constructor() { }

  ngOnInit() {
    
  }

}
