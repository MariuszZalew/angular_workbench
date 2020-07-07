import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Person } from "./exercise-two.model";

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss'],
})

export class ExerciseTwoComponent {
  private manual: string = 'Harry Potter';
  public value: number = 1;

  @Input('GoodName') personArray: Person[];
  @Output() passPerson: EventEmitter<Person>;
  @Output() passName: EventEmitter<string>;

  constructor() {
    this.passPerson = new EventEmitter();
  }

  public get myBook(): string {
    return this.manual;
  }

  passToCustomEvent(name: Person) {
    this.passPerson.emit(name);
  }

  goodBook() {
    return 'Game of Thrones';
  }

  addName() {
    console.log('name added');
    
  }

  incrementByOne() {
    this.value += 1;
  }

  decrementByOne() {
    this.value -= 1;
  }

}
