import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-vote-domain',
  templateUrl: './vote-domain.component.html',
  styleUrls: [],
})

export class VoteDomainComponent {
  allowButton: boolean;
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 13),
      new Article('React', 'https://reactjs.org/', 12),
      new Article('My GitHub', 'https://github.com/MariuszZalew', 9),
    ];
  }

  sortedArticles(): Article[] {
      return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
      console.log(`Add article title ${title.value} and link ${link.value}`);
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return false;
  }
}
