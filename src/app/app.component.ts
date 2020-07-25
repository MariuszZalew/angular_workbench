import { Component } from '@angular/core';
// import * as faker from "ng-faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
})

export class AppComponent {
  title = "Angular Hello"
  allowButton = false;

  // mememe = faker.fake("{{name.prefix}}");
  // m2 = faker.name.fullName();


  ownComponentPerson: string[] = ["Jan","Krzysztof","Alicja"];
  
  logPerson(defaultEvent) {
    console.log("You have clicked ",defaultEvent);
  }
}
