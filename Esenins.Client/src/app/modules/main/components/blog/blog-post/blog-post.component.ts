import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'es-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @ViewChild('post') postElement: ElementRef;
  @Input() post: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.postElement.nativeElement, 'data-href', this.post);
  }

}
