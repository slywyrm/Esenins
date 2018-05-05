import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, QueryList, ViewChildren
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../main.service';
// import { PageScrollConfig, PageScrollInstance, PageScrollService } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';
import { SectionDirective } from '../../directives/section/section.directive';
import { isMobile } from '../../../shared/constants/browsers';

@Component({
  selector: 'wl-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChildren(SectionDirective) private sectionElements: QueryList<SectionDirective>;
  private scrolling = false;
  private currentSectionId: string;
  private transitionTime = 500;

  private get currentSection(): HTMLElement {
    const section = this.sectionElements.find(item => item.id === this.currentSectionId);
    return section && section.element;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private mainService: MainService,
              // private pageScroll: PageScrollService,
              @Inject(DOCUMENT) private document: Document) {
    // PageScrollConfig.defaultInterruptible = false;
    // PageScrollConfig.defaultDuration = this.transitionTime;
  }

  ngOnInit() {
    window.addEventListener('resize', () => this.adjustScroll());
  }

  ngAfterViewInit() {
    this.route.paramMap.subscribe(params => {
        this.changeSection(params.get('sectionId'));
    });
    this.document.onscroll = this.onScroll.bind(this);
  }

  adjustScroll(): void {
    // const scrollInstance = PageScrollInstance.newInstance({
    //   document: this.document,
    //   scrollTarget: `#${this.mainService.currentSectionId()}`,
    //   pageScrollDuration: 0
    // });
    // this.pageScroll.start(scrollInstance);
  }

  private changeSection(id: string): void {
    this.scrolling = true;
    this.currentSectionId = id;
    this.mainService.changeSelectedSection(id);
    this.cdr.detectChanges();
    // const scrollInstance = PageScrollInstance.simpleInstance(this.document, `#${id}`);
    // this.pageScroll.start(scrollInstance);
    setTimeout(() => this.scrolling = false, this.transitionTime + 100);
  }

  private navigateByIndexDelta(delta: number): void {
    const navigateTo = this.mainService.findSectionByIndexDelta(delta);
    if (navigateTo) {
      this.router.navigate(['/main', navigateTo]);
    }
  }

  private onScroll(): void {
    if (this.currentSection && !this.scrolling) {
      const viewportHeight = Math.max(this.document.documentElement.clientHeight, window && window.innerHeight);
      const scrollTop = this.document.scrollingElement.scrollTop;
      const scrollBottom = scrollTop + viewportHeight;

      if (this.currentSection.offsetTop - scrollTop >= 10) {
        this.navigateByIndexDelta(-1);
      } else if (scrollBottom - (this.currentSection.offsetTop + this.currentSection.offsetHeight)  >= 10) {
        this.navigateByIndexDelta(1);
      }
    }
  }

}
