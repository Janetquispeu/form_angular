import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPersona } from 'app/interfaces/persona.interface';
import { RegistryService } from 'app/services/registry.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comp-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  persona: IPersona = {
    nombre: '',
    direccion: '',
    biografia: ''
  };
  nuevo: boolean;
  key: string;
  constructor(private registryService: RegistryService,
              private router: Router,
              private activateRoute: ActivatedRoute,
            ) {
    // Coge el parametro de la ruta en este caso id
    this.activateRoute.params.subscribe(parametros => {
      this.key = parametros['id'];
    });
    this.nuevo = false;
    if (this.key !== 'nuevo') {
      console.log(this.key);
      this.registryService.getData(this.key)
      .subscribe(data => {
         this.persona = data;
      });
    }
  }

  ngOnInit() {
  }

  guardar(event) {
    if (this.key === 'nuevo' ) {
      this.registryService.sendData(this.persona)
      .subscribe(
        data => {
          this.router.navigate(['/registry', data.name]);
      },
      error => console.error( error));
    }else {
      this.registryService.updateData(this.persona, this.key)
      .subscribe(
        data => {
          console.log(data);
      },
      error => console.error( error));
    }
  }

}
