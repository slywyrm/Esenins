import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PortfolioItem } from '../../../../shared/models/portfolio-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../main.service';
import { DOCUMENT } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'es-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit, OnDestroy, AfterViewInit {
  private isShown = false;
  private _project: PortfolioItem;
  private autoslideEnabled = true;
  private autoslideSubscription: Subscription;
  selectedPhotoIndex = 0;
  infoShown = false;

  set project(value: PortfolioItem) {
    if (value) {
      this._project = value;
      setTimeout(() => {
        this.isShown = true;
        this.cdr.detectChanges();
      });
    }
  }

  get project(): PortfolioItem {
    return this._project;
  }

  get selectedPhotoUrl(): string {
    return this.getUrl(this.selectedPhotoIndex);
  }

  constructor(private cdr: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute,
              private mainService: MainService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.project = data.project;
      this.mainService.overrideTitle({ title: data.project.name, color: 'white' });
    });
    this.autoslideSubscription = interval(5000).pipe(
      filter(() => this.autoslideEnabled)
    ).subscribe(() => this.changeSelected(this.selectedPhotoIndex + 1));
  }

  ngAfterViewInit() {
    this.document.body.style.overflowY = 'hidden';
  }

  ngOnDestroy() {
    this.autoslideSubscription.unsubscribe();
  }

  canDeactivate(): Promise<boolean> {
    this.isShown = false;
    this.document.body.style.overflowY = 'scroll';
    this.cdr.detectChanges();
    this.mainService.overrideTitle({});
    return new Promise<boolean>(resolve => setTimeout(() => resolve(true), 500));
  }

  clickModal(event: MouseEvent): void {
    if ((<HTMLElement>event.target).id.startsWith('projectModal')) {
      this.close();
    }
  }

  close(): void {
    this.router.navigate(['/main', this.route.snapshot.parent.url[0].path]);
  }

  getUrl(index: number): string {
    return `url(${this.project.photos[index]})`;
  }

  changeSelected(index: number): void {
    if (index < this.project.photos.length) {
      this.selectedPhotoIndex = index;
    } else {
      this.selectedPhotoIndex = 0;
    }
    this.cdr.detectChanges();
  }

  manualChangeSelected(index: number): void {
    this.autoslideEnabled = false;
    this.changeSelected(index);
    setTimeout(() => this.autoslideEnabled = true, 7000);
  }

  triggerInfo() {
    this.infoShown = !this.infoShown;
  }

}
