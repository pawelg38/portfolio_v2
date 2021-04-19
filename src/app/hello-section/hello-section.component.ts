import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-hello-section',
  templateUrl: './hello-section.component.html',
  styleUrls: ['./hello-section.component.scss'],
  animations: [
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
  ]
})
export class HelloSectionComponent implements OnInit {
  public animationOn: boolean = false;
  // textPart1 = "of(Paweł Graboś).subscribe(";
  // textPart2 = "obs => obs.ShowYourSelf() );";
  // test10 = of(1,2,3).subscribe(x => 
  //   console.log(x)
  // );
  textPart1 = "Witaj"
  textPart2 = "Undefined :)"

  constructor() {
  }

  test() {
    this.animationOn = !this.animationOn;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationOn = true;
    }, 0);
  }
}