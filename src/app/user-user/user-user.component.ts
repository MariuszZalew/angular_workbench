import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-user',
  templateUrl: './user-user.component.html',
  styleUrls: ['./user-user.component.css']
})
export class UserUserComponent implements OnInit {
  @Input() name:   String; 
  constructor() {
    this.name = "Marco Aurelio"
   }

  ngOnInit(): void {
  }

}
