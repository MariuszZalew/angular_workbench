import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
})

export class AppComponent {
  title = "Angular Hello"
  allowButton = false;

  ownComponentPerson: string[] = ["Jan","Krzysztof","Alicja"];
  
  logPerson(defaultEvent) {
    console.log("You have clicked ",defaultEvent);
  }
}
