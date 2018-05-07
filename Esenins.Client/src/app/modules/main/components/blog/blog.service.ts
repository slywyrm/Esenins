import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, Observable } from 'rxjs';
import { map, pluck, switchMap, tap } from 'rxjs/operators';
import { SharedModule } from '../../../shared/shared.module';

@Injectable({
  providedIn: SharedModule
})
export class BlogService {
  private accessToken = new AsyncSubject<string>();
  private readonly fbApi = 'https://graph.facebook.com';

  constructor(private http: HttpClient) {
    this.getToken();
  }

  private getToken() {
    this.http.get<{access_token: string}>(
      `${this.fbApi}/oauth/access_token?client_id=329829260786620&client_secret=eb427eee8e9d9ce020a488546bacabf1&grant_type=client_credentials`
    ).pipe(pluck('access_token'))
      .subscribe((token: string) => {
        this.accessToken.next(token);
        this.accessToken.complete();
      });
  }

  private graphCall<T>(call: (token: string) => Observable<T>): Observable<T> {
    return this.accessToken.asObservable().pipe(switchMap(call));
  }

  getPosts(): Observable<string[]> {
    return this.graphCall((token: string) =>
      this.http.get<{data: {permalink_url: string}[]}>(`${this.fbApi}/2022032894724732/feed?fields=permalink_url&access_token=${token}`)
    ).pipe(map(response => response.data.map(item => item.permalink_url)));
  }
}
