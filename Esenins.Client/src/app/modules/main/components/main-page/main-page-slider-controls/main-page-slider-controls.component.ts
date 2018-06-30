import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range } from 'lodash';

@Component({
  selector: 'es-main-page-slider-controls',
  templateUrl: './main-page-slider-controls.component.html',
  styleUrls: ['./main-page-slider-controls.component.scss']
})
export class MainPageSliderControlsComponent implements OnInit {
  @Input() slidesCount: number;
  @Input() currentSlide: number;

  @Output() indicatorClicked = new EventEmitter<number>();

  range = range;

  constructor() { }

  ngOnInit() {
  }

}
