import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable, Subscription } from 'rxjs';
import { FacebookPost } from '../../../shared/models/facebook-post';
import * as Packery from 'packery';
import { MainService } from '../../main.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'es-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  @ViewChild('shuffle') private shuffleElement: ElementRef;
  private packery: Packery;
  private postsLength: number;
  private postsNumber = 0;
  private postsSubscription: Subscription;
  posts$: Observable<FacebookPost[]>;

  get menuShown$(): Observable<boolean> {
    return this.mainService.menuShown$.pipe(
      tap(this.repack.bind(this))
    );
  }

  constructor(private blog: BlogService,
              private mainService: MainService) { }

  ngOnInit() {
    this.posts$ = this.blog.getPosts();
    this.postsSubscription = this.posts$.subscribe(posts => {
      if (posts) {
        this.postsLength = posts.length;
      }
    });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  postInitiated() {
    if (++this.postsNumber >= this.postsLength) {
      this.packery = new Packery(this.shuffleElement.nativeElement, {
        columnWidth: '.sizer',
        itemSelector: '.fb-post',
        stagger: 50,
        percentPosition: true
      });
    }
  }

  repack(): void {
    if (this.packery) {
      setTimeout(() => this.packery.layout());
    }
  }

  shiftLayout(): void {
    if (this.packery) {
      this.packery.shiftLayout();
    }
  }

}
