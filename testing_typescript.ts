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

var osoba: Person = new Person('Mariusz', 'Zalewski', 66);
console.log(osoba, osoba.greet());

function greetText(name:string): string {
    return `Hello ${name}`;
}

console.log(greetText(fullName));