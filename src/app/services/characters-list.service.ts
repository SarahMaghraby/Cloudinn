import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CharactersListService {

  constructor(public http: Http) { }

  getList(){
    return this.http.get('https://swapi.co/api/people/?format=json').map(res => res);
  }

}
