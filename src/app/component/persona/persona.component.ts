import { Component, OnInit } from '@angular/core';
import { RegistryService } from 'app/services/registry.service';

@Component({
  selector: 'comp-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: any[] = [];
  key: string;
  constructor(private registryService: RegistryService) {


    this.registryService.getDataList()
      .subscribe(data => {
        this.persona = data;
        console.log(data);
      });

  }

  ngOnInit() {
  }

  borrarList(k) {

    this.registryService.deleteData(k)
    .subscribe(respuesta => {
      if (respuesta) {
        console.log(respuesta);
      }else {
        delete this.persona[k];
      }
    });
  }
}
