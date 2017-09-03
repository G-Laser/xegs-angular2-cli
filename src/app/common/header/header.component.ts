import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<!-- NAVAGATION -->
			<div class="row">
				<nav class="navbar navbar-default navbar-fixed-top" roll="navigation">
					<a href="rss/feedrss.rss" target="_blank"><img src="assets/img/Rss-feed.png" class="pull-left"  title="RSS Feed"/></a>
					<a href="https://twitter.com/XEGS8bitPodcast" target="_blank"><img src="assets/img/twitter.png" class="pull-left" title="Twitter"/></a>
					<a href="https://www.facebook.com/AtariXEGS.and.8Bit.Game.Podcast/" target="_blank">
					<img src="assets/img/facebook.png" class="pull-left" title="Facebook"/></a>
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class="collapse navbar-collapse " id="collapse">
						<ul class="nav navbar-nav navbar-right">
							<li>
							<a routerLink="/home" routerLinkActive="active" class="active">
							<span class="glyphicon glyphicon-home"></span> Home</a></li>
							<li>
							<a routerLink="/storagesolutions" routerLinkActive="active">
							<span class="glyphicon glyphicon-play-circle"></span> Storage Solutions</a></li>
							<li>
							<a routerLink="/about" routerLinkActive="active"><span class="glyphicon glyphicon-info-sign"></span> About</a></li>
							<li>
							<a routerLink="/contact" routerLinkActive="active"><span class="glyphicon glyphicon-question-sign"></span> Contact</a></li>
							<li>
							<a routerLink="/storagesolutionsadmim" routerLinkActive="active"><span class="glyphicon glyphicon-question-sign">
							</span> Device Admin</a></li>
						</ul>
					</div>
				</nav>
			</div>`,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
}
