import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[esBlogMessage]'
})
export class BlogMessageDirective {
  @Input() set esBlogMessage(value: string) {
    let result = '';
    for (const word of value.split(/[\s,\n]+/)) {
      if (word.startsWith('#')) {
        result += `<a href="https://www.facebook.com/hashtag/${word.split('#')[1]}?source=feed_text" target="_blank">${word}</a> `;
      } else {
        result += `${word} `;
      }
    }
    this.html = result;
  }
  @HostBinding('innerHTML') html: string;

  constructor() { }

}
