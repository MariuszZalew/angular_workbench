import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-hello';
  allowButton = false;

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.allowButton = !this.allowButton;

    setTimeout(() => {
      this.allowButton = !this.allowButton;
    }, 800);
    return false;
  }
}
