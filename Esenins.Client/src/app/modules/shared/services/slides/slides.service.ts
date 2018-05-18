import { Injectable } from '@angular/core';
import { Slide } from '../../models/slide';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { first, last, take, tap } from 'rxjs/internal/operators';

@Injectable()
export class SlidesService {
  private slides = new BehaviorSubject<Slide[]>([]);

  constructor(private http: HttpClient) { }

  getSlides(force = false): Observable<Slide[]> {
    if (!this.slides.getValue().length || force) {
      return this.http.get<Slide[]>('/MainPage/slides')
        .pipe(tap(data => this.slides.next(data)));
    }
    return this.slides.asObservable();
  }

}
