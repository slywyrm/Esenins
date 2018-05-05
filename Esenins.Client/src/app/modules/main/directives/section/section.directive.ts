import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[wlSection]'
})
export class SectionDirective {
  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  get id(): string {
    return this.element.id;
  }

  constructor(private elementRef: ElementRef) {}
}
