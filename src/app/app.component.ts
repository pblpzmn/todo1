import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  person: Person = {
    name: 'Pablo Pazmiño',
    age : 33,
  };
  /*constructor(name, age) {
    this.person.name = name;
    this.person.age = age;
  }*/
  name: 'Pablo';
}
