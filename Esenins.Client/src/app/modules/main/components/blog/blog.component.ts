import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'es-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('posts') postsElementRef: ElementRef;
  posts$: Observable<string[]>;

  private get postsElement(): HTMLElement {
    return this.postsElementRef.nativeElement;
  }

  constructor(private blog: BlogService,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const loaded = this.blog.getLoadedPostsHtml();
    if (loaded) {
      this.postsElement.innerHTML = loaded;
    } else {
      this.posts$ = this.blog.getPosts();
    }
  }

  ngOnDestroy() {
    this.blog.saveLoadedPostsHtml(this.postsElement.innerHTML);
  }

  ngAfterViewInit() {
    setTimeout(this.initFb, 1000);
  }

  private initFb() {
    const d = this.document,
      s = 'script', id = 'facebook-jssdk';
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.0&appId=236660337080482&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }

}
