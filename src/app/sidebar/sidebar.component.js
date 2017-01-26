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
var podcast_1 = require('./podcast');
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.PODCASTS = [
            new podcast_1.Podcast('1632 Atari podcaST', 'https://1632podcast.info/', 'img/podcasts/1632podcast.jpg'),
            new podcast_1.Podcast('The 2600 Game by Game Podcast', 'http://2600gamebygamepodcast.libsyn.com/', 'img/podcasts/2600CbC.jpg'),
            new podcast_1.Podcast('The 5200 Super Podcast', 'http://the5200superpodcast.blogspot.com/', 'img/podcasts/super5200.jpg'),
            new podcast_1.Podcast('The 7800 Game by Game Podcast', 'http://atari7800gamebygamepodcast.blogspot.com/', 'img/podcasts/NoSwearGamer.jpg'),
            new podcast_1.Podcast('The Atari Antic Podcast', 'http://ataripodcast.libsyn.com/', 'img/podcasts/Antic.png'),
            new podcast_1.Podcast('The Atari Jaguar Game by Game Podcast', 'http://atarijaguargamebygame.libsyn.com/', 'img/podcasts/JaguarPodcast.jpg'),
            new podcast_1.Podcast('The Atari Lynx Game by Game podcast', 'http://atarilynxpodcast.blogspot.com/', 'img/podcasts/LynxShow.jpg'),
            new podcast_1.Podcast('InverseAtascii Atari 8-bit Productivity Podcast', 'http://inverseatascii.info/', 'img/podcasts/InverseAtasciiCart.jpg'),
            new podcast_1.Podcast('The Player/Missile Podcast', 'http://playermissile.com/', 'img/podcasts/PM_logo.png')
        ];
        this.relatedPodcasts = this.PODCASTS[0];
    }
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'side-item',
            template: "<a *ngFor=\"let podcast of PODCASTS\" href=\"{{podcast.url}}\" title=\"{{podcast.name}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<img src=\"{{podcast.imgPath}}\" class=\"img-thumbnail\" />\n\t\t\t\t\t\t\t</a>"
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map