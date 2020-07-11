import { Component, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})

export class ArticleComponent {
  @Input('foo') article: Article;
  
  voteUp(): void {
    this.article.voteUp();
  }

  voteDown(): void {
    this.article.voteDown();
  }
}
