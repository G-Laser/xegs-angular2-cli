import { Injectable } from '@angular/core';

export class Article {
  constructor(public name: string, public url: string, public imgPath: string) {
  }
}

let ARTICLES = [
    new Article('1632 Atari podcaST', 'https://1632podcast.info/', 'img/podcasts/1632podcast.jpg'),
    new Article('The 2600 Game by Game Podcast', 'http://2600gamebygamepodcast.libsyn.com/', 'img/podcasts/2600CbC.jpg'),
    new Article('The 5200 Super Podcast', 'http://the5200superpodcast.blogspot.com/', 'img/podcasts/super5200.jpg'),
    new Article('The 7800 Game by Game Podcast', 'http://atari7800gamebygamepodcast.blogspot.com/', 'img/podcasts/NoSwearGamer.jpg'),
    new Article('The Atari Antic Podcast', 'http://ataripodcast.libsyn.com/', 'img/podcasts/Antic.png'),
    new Article('The Atari Jaguar Game by Game Podcast', 'http://atarijaguargamebygame.libsyn.com/', 'img/podcasts/JaguarPodcast.jpg'),
    new Article('The Atari Lynx Game by Game podcast', 'http://atarilynxpodcast.blogspot.com/', 'img/podcasts/LynxShow.jpg'),
    new Article('InverseAtascii Atari 8-bit Productivity Podcast', 'http://inverseatascii.info/', 'img/podcasts/InverseAtasciiCart.jpg'),
    new Article('The Player/Missile Podcast', 'http://playermissile.com/', 'img/podcasts/PM_logo.png')
    ];

let articlesPromise = Promise.resolve(ARTICLES);

@Injectable()
export class ArticleService {
  getArticles() { return articlesPromise; }

  /*getArticle(name: string) {
    return articlesPromise
      .then(articles => articles.find(article => article.name === +name));
  } */
}

