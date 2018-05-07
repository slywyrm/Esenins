import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[esTouchScroll]'
})
export class TouchScrollDirective {
  @Output() esTouchScroll = new EventEmitter<number>();
  private startY: number = null;

  constructor() { }

  @HostListener('touchstart', ['$event']) private onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event']) private onTouchEnd(event: TouchEvent) {
    const deltaY = this.startY - event.changedTouches[0].clientY;
    if (Math.abs(deltaY) >= 100) {
      this.esTouchScroll.emit(deltaY);
    }
    this.startY = null;
  }

}
