import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

  am_i_disabled: boolean = false;
  title_atribute: string = "I'm just a tooltip message";
  some_random_text: string = "Some random text for testing";

   click_function() {
    this.am_i_disabled = true;
    console.log("Google have been clicked");
    setTimeout(() => {
     this.am_i_disabled = false; 
    }, 500);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
