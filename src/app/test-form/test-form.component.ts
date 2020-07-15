import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: []
})
export class TestFormComponent implements OnInit {

  @ViewChild('bar') singUp: NgForm; 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitOne(form: NgForm) {
    console.log(form, form.value);
  }

  onSubmitTwo() {
    console.log(this.singUp.value);
  }

}
