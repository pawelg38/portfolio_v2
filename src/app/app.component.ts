import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/animations';
import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'portfolio2';
  isButtonHovered: boolean = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  scrollTo(el: HTMLElement) {
    var x = document.getElementById('footer');
    x.scrollIntoView({behavior: "smooth"});
  }
}