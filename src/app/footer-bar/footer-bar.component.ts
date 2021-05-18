import { animate, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        borderTop: "1px solid black",
        borderRight: "none",
        borderBottom: "1px solid black",
        borderLeft: "1px solid black"
      })),
      state('open', style({
        borderTop: "12px dotted #2d3a40",
        borderRight: "none",
        borderBottom: "12px dotted #2d3a40",
        borderLeft: "15px solid rgb(0, 179, 179)"
      })),
      transition('closed => open', [
        animate("600ms cubic-bezier(0.25, 0.8, 0.25, 1)", keyframes([
          style({ borderTop: "12px dotted #2d3a40", offset: 0.33 }),
          style({ borderBottom: "12px dotted #2d3a40", offset: 0.66 }),
          style({ borderLeft: "15px solid rgb(0, 179, 179)", offset: 1 })
        ]))
      ]),
      transition('open => closed', [
        animate("600ms ease-in", keyframes([
          style({ borderLeft: "1px solid black", offset: 0.33 }),
          style({ borderBottom: "1px solid black", offset: 0.66 }),
          style({ borderTop: "1px solid black", offset: 1 }),
        ]))
      ]),
    ]),
  ],
})
export class FooterBarComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log(document.documentElement.scrollTop);

    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos >= max-150 ) {
      //Do your action here
      console.log('At the bottom');
      console.log("scrolled");
      this.isOpen = true;
    }
    else {
      this.isOpen = false;
    }
  }
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  // onScroll(e) {
  //   console.log(e);
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
