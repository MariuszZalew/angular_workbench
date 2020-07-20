import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-string-reverse-form',
  templateUrl: './string-reverse-form.component.html',
  styleUrls: []
})

export class StringReverseFormComponent implements OnInit {

  testString: string = 'some text for testing';
  hasBeenEvaluated: boolean = false;
  reverseResultView: string;

  constructor() { 
    if(this.testString !== '') {
      this.testString = '';
    }
  }

  ngOnInit(): void {
  }

  onSubmitReverseStr(f: NgForm) {
    console.log(f.value['revStr'], f.value);
    console.log(this.reverseOne(f.value['revStr']));
  
    const tempChoice: string = f.value.met;

    if (tempChoice === 'one') {
      this.reverseResultView = this.reverseOne(f.value['revStr']);
    } else if (tempChoice === 'two') {
      this.reverseResultView = this.reverseTwo(f.value['revStr']);
    } else {
      this.reverseResultView = this.reverseThree(f.value['revStr']);
    }

    this.hasBeenEvaluated = true;
    this.testString = '';

  }

  reverseOne(str: string) {
    let resultString: string = '';
    for (let i = str.length; i >= 0; i--) {
      resultString += str.charAt(i);
    }
    return resultString;

  }
  reverseTwo(str: string) {
    const arr = str.split('').reverse().join('');
    return arr;
  }

  reverseThree(str: string) {
    let endGame: string = '';

    for (const letter of str) {
      endGame = letter + endGame;
    }
    return endGame;
  }
}
