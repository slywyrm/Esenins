import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProjectsBySections } from '../../shared/models/project-section';
import { ProjectsService } from '../../shared/services/projects/projects.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsResolver implements Resolve<ProjectsBySections> {
  constructor(private projectsService: ProjectsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectsBySections> {
    return this.projectsService.getProjects();
  }
}
