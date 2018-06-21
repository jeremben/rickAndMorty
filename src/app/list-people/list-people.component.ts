import { Component, OnInit } from '@angular/core';
import {MonServiceService} from '../mon-service/mon-service.service';
import {Person} from '../objects/person';
import {Info} from '../objects/info';
import {ShowPersonComponent} from '../show-person/show-person.component';
import {ServiceAdminService} from '../admin/service-admin.service';
import {MatListModule} from '@angular/material/list';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  people : Person[];
  info : Info;
  page = 1;
  uri = 'https://rickandmortyapi.com/api/character';

  constructor(private router : Router, private monService : MonServiceService, private serviceAdmin : ServiceAdminService, public dialog: MatDialog) { }

  ngOnInit() {
    if (this.monService.uri) {
      this.monService.returnCharactersInit().subscribe(
        (data : {info, results}) => this.extractData(data.info, data.results),
        (error) => console.error(error)
      );
      this.page = this.monService.page;
    } else {
      this.monServiceObservable();
    }
  }

  monServiceObservable() {
    this.monService.returnCharacters(this.uri).subscribe(
      (data : {info, results}) => this.extractData(data.info, data.results),
      (error) => console.error(error)
    );
  }

  extractData(info, results) {
    this.info = <Info>info;
    this.people = results.map((person) => new Person(person.id, person.name, person.status, person.species, person.type, person.gender, person.url, person.image));

    this.monService.page = this.page;

    console.log(this.people);
  }

  clickNext() {
    this.uri = this.info.next;
    this.monServiceObservable();
    this.page++;
  }

  clickPrev() {
    this.uri = this.info.prev;
    this.monServiceObservable();
    this.page--;
  }

  activeDroits() {
    this.serviceAdmin.logged = true;
    this.router.navigateByUrl("admin");
  }

  openDialog(id) {
    let a = new MatDialogConfig();
    a.data = id;
    this.dialog.open(ShowPersonComponent, a);
  }
}
