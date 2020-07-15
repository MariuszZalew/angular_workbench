import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: []
})
export class TestFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    console.log(e);
  }

}
