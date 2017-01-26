import { Component } from '@angular/core';
import {Podcast} from './podcast';

@Component({
  selector: 'app-side-item',
  template: `<a *ngFor="let podcast of PODCASTS" href="{{podcast.url}}" title="{{podcast.name}}" target="_blank">
								<img src="{{podcast.imgPath}}" class="img-thumbnail" />
							</a>`
})

export class SidebarComponent  {
    PODCASTS = [
    new Podcast('1632 Atari podcaST', 'https://1632podcast.info/', 'img/podcasts/1632podcast.jpg'),
    new Podcast('The 2600 Game by Game Podcast', 'http://2600gamebygamepodcast.libsyn.com/', 'img/podcasts/2600CbC.jpg'),
    new Podcast('The 5200 Super Podcast', 'http://the5200superpodcast.blogspot.com/', 'img/podcasts/super5200.jpg'),
    new Podcast('The 7800 Game by Game Podcast', 'http://atari7800gamebygamepodcast.blogspot.com/', 'img/podcasts/NoSwearGamer.jpg'),
    new Podcast('The Atari Antic Podcast', 'http://ataripodcast.libsyn.com/', 'img/podcasts/Antic.png'),
    new Podcast('The Atari Jaguar Game by Game Podcast', 'http://atarijaguargamebygame.libsyn.com/', 'img/podcasts/JaguarPodcast.jpg'),
    new Podcast('The Atari Lynx Game by Game podcast', 'http://atarilynxpodcast.blogspot.com/', 'img/podcasts/LynxShow.jpg'),
    new Podcast('InverseAtascii Atari 8-bit Productivity Podcast', 'http://inverseatascii.info/', 'img/podcasts/InverseAtasciiCart.jpg'),
    new Podcast('The Player/Missile Podcast', 'http://playermissile.com/', 'img/podcasts/PM_logo.png')
    ];
relatedPodcasts = this.PODCASTS[0];
}
