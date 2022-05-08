import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private viewportScroller:ViewportScroller) { }

  scrollTo(anchor:string) {
    this.viewportScroller.setOffset([0, 120]);
    this.viewportScroller.scrollToAnchor(anchor);  
}
  ngOnInit(): void {
  }

}
