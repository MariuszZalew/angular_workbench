import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: []
})
export class StarWarsComponent implements OnInit {

  base_url: string = 'http://localhost:3000/profile';
  characters: any; 

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.getChars().subscribe( chars => this.characters = chars );
  }

  
   getChars() {
     return this.http.get(this.base_url);
   } 
}
