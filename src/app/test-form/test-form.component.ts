import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: []
})
export class TestFormComponent implements OnInit {

  @ViewChild('bar') singUp: NgForm; 

  testString: string = 'Please, input any string';
  hasBeenEvaluated: boolean = false;
  reverseResultView: string;

  constructor() {
    if(this.testString !== '') {
      this.testString = '';
    }
  }

  ngOnInit(): void {
  }

  onSubmitOne(form: NgForm) {
    console.log(form, form.value);
  }

  onSubmitTwo() {
    console.log(this.singUp.value);
  }

  onSubmitReverseStr(f: NgForm) {
    console.log(f.value['revStr']);
    console.log(this.reverseOne(f.value['revStr']));
    this.reverseResultView = this.reverseOne(f.value['revStr']);
    this.hasBeenEvaluated = true;
    this.testString = '';
  }

  reverseOne(str: string) {
    let resultString: string = '';
    for(let i = str.length; i >= 0 ; i--) {
        resultString += str.charAt(i);
    }
    return resultString;
}

}
