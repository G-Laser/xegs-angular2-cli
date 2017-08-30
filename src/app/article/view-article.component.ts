import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../_models/article';
import { ArticleService } from '../_services/article.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-article-component',
  template: `<div *ngIf="pageArticles">
  <article *ngFor="let pageArticle of pageArticles">
    <img src="{{pageArticle.imagePath}}" class="pull-left article-image" title="{{pageArticle.title}}: {{pageArticle.subtitle}}" />
    <h2>{{pageArticle.title}}: {{pageArticle.subtitle}}</h2>
    <p>{{pageArticle.content}}</p>
  </article>
</div>`
})

export class ViewArticleComponent implements OnInit {
  pageArticles: Observable<Article[]>;

  constructor(private articleService: ArticleService) {
  }
  ngOnInit(): void {
    this.articleService.articles().subscribe(data => {
      this.pageArticles = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }
}
