import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'es-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {
  posts$: Observable<string[]>;

  constructor(private blog: BlogService,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // (function(d, s, id) {
    //   let js;
    //   const fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s); js.id = id;
    //   js.src = 'https://apps.elfsight.com/p/platform.js';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-widget'));
    this.posts$ = this.blog.getPosts();
  }

  ngAfterViewInit() {
    setTimeout(this.initFb, 1000);
  }

  private initFb() {
    const d = this.document,
      s = 'script', id = 'facebook-jssdk';
    let js;
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.0&appId=236660337080482&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }

}
