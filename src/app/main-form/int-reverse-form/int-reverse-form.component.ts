import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-int-reverse-form',
  templateUrl: './int-reverse-form.component.html',
  styleUrls: [],
})
export class IntReverseFormComponent implements OnInit {
  solution: any;
  revIntForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.revIntForm = new FormGroup({
      'testGroup': new FormGroup({
      'revInt': new FormControl(null, [ Validators.required, Validators.pattern('^[0-9]*$') ])
      })
    });
  }

  onSubmit() {
    this.solution = this.reverseInt(this.revIntForm.get('testGroup.revInt').value);
  }

  reverseInt(num: number) {
    let newVal: string = Math.abs(num).toString().split('').reverse().join('');
    if (num < 0) return +newVal * -1;
    return +newVal;
  }
}
