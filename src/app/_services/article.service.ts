import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Article } from '../_models/article';


@Injectable()
export class ArticleService {
  private url = 'assets/data/article.json';
  constructor(private http: HttpClient) { }

  articles(): Observable<any> {
    return this.http.get(this.url);
  }
}



