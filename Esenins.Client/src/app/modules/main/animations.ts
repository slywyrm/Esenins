import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  // transition('* <=> *', [
  //   group([
  //     query(':enter', [style({ transform: 'translateY(-100%)' }), animate('0.35s ease-in')]),
  //     query(':leave', [style({ transform: 'translateY(100%)' }), animate('0.35s ease-in')]),
  //     query('up => void', [animate(350, style({transform: 'translateY(100%)'}))]),
  //     query('down => void', [animate(350, style({transform: 'translateY(-100%)'}))])
  //   ])
  // ]);
  transition('* <=> *', [
    group([
      // query(':enter, :leave', style({position: 'absolute'})),
      // query(':leave', style({position: 'absolute'})),
      query(':enter', [style({ transform: '{{ enter }}', opacity: 0 }), animate('0.35s ease-in-out', style({}))], {optional: true}),
      query(':leave', [style({}), animate('0.35s ease-in-out', style({ transform: '{{ leave }}', opacity: 0 }))], {optional: true})
    ])
  ], {params: {enter: 'translateY(100%)', leave: 'translateY(-100%)'}})
]);
