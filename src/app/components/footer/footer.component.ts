import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  scrollTo(anchor:string) {
    this.viewportScroller.setOffset([0, 120]);
    this.viewportScroller.scrollToAnchor(anchor);  
}

  constructor( private viewportScroller:ViewportScroller) { }

  ngOnInit(): void {
  }

}
