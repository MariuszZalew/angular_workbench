import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RevStringService {

  constructor() {}

  revI(str: string) {
    let resultString: string = '';
    for (let i = str.length; i >= 0; i--) {
      resultString += str.charAt(i);
    }
    return resultString;
  }

  revII(str: string) {
    const arr = str.split('').reverse().join('');
    return arr;
  }

  revIII(str: string) {
    let endGame: string = '';

    for (const letter of str) {
      endGame = letter + endGame;
    }
    return endGame;
  }

}
