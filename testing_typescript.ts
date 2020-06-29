var fullName: string = "Mariusz Zalewski";

var jobs: Array<string> = ['IBM', 'Microsoft','Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];

var something: any;
something = 'mememe';
something = 1;
something = ['one', 2, false];
console.log(something);

class Person {
    firstName: string;
    lastName: string;
    ageOfPerson: number;

    constructor(first_name: string, last_name: string, age: number) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.ageOfPerson = age;
    }
    
    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    
}

class Animal {
  name: string;
  
  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  length: number;
  poisonous: boolean;

  constructor(name: string, length: number, poisonous: boolean) {
    super(name);
    this.length = length;
    this.poisonous = poisonous;
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 55) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}


let sam = new Snake('Sammy the Python', 10, false);
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);

var osoba: Person = new Person('Mariusz', 'Zalewski', 66);
console.log(osoba, osoba.greet());

function greetText(name:string): string {
    return `Hello ${name}`;
}

console.log(greetText(fullName));
