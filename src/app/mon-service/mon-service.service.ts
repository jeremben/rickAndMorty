import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppLoaderService} from '../app-loader.service';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  page : number;
  uri : string;

  constructor(private appLoaderService : AppLoaderService) { }

  returnCharacters(uri) {
    this.uri = uri;
    return this.appLoaderService.get(uri);
  }

  returnCharactersInit() {
    return this.appLoaderService.get(this.uri);
  }

  returnPerson(uri) {
    return this.appLoaderService.get(uri);
  }

  returnChuckJoke(uri) {
    return this.appLoaderService.get(uri);
  }
}
