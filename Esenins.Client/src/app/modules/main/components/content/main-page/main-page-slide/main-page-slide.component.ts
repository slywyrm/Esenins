import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { SlideModel } from '../../../../../shared/models/slide.model';

@Component({
  selector: 'wl-main-page-slide',
  templateUrl: './main-page-slide.component.html',
  styleUrls: ['./main-page-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageSlideComponent implements OnInit {
  @HostBinding('style.z-index') private zIndex = 900;
  opacity = '0';

  @Input() slide: SlideModel;

  @Input() set active(value: boolean) {
    this.zIndex = value ? 901 : 900;
    if (value) {
      this.opacity = '1';
    } else {
      setTimeout(() => {
        this.opacity = '0';
        this.cdr.detectChanges();
        }, 500);
    }
  }

  get imgUrl(): string {
    return `url(${this.slide.image})`;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
