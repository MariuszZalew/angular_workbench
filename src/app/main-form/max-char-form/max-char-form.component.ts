import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-max-char-form',
  templateUrl: './max-char-form.component.html',
  styleUrls: [],
})
export class MaxCharFormComponent implements OnInit {

  testString: string = '';
  evaluated: boolean = false;
  solution: string = 'not yet';

  constructor() {}

  ngOnInit(): void {}


  onSubmit(f: NgForm) {
    const evaluatedString: string = f.value.maxChar;
    const methodUsed: string = f.value.method;

    switch (methodUsed) {
      case 'first':
        this.solution = this.maxCharOne(evaluatedString);
        break;
      case 'second':
        this.solution = this.maxCharTwo(evaluatedString);
        break;
      default:
        console.log('This shoud never log..')
        break;
    }

    this.evaluated = true;
  }

  maxCharOne(str: string) {
    let myString: string[] = str.split('');

    let temp1 = { value: '', count: 0 };
    let temp2 = { value: '', count: 0 };

    while (myString.length !== 0) {
      temp2.value = myString.pop();
      temp2.count += 1;

      for (let letter of myString) {
        if (temp2.value === letter) {
          temp2.count++;
        }
      }
      if (temp1.count < temp2.count) {
        temp1.value = temp2.value;
        temp1.count = temp2.count;
      }
      temp2.value = '';
      temp2.count = 0;
    }
    return `"${temp1.value}" have occured ${temp1.count} times`;
  }

  maxCharTwo(str: string): string {
    const charMap = {};

    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    console.log(charMap);

    let maxChar: string = '';
    let max: number = 0;

    for (const key in charMap) {
      if (charMap[key] > max) {
        maxChar = key;
        max = charMap[key];
      }
      charMap[key] > max ? 1 : 0;
    }

    return `"${maxChar}" have occured ${max} times`;
  }

}
