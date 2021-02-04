import { Component, OnInit, HostBinding, Input } from '@angular/core';

/**
 * @group Component
 * @component Card
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @HostBinding('class.padding') hasPadding = false;

  /**
   * Enable/disable padding on card, default is false
   */
  @Input()
  set padding(value) {
    this.hasPadding = value === true;
  }

  constructor() { }

  /**
   * Init card
   */
  ngOnInit() {
  }

}
