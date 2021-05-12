import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-findme',
  templateUrl: './findme.component.html',
  styleUrls: ['./findme.component.scss'],
  animations: [
    trigger('enterExitLeft', [
      transition(':enter', [
        query('.c-icon', [
          style({ opacity: 0, transform: 'translate(100px, -100px) scale(0.001)' }),
          animate(
            '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            style({ opacity: 1, transform: 'translateX(0px) scale(1) rotateZ(360deg)' })
          )
        ])
      ]),
      transition(':leave', [
        query('.c-icon', [
          animate(
            '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            style({ opacity: 0, transform: 'translate(100px, -100px) scale(0.001) rotateZ(-360deg)'})
          )
        ])
      ])
    ])
  ]
})
export class FindmeComponent implements OnInit {
  // @HostBinding('@enterExitLeft') get getEnterExitLeft() {
  //   //console.log("now");
  //   return false;
  // }
  @HostBinding("@enterExitLeft")
  public cos = true;
  constructor() { }

  ngOnInit(): void {
  }

}
