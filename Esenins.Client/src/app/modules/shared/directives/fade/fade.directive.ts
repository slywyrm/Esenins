import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[esFade]'
})
export class FadeDirective {
  // @HostBinding('style.opacity') private opacity: string;
  @HostBinding('style.transition') private transition = 'opacity .5s';
  @Input() transitionTime = 500;

  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  @Input() set esFade(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.element, 'opacity', 0);
      setTimeout(() => this.fade(value), this.transitionTime);
    } else {
      this.fade(value);
      setTimeout(() => this.renderer.setStyle(this.element, 'opacity', 1));
    }
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  private fade(faded: boolean): void {
    if (faded) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', 'true');
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
    }
  }
}
