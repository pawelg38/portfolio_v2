import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  
  @Output() scrollRequest = new EventEmitter<string>();
  scroll() {
    this.scrollRequest.emit("footer");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
