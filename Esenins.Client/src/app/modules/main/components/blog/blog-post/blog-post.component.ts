import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FacebookPost } from '../../../../shared/models/facebook-post';

@Component({
  selector: 'es-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, AfterViewInit {
  @Input() post: FacebookPost;
  @Output() mouseover = new EventEmitter();
  @Output() initiated = new EventEmitter();
  messageClamped = true;
  @ViewChild('message') private messageElementRef: ElementRef;

  private get messageElement(): HTMLElement {
    return this.messageElementRef.nativeElement;
  }

  get messageOverflown(): boolean {
    return this.messageElement.scrollHeight > this.messageElement.clientHeight ||
      this.messageElement.scrollWidth > this.messageElement.clientWidth;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.initiated.emit();
  }

  getImgUrl(image: string): string {
    return `url(${image})`;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.messageClamped = false;
    this.cdr.detectChanges();
    this.mouseover.emit();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.messageClamped = true;
    this.cdr.detectChanges();
    this.mouseover.emit();
  }

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement): void {
    if (!(target instanceof HTMLAnchorElement)) {
      window.open(this.post.permalink_url, '_blank');
    }
  }

}
