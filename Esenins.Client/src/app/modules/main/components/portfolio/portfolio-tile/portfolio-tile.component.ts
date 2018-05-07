import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { PortfolioItem } from '../../../../shared/models/portfolio-item.model';
import { Router } from '@angular/router';
import { tileEnter } from '../animation';

@Component({
  selector: 'es-portfolio-tile',
  templateUrl: './portfolio-tile.component.html',
  styleUrls: ['./portfolio-tile.component.scss']
})
export class PortfolioTileComponent implements OnInit {
  // @HostBinding('style.position') private position = 'absolute';
  private _project: PortfolioItem;
  class: string;

  @Input() set project(value: PortfolioItem) {
    this._project = value;
    this.class = value.tileSize;
  }

  get project(): PortfolioItem {
    return this._project;
  }

  get placeholderPhoto(): string {
    return `url(${this.project.placeholderPhoto})`;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    this.router.navigate(['/main', 'portfolio', this.project.id]);
  }

}
