import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-jedi',
  templateUrl: './jedi.component.html',
  styleUrls: []
})
export class JediComponent {

  @Input() jedi: boolean;
  @Output() knight: EventEmitter<boolean> = new EventEmitter();

}
