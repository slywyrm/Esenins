import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MainService, TitleInfo } from '../../main.service';

@Component({
  selector: 'wl-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTitleComponent implements OnInit {
  titleInfo: TitleInfo = { title: '', color: 'white' };
  changing = false;
  @Input() inMenu = false;

  constructor(private cdr: ChangeDetectorRef,
              private mainService: MainService) { }

  ngOnInit() {
    this.mainService.titleInfo$.subscribe(titleInfo => {
      if (this.titleInfoEquals(titleInfo)) {
        this.changing = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.titleInfo = titleInfo;
          this.changing = false;
          this.cdr.detectChanges();
        }, 500);
      }
    });
  }

  titleInfoEquals(titleInfo: TitleInfo) {
    return this.titleInfo.title !== titleInfo.title || this.titleInfo.color !== titleInfo.color;
  }

}
