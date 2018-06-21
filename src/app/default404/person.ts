export class Person { 

  id : number;
  name : string;
  status : string;
  species : string;
  type : string;
  gender : string;
  url : string;

  constructor(id, name, status, species, type, gender, url) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.url = url;
  }

}
