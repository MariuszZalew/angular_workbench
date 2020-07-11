import { resolve } from "dns";
import { rejects } from 'assert';

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

let textForTest = "Miamoto Musashi was a legendary swordsman";
let regular = new RegExp('Miamoto');
let regular2 = /Musashi/;
let regular3 = /foo/;

console.log(regular.exec(textForTest), regular2, regular3.test(textForTest),textForTest.match(regular2),textForTest.search(regular2));

//finished at 2.3 7.00min
const jsonFile = '{ "command":"get",  "result":"ok",  "what":"loc" }';
console.log(JSON.parse(jsonFile));

const promise = new Promise(function (resolve, reject) {
  //here I do stuff.. async stuff
  if (/* everything works just fine */ false) {
    resolve('Stuff worked!');
  } else {
    reject( new Error("lol it doesn't work"));
  }
});

promise.then(
  function (result) {
    console.log(result); //stuff worked
  }).catch(
    function () {
      console.log("nope"); //nope not today bro
    }
  );

// function get(url) {
//   return new Promise(function(resolve, reject) {
//     $.get(url,function(data) {
//       resolve(data);
//     })
//     .fail(function() {
//       reject();
//     });
//   });
// }

function get2(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((data) => {
        //Handle success
        resolve(data);
      })
      .catch((error) => {
        //handle error
        reject(error);
      });
  });
};

function get3(url) {
  fetch(url)
    .then((data) => data.json())
    .catch((err) => err);
}

let myController = { users: null };

get2('users.all')
  .then((users) => {
    myController.users = users;
  })
  .catch(() => {
    delete myController.users;
  });


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 200);
});

const promise2 = new Promise( (resolve, rejects) => {
  if (2 < 1) {
  resolve('fuck this, I\'m good');
  } else {
    rejects('no fucking today bro..');
  }
});
console.log(promise2.catch());

const promise3 = new Promise( (resolve, rejects) => { 
  wynik: Number;
  setTimeout(() => 0/2, 300)
 });

console.log(promise3);
















