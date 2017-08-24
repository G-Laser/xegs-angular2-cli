import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import {Article} from './article.model';
import * as _ from 'lodash';

@Component({
  selector: 'view-article-component',
  template: `<div *ngIf="pageArticles$">
  <article *ngFor="let pageArticle of pageArticles">
    <img src="{{pageArticle.imagePath}}" class="pull-left article-image" title="{{pageArticle.title}}: {{pageArticle.subtitle}}" />
    <h2>{{pageArticle.title}}: {{pageArticle.subtitle}}</h2>
    <p>{{pageArticle.content}}</p>
  </article>
</div>`
})

export class ViewArticleComponent implements OnInit {
  pageArticles$: Observable<Article[]>;

  

  constructor(private http: HttpClient) {

  }
  
  ngOnInit() {
    let url: string = 'assets/data/article.json';
    this.http
      .get<Article>(url, {observe: 'response'}).subscribe(resp => {
      // And access the body directly, which is typed as MyJsonData as requested.
      console.log(resp.body.title);})
  }
}
