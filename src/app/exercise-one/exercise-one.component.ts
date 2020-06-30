import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
})
export class ExerciseOneComponent implements OnInit {

  display: boolean = true;
  am_i_disabled: boolean = false;
  title_atribute: string = "I'm just a tooltip message";
  some_random_text: string = "some random text for testing";

   click_function() {
    this.am_i_disabled = true;
    console.log("google have been clicked");
    setTimeout(() => {
     this.am_i_disabled = false; 
    }, 500);
  }

  constructor() {
    this.display = Math.random() > .4 ? true : false;
    console.log("this is loged in constructor", this.display);
  }

  ngOnInit(): void {
  }

}
