import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    group([
      query(':enter, :leave', style({position: 'absolute'})),
      query(':enter', [style({ transform: '{{ enter }}', opacity: 0 }), animate('0.4s 400ms ease-in-out', style({}))], {optional: true}),
      query(':leave', [style({}), animate('0.4s ease-in-out', style({ transform: '{{ leave }}', opacity: 0 }))], {optional: true})
    ])
  ], {params: {enter: 'translateY(100%)', leave: 'translateY(-100%)'}})
]);
