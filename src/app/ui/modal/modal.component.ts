import { Component, OnInit, HostBinding, Input } from '@angular/core';

/**
 * @group Layout
 * @component Card
 * @description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
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
