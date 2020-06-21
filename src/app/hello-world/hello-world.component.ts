import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  my_input: string;
  is_disabled: boolean = true;

  on_input_funct() {
    if (this.my_input) {
      this.is_disabled = false;
    } else {
      this.is_disabled = true;
    }
  }
  on_click_reset() {
    this.my_input = "";
    this.is_disabled = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
