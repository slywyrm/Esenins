import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { MainService } from './main.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { routeAnimation } from './animations';
import { combineLatest, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'es-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimation]
})
export class MainComponent implements OnInit, OnDestroy {
  private menuSubscription: Subscription;
  changingSection = false;

  get logoColor$(): Observable<string> {
    return combineLatest(this.mainService.menuShown$, this.mainService.titleInfo$).pipe(
      map(([shown, titleInfo]) => shown ? 'white' : titleInfo.color)
    );
  }

  // get menuShown$(): Observable<boolean> {
  //   return this.mainService.menuShown$;
  // }

  get isRotated$(): Observable<boolean> {
    return this.mainService.menuShown$;
  }

  get hideTop$(): Observable<boolean> {
    return this.mainService.selectedSection$.pipe(
      map(section => section.name === 'portfolio' ||
        section.name === 'projects' ||
        section.name === 'blog')
    );
  }

  get needsHeight$(): Observable<boolean> {
    return this.mainService.selectedSection$.pipe(
      map(section => !!section.needsHeight)
    );
  }

  get enterAnimation(): string {
    return `translateY(${this.mainService.scrollDirection === 'up' ? -100 : 100}%)`;
  }

  get leaveAnimation(): string {
    return `translateY(${this.mainService.scrollDirection === 'up' ? 100 : -100}%)`;
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private mainService: MainService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.menuSubscription = this.mainService.menuShown$.subscribe(shown => {
      if (shown) {
        this.renderer.addClass(this.elementRef.nativeElement, 'menu-shown');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'menu-shown');
      }
    });

    if (window) {
      window.onwheel = (e: WheelEvent) => {
        if (this.changingSection) {
          e.preventDefault();
          return false;
        }
      };
    }
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }

  toggleMenu(): void {
    this.mainService.toggleMenu();
  }

  closeMenuIfOpened(): void {
    if (this.mainService.isMenuShown()) {
      this.mainService.toggleMenu(false);
    }
  }

  getRouterState(outlet: RouterOutlet): string {
    return outlet.activatedRoute.snapshot.url[0].path;
  }

  @HostListener('wheel', ['$event.deltaY']) onWheel(deltaY: number): boolean {
    if (!this.changingSection) {
      const scrollTop = this.document.scrollingElement.scrollTop;
      if (scrollTop <= 0 && deltaY < 0) {
        this.changeSection(-1);
        return;
      }
      const viewportHeight = Math.max(this.document.documentElement.clientHeight, window && window.innerHeight);
      const scrollBottom = scrollTop + viewportHeight;
      if (this.document.documentElement.offsetHeight <= scrollBottom && deltaY > 0) {
        this.changeSection(1);
      }
    }
  }

  private changeSection(delta: number): void {
    this.changingSection = true;
    setTimeout(() => { this.changingSection = false; this.cdr.detectChanges(); }, 500);
    this.router.navigate(['/main', this.mainService.findSectionByIndexDelta(delta)]);
  }

}
