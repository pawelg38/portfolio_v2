import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { helloAnimation } from '../../animations/hello_animation'

@Component({
  selector: 'app-hello-section',
  templateUrl: './hello-section.component.html',
  styleUrls: ['./hello-section.component.scss'],
  animations: [
    helloAnimation
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