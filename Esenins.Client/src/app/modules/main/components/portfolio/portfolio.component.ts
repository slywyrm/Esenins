import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import * as Packery from 'packery';
import { MainService } from '../../main.service';
import { PortfolioItem } from '../../../shared/models/portfolio-item.model';
import { ProjectsService } from '../../../shared/services/projects/projects.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { tileEnter } from './animation';

@Component({
  selector: 'es-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [tileEnter]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  private pack: Packery;
  @ViewChild('shuffle') private shuffleElement: ElementRef;
  projects: PortfolioItem[];
  @Output() scrollToTop = new EventEmitter();

  logAnim = console.log;

  get menuShown$(): Observable<boolean> {
    return this.mainService.menuShown$.pipe(
      tap(this.reMason.bind(this))
    );
  }
  constructor(private mainService: MainService,
              private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getPortfolio().subscribe(projects => this.projects = projects);
  }

  ngAfterViewInit() {
    this.pack = new Packery(this.shuffleElement.nativeElement, {
      columnWidth: '.sizer',
      rowHeight: '.sizer',
      itemSelector: '.tile',
      stagger: 50,
      percentPosition: true
    });
  }

  reMason(menuShown: boolean): void {
    if (this.pack) {
      setTimeout(() => this.pack.layout());
    }
    if (!menuShown) {
      this.scrollToTop.emit();
    }
  }

}
