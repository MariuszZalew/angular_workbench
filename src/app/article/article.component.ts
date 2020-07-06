import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})

export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input('foo') article: Article;
  
  voteUp(): void {
    this.article.voteUp();
  }

  voteDown(): void {
    this.article.voteDown();
  }
}
