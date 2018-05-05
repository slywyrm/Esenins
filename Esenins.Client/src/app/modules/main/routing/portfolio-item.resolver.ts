import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PortfolioItem } from '../../shared/models/portfolio-item.model';
import { ProjectsService } from '../../shared/services/projects/projects.service';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioItemResolver implements Resolve<PortfolioItem> {
  constructor(private projectsService: ProjectsService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<PortfolioItem> {
    return this.projectsService.getPortfolioItem(next.paramMap.get('projectId'));
  }
}
