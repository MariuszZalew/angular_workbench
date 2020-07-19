import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: []
})
export class GroupFormComponent implements OnInit {

  @ViewChild('bar') singUp: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.singUp.value);
  }
}

