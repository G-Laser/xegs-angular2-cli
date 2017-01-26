"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Article = (function () {
    function Article(name, url, imgPath) {
        this.name = name;
        this.url = url;
        this.imgPath = imgPath;
    }
    return Article;
}());
exports.Article = Article;
var ARTICLES = [
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
var articlesPromise = Promise.resolve(ARTICLES);
var ArticleService = (function () {
    function ArticleService() {
    }
    ArticleService.prototype.getArticles = function () { return articlesPromise; };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map