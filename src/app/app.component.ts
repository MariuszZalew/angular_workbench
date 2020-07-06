import { Component } from '@angular/core';

/**
 * the top-level component for our application
 */


import { Article } from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
})

export class AppComponent {
  title = "Angular Hello"
  allowButton = false;
  articles: Article[];

  ownComponentPerson: string[] = ["Jan","Krzysztof","Alicja"];
  
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b:Article) => b.votes - a.votes);
  }

  constructor() {
    this.articles = [
      new Article('Angular','http://angular.io',13),
      new Article('React','http://angular.io',10),
      new Article('My GitHub','https://github.com/MariuszZalew',9)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title ${title.value} and link ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  
}
