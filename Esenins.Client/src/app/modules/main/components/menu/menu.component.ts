import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'es-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Output() hideMenu = new EventEmitter();

  get sectionKeys(): string[] {
    return Object.keys(this.mainService.sections);
  }

  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

}
