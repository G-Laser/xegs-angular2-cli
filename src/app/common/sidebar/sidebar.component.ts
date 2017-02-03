import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent  {
    PODCASTS = [
    {name: '1632 Atari podcaST', url: 'https://1632podcast.info/', imgPath: 'assets/img/podcasts/1632podcast.jpg'},
    {name: 'The 2600 Game by Game Podcast', url: 'http://2600gamebygamepodcast.libsyn.com/' , imgPath: 'assets/img/podcasts/2600CbC.jpg'},
    {name: 'The 5200 Podcast', url: 'https://www.facebook.com/TheAtari5200Podcast/', imgPath: 'assets/img/podcasts/Atari_5200_FB_Profile.png'},
    {name: 'The 5200 Super Podcast', url: 'http://the5200superpodcast.blogspot.com/', imgPath: 'assets/img/podcasts/super5200.jpg'},
    {name: 'The 7800 Game by Game Podcast', url: 'http://atari7800gamebygamepodcast.blogspot.com/', imgPath: 'assets/img/podcasts/NoSwearGamer.jpg'},
    {name: 'The Atari Antic Podcast', url: 'http://ataripodcast.libsyn.com/', imgPath: 'assets/img/podcasts/Antic.png'},
    {name: 'The Atari Jaguar Game by Game Podcast', url: 'http://atarijaguargamebygame.libsyn.com/', imgPath: 'assets/img/podcasts/JaguarPodcast.jpg'},
    {name: 'The Atari Lynx Game by Game podcast', url: 'http://atarilynxpodcast.blogspot.com/', imgPath: 'assets/img/podcasts/LynxShow.jpg'},
    {name: 'InverseAtascii Atari 8-bit Productivity Podcast', url: 'http://inverseatascii.info/', imgPath: 'assets/img/podcasts/InverseAtasciiCart.jpg'},
    {name: 'The Player/Missile Podcast', url: 'http://playermissile.com/', imgPath: 'assets/img/podcasts/PM_logo.png'}
    ];
    
relatedPodcasts = this.PODCASTS[0];
}
