import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-section',
  templateUrl: './hello-section.component.html',
  styleUrls: ['./hello-section.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        query('.text', [
          style({ top: '80px', left: '-440px' })
        ]),
        group([
          query('.backgroundMask', [
            style({ transform: "rotateY(180deg)" }),
            animate(
              '1600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ transform: "rotateY(0deg)" })
            )
          ]),
          query('.text-part1', [
            style({ top: '80px', left: '-440px' }),
            animate(
              '600ms 400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ top: '30px', left: '20px'})
            )
          ]),
          query('.text-part2', [
            style({ top: '340px', left: '20px' }),
            animate(
              '600ms 600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ top: '80px', left: '20px'})
            )
          ])
        ])
      ])
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
  @HostBinding("@openClose")
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