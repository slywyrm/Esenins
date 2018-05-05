import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../../shared/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'wl-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  get copyright(): string {
    if (this.project.copyright && this.project.copyright === 'DKStudio') {
      return '*';
    } else if (this.project.copyright && this.project.copyright === 'Sundukovy Sisters') {
      return '**';
    }
    return '';
  }

  get link(): string[] {
    return ['/main/projects', this.project.portfolioId];
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPortfolio() {
    this.router.navigate(['/main/portfolio']);
    setTimeout(() => this.router.navigate(['/main/portfolio', this.project.portfolioId]), 500);
  }

}
