import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../../_models/article';
import { ArticleService } from '../../_services/article.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-article-component',
  template: `<div *ngIf="pageArticles">
  <article *ngFor="let pageArticle of pageArticles">
    <img src="{{pageArticle.imagePath}}" class="pull-left article-image" title="{{pageArticle.title}}: {{pageArticle.subtitle}}" />
    <h2>{{pageArticle.title}}: {{pageArticle.subtitle}}</h2>
    <p>{{pageArticle.description}}</p>
    <div *ngIf="pageArticle.audioPath.length > 0">
      <audio controls>
        <source src="{{pageArticle.audioPath}}" type="audio/mpeg" preload="none"/>
        I'm sorry but your browser doesn't support audio elements.
      </audio>
      <div class="show-notes">
      <button type="button" class="btn btn-primary glyphicon glyphicon-list-alt" data-toggle="collapse" [attr.data-target]="'#' + pageArticle.Id">
        <span style="font-family: 'Khula', sans-serif">
          Show Notes
        </span>
        </button>
        <div id="{{pageArticle.Id}}" class="collapse show_notes">
        {{pageArticle.notes}}
        </div>
      </div>
    </div>
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
