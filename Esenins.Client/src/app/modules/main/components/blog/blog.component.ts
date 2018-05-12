import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable } from 'rxjs';
import { FacebookPost } from '../../../shared/models/facebook-post';
import * as Packery from 'packery';
import { MainService } from '../../main.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'es-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {
  @ViewChild('shuffle') shuffleElement: ElementRef;
  private packery: Packery;
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
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.packery = new Packery(this.shuffleElement.nativeElement, {
        columnWidth: '.sizer',
        itemSelector: '.fb-post',
        stagger: 50,
        percentPosition: true
      });
    }, 800);
  }

  repack(): void {
    if (this.packery) {
      setTimeout(() => this.packery.layout());
    }
  }

}
