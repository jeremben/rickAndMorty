import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../objects/person';
import {MonServiceService} from '../mon-service/mon-service.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  person : Person;

  constructor(private monService : MonServiceService,
    private activatedRoute : ActivatedRoute,
    public dialogRef: MatDialogRef<ShowPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    let id = this.data;
    let uri = `https://rickandmortyapi.com/api/character/${id}`;
    this.monServiceObservable(uri);
  }

  monServiceObservable(uri) {
    this.monService.returnPerson(uri).subscribe(
      (data) => this.extractData(data),
      (error) => console.error(error)
    );
  }

  extractData(data) {
    this.person = new Person(data.id, data.name, data.status, data.species, data.type, data.gender, data.url, data.image);
  }

}
