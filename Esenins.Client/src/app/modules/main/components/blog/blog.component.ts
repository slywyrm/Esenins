import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'wl-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
    (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s); js.id = id;
      js.src = 'https://apps.elfsight.com/p/platform.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-widget'));
  }

  ngAfterViewInit() {
  }

}
