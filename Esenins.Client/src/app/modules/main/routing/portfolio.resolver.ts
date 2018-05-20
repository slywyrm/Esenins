import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PortfolioItem } from '../../shared/models/portfolio-item.model';
import { ProjectsService } from '../../shared/services/projects/projects.service';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioResolver implements Resolve<PortfolioItem[]> {
  constructor(private projectsService: ProjectsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PortfolioItem[]> {
    return this.projectsService.getPortfolio();
  }
}
