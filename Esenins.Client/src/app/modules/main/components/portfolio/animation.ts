import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const tileEnter = trigger('tileEnter', [
  transition('* => *', [
    query(':enter', [
      style({ transform: 'rotate(0deg)'}),
      stagger(200, animate('1000ms ease-in-out', style({transform: 'rotate(90deg)'})))
    ])
  ])
]);
