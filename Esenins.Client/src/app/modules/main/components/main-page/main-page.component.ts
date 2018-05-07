import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { SlidesService } from '../../../shared/services/slides/slides.service';
import { SlideModel } from '../../../shared/models/slide.model';
import { MainService } from '../../main.service';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'es-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  // @HostBinding('style.opacity') private opacity = 1;
  private slidesSubscription: Subscription;
  private autoslideSubscription: Subscription;
  private selectedSectionSubscription: Subscription;
  private autoslideEnabled = true;
  private slideIsChanging = false;
  slides: SlideModel[] = [];
  currentSlideIndex = 0;

  constructor(public slidesService: SlidesService,
              private mainService: MainService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.slidesSubscription = this.slidesService.slides$.subscribe(slides => this.slides = slides);
    this.autoslideSubscription = interval(5000).pipe(
      filter(() => this.autoslideEnabled)
    ).subscribe(() => this.slideTo(this.currentSlideIndex + 1));
    this.selectedSectionSubscription = this.mainService.titleInfo$.pipe(map(titleInfo => titleInfo.title === 'design studio'))
      .subscribe(current => this.autoslideEnabled = current);
  }

  ngOnDestroy() {
    this.slidesSubscription.unsubscribe();
    this.autoslideSubscription.unsubscribe();
    this.selectedSectionSubscription.unsubscribe();
  }

  slideTo(index: number) {
    if (!this.slideIsChanging) {
      this.slideIsChanging = true;
      if (index >= this.slides.length) {
        this.currentSlideIndex = 0;
      } else if (index < 0) {
        this.currentSlideIndex = this.slides.length - 1;
      } else {
        this.currentSlideIndex = index;
      }
      this.cdr.detectChanges();
      setTimeout(() => this.slideIsChanging = false, 1000);
    }
  }

  manualSlide(index: number) {
    this.autoslideEnabled = false;
    this.slideTo(index);
    setTimeout(() => this.autoslideEnabled = true, 7000);
  }
}
