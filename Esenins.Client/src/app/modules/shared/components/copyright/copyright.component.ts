import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Copyright } from '../../models/copyright';

@Component({
  selector: 'es-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  @HostBinding('style.fontSize') private fontSize = '1rem';
  @Input() copyright: Copyright;
  @Input() set scale(value: number) {
    this.fontSize = `${value}rem`;
  }

  constructor() { }

  ngOnInit() {
  }

}
