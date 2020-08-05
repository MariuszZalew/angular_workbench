import { Component, OnInit } from '@angular/core'; import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: []
})
export class StarWarsComponent implements OnInit {

  base_url: string = 'http://localhost:3000/profile';
  characters: any; 
  arr = [1,2,3,4,5];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.getChars().subscribe( chars => this.characters = chars );
  }

   getChars() {
     return this.http.get(this.base_url);
   } 

   getValueFromChild(e: any) {
     console.log("Parrent have recived value of ", e);
   }

   delMe(e: any) {
     console.log(e.target,e.target.innerText === this.characters[0].name);
     this.characters = this.characters.filter( char => char.name !== e.target.innerText);
   }
}