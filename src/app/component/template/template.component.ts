import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    id: 'CRI',
    name: 'Costa Rica',
  },
  {
    id: 'ESP',
    name: 'España',
  }
  ];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  ngOnInit() {
  }

  enviar(forma: NgForm) {
    console.log('enviado');
    console.log('formulario', forma);
  }

}
