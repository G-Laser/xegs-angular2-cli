import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="row">
    <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" id="footer_area"> -->
        &copy; Copyright 2016
        <b style="color: #B3D9FF">Shiny Keys Studio</b>
        <img src="./assets/img/ShinyKeysLogo.png" />
        <a href="http://www.shinykeysstudio.com">www.ShinyKeyStudio.com</a>. Last updated on Feb 2 2016.
</footer>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
