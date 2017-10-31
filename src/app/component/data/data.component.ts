import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  usuario = {
    'nombreCompleto': {
      'nombre': 'Gokuu',
      'apellido': 'house'
    },
    'correo': 'goku@4545.com',
    'pasatiempos': []
  };

  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'apellido': new FormControl('')
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos' : new FormArray([
        new FormControl('Comer', Validators.required)
      ])
    });

    // Pinta los valores del obj Usuario
    // this.forma.setValue(this.usuario);
   }

  ngOnInit() {
  }

  get formDataPasatiempos() { return <FormArray>this.forma.get('pasatiempos'); }

  enviar(): any {
    console.log(this.forma);
    console.log(this.forma.value);
    // this.forma.reset();
    // this.forma.controls['correo'].setValue('fgffgf@gmail.com');
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
    console.log(this.forma.controls['pasatiempos']);
  }
}
