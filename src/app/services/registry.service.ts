import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IPersona } from 'app/interfaces/persona.interface';
import 'rxjs/Rx';

@Injectable()
export class RegistryService {
  url = 'https://persona-9d0f5.firebaseio.com/persona.json';
  urlPut = 'https://persona-9d0f5.firebaseio.com/persona/';
  constructor(private http: Http) { }

  sendData(persona: IPersona) {
    const body = JSON.stringify(persona);
    const headers = new Headers({
      'Constant-Type': 'application/json'
    });
    return this.http.post(this.url, body, {headers})
    .map(res => {
      return res.json();
    });
  }

  updateData(persona: IPersona, key: string) {
    const body = JSON.stringify(persona);
    const headers = new Headers({
      'Constant-Type': 'application/json'
    });
    const url = `${this.urlPut}/${key}.json`;
    return this.http.put(url, body, {headers})
    .map(res => {
      return res.json();
    });
  }

  getData(key: string) {
    const url = `${this.urlPut}/${key}.json`;
    return this.http.get(url)
    .map(res => {
      return res.json();
    });
  }

  getDataList() {
    return this.http.get(this.url)
    .map(res => {
      return res.json();
    });
  }

  deleteData(key: string) {
    const url = `${this.urlPut}/${key}.json`;
    return this.http.delete(url)
    .map(res => {
      return res.json();
    });
  }

}
