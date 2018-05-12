import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[esHoverClass]'
})
export class HoverClassDirective {
  @Input() esHoverClass: string;
  private isTouch: boolean;

  constructor(private element: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('touchstart') private onTouchStart() {
    this.isTouch = true;
    this.renderer.removeClass(this.element.nativeElement, this.esHoverClass);
  }

  @HostListener('mouseenter') private onMouseEnter() {
    if (!this.isTouch) {
      this.renderer.addClass(this.element.nativeElement, this.esHoverClass);
    }
  }

  @HostListener('mouseleave') private onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, this.esHoverClass);
  }
}
