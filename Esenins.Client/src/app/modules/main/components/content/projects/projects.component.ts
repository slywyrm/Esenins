import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../../shared/services/projects/projects.service';
import { ProjectsBySections } from '../../../../shared/models/project-section';
import { Observable } from 'rxjs';

@Component({
  selector: 'wl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  get projectsSections$(): Observable<ProjectsBySections> {
    return this.projectsService.getProjects();
  }

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
  }

}
