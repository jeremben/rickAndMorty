import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  page : number;
  uri : string;

  constructor(private http : HttpClient) { }

  returnCharacters(uri) {
    this.uri = uri;
    return this.http.get(uri);
  }

  returnCharactersInit() {
    return this.http.get(this.uri);
  }

  returnPerson(uri) {
    return this.http.get(uri);
  }
}
