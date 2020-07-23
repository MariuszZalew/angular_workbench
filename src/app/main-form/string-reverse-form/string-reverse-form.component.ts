import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RevStringService } from '../rev-string.service';

@Component({
  selector: 'app-string-reverse-form',
  templateUrl: './string-reverse-form.component.html',
  styleUrls: []
})

export class StringReverseFormComponent implements OnInit {

  testString: string = 'some text for testing';
  hasBeenEvaluated: boolean = false;
  reverseResultView: string;

  constructor(private revString: RevStringService) { 
    if(this.testString !== '') {
      this.testString = '';
    }
  }

  ngOnInit(): void {
  }

  onSubmitReverseStr(f: NgForm) {
  
    const tempChoice: string = f.value.met;

    if (tempChoice === 'one') {
      this.reverseResultView = this.revString.revI(f.value['revStr']);
    } else if (tempChoice === 'two') {
      this.reverseResultView = this.revString.revII(f.value['revStr']);
    } else {
      this.reverseResultView = this.revString.revIII(f.value['revStr']);
    }

    this.hasBeenEvaluated = true;
    this.testString = '';

  }

}
