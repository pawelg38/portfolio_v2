import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home <=> About, Home <=> Share, Share <=> About', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ left: '0%' }))
        ]),
      ]),
      query(':enter', animateChild())
    ])
  ]);