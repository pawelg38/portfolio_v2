import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        opacity: "0.0",
        "pointer-events": "none",
        left: "0",
        width: "80px"
      })),
      state('open', style({
        opacity: "1.0",
        left: "0",
        width: "120px",
        "pointer-events": "none",
      })),
      transition('closed => open', [
        group([
          query('.social-media-logo', [
            style({
              //transform: "scaleX(0.1) scaleY(0.1)"
              width: "2px",
              height: "2px"
            })
          ]),
          query(':self', [
            animate("500ms cubic-bezier(0.25, 0.8, 0.25, 1)",
              keyframes([
                style({
                  opacity: "1.0",
                  offset: 0.9
                }),
                style({
                  width: "120px",
                  offset: 1
                })
              ])
            )
          ]),
          query('.social-media-logo', [
            animate("500ms 500ms cubic-bezier(0.25, 0.8, 0.25, 1)", 
              style({
                //transform: "scaleX(1.0) scaleY(1.0)"
                width: "26px",
                height: "26px"
              })
            )
          ])
        ])
      ]),
      transition('open => closed', [
        group([
          query('.social-media-logo', [
            animate("500ms cubic-bezier(0.25, 0.8, 0.25, 1)",
              style({
                //transform: "scaleX(0.1) scaleY(0.1)"
                width: "2px",
                height: "2px"
              })
            )
          ]),
          query(':self', [
            animate("400ms 300ms cubic-bezier(0.25, 0.8, 0.25, 1)",
              style({ width: "80px" })
            )
          ]),
          query(':self', [
            animate("400ms 800ms cubic-bezier(0.25, 0.8, 0.25, 1)",
              style({ opacity: "0.0" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class TopbarComponent implements OnInit {
  
  @Output() scrollRequest = new EventEmitter<string>();
  scroll() {
    this.scrollRequest.emit("footer");
  }

  isOpen: boolean = false;
  isOpenAnimationDone: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if (this.isOpenAnimationDone) {
      this.isOpen = !this.isOpen;
    }
    this.isOpenAnimationDone = false;
  }
  animationDone() {
    console.log(this.isOpenAnimationDone);
    this.isOpenAnimationDone = true;
  }

}
