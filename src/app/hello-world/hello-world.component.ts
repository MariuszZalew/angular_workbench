import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
})
export class HelloWorldComponent {
  my_input: string;
  is_disabled: boolean = true;

  on_input_funct( e: any ) {
    if (this.my_input) {
      this.is_disabled = false;
      console.log(e)
    } else {
      this.is_disabled = true;
    }
  }
  on_click_reset() {
    this.my_input = "";
    this.is_disabled = true;
  }
  constructor() { }

}
