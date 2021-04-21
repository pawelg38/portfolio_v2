import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
export const helloAnimation =
    trigger('openClose', [
        state('open1', style({
            top: '80px',
            left: '20px'
        })),
        state('closed1', style({
            top: '80px',
            left: '-440px'
        })),
        state('open2', style({
            top: '210px',
            left: '20px'
        })),
        state('closed2', style({
            top: '340px',
            left: '20px'
        })),
        transition('open1 => closed1', [
            animate('0.5s 0.1s cubic-bezier(0.25, 0.8, 0.25, 1)')
        ]),
        transition('closed1 => open1', [
            animate('0.5s 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)')
        ]),
        transition('open2 => closed2', [
            animate('0.5s 0.1s cubic-bezier(0.25, 0.8, 0.25, 1)')
        ]),
        transition('closed2 => open2', [
            animate('0.5s 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)')
        ]),
    ])