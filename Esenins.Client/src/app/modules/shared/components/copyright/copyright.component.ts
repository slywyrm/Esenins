import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CopyrightModel } from '../../models/copyright.model';

@Component({
  selector: 'wl-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  @HostBinding('style.fontSize') private fontSize = '1rem';
  @Input() copyright: CopyrightModel;
  @Input() set scale(value: number) {
    this.fontSize = `${value}rem`;
  }

  constructor() { }

  ngOnInit() {
  }

}
