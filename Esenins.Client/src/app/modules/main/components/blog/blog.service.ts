import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { SharedModule } from '../../../shared/shared.module';
import { FacebookPost } from '../../../shared/models/facebook-post';

@Injectable({
  providedIn: SharedModule
})
export class BlogService {
  private accessToken = new AsyncSubject<string>();
  private readonly fbApi = 'https://graph.facebook.com';
  private readonly posts = new BehaviorSubject<FacebookPost[]>(null);
  constructor(private http: HttpClient) {
    this.getToken();
  }

  private getToken() {
    this.http.get<{access_token: string}>(
      `${this.fbApi}/oauth/access_token?client_id=329829260786620&client_secret=16d155141ac16b32e10a271574e65763&grant_type=client_credentials`
    ).pipe(pluck('access_token'))
      .subscribe((token: string) => {
        this.accessToken.next(token);
        this.accessToken.complete();
      });
  }

  private graphCall<T>(call: (token: string) => Observable<T>): Observable<T> {
    return this.accessToken.asObservable().pipe(switchMap(call));
  }

  getPosts(forceUpdate = false): Observable<FacebookPost[]> {
    if (this.posts.getValue() === null || forceUpdate) {
      this.graphCall((token: string) =>
        this.http.get<{ data: FacebookPost[] }>(`${this.fbApi}/2022032894724732/feed?fields=permalink_url,message,shares,full_picture,link,updated_time&access_token=${token}&limit=15`)
      ).pipe(map(response => response.data))
        .subscribe(data => this.posts.next(data));
    }
    return this.posts.asObservable();
  }
}
