import { Component } from '@angular/core';
import {Podcast} from './podcast';

@Component({
  selector: 'app-sidebar',
  template: `<a *ngFor="let podcast of PODCASTS" href="{{podcast.url}}" title="{{podcast.name}}" target="_blank">
								<img src="{{podcast.imgPath}}" class="img-thumbnail" />
							</a>`
})

export class SidebarComponent  {
    PODCASTS = [
    new Podcast('1632 Atari podcaST', 'https://1632podcast.info/', '../../assets/img/podcasts/1632podcast.jpg'),
    new Podcast('The 2600 Game by Game Podcast', 'http://2600gamebygamepodcast.libsyn.com/', '../../assets/img/podcasts/2600CbC.jpg'),
    new Podcast('The 5200 Super Podcast', 'http://the5200superpodcast.blogspot.com/', '../../assets/img/podcasts/super5200.jpg'),
    new Podcast('The 7800 Game by Game Podcast', 'http://atari7800gamebygamepodcast.blogspot.com/', '../../assets/img/podcasts/NoSwearGamer.jpg'),
    new Podcast('The Atari Antic Podcast', 'http://ataripodcast.libsyn.com/', '../../assets/img/podcasts/Antic.png'),
    new Podcast('The Atari Jaguar Game by Game Podcast', 'http://atarijaguargamebygame.libsyn.com/', '../../assets/img/podcasts/JaguarPodcast.jpg'),
    new Podcast('The Atari Lynx Game by Game podcast', 'http://atarilynxpodcast.blogspot.com/', '../../assets/img/podcasts/LynxShow.jpg'),
    new Podcast('InverseAtascii Atari 8-bit Productivity Podcast', 'http://inverseatascii.info/', '../../assets/img/podcasts/InverseAtasciiCart.jpg'),
    new Podcast('The Player/Missile Podcast', 'http://playermissile.com/', '../../assets/img/podcasts/PM_logo.png')
    ];
relatedPodcasts = this.PODCASTS[0];
}
