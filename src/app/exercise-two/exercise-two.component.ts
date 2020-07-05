import { Component } from '@angular/core';
import { Person } from "./exercise-two.model";

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss'],
})

export class ExerciseTwoComponent {
  private manual: string = 'Harry Potter';
  public value: number = 1;
  public people: Person[] = [
      new Person("me","ju",99)
  ];

  public get myBook(): string {
    return this.manual;
  }

  goodBook() {
    return 'Game of Thrones';
  }

  incrementByOne() {
    this.value += 1;
  }

  decrementByOne() {
    this.value -= 1;
  }

}
