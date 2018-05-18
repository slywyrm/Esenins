import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Slide } from '../../shared/models/slide';
import { SlidesService } from '../../shared/services/slides/slides.service';
import { Observable } from 'rxjs';

@Injectable()
export class SlidesResolver implements Resolve<Slide[]> {

  constructor(private slidesService: SlidesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Slide[]> {
    return this.slidesService.getSlides();
  }
}
