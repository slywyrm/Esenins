import { Component, OnInit } from '@angular/core';
import { ProjectsBySections } from '../../../shared/models/project-section';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'es-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  get projectsSections$(): Observable<ProjectsBySections> {
    return this.route.data.pipe(pluck('projects'));
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
