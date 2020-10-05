import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HackerNewsItem } from "./hacker-news-item";

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private hackerNewsUrl = 'https://hacker-news.firebaseio.com/v0';
  private bestStoriesPath = '/beststories';
  private itemPath = '/item/'

  constructor(
    private http: HttpClient,
  ) { }

  getBestStoriesIds(): Observable<String[]> {
    return this.http.get<String[]>(this.hackerNewsUrl + this.bestStoriesPath + '.json')
      .pipe(
        tap(_ => this.log('fetched best stories ...')),
        catchError(this.handleError<String[]>('getBestStories', []))
      );
  }

  getDetails(id: String): Observable<HackerNewsItem> {
    return this.http.get<HackerNewsItem>(this.hackerNewsUrl + this.itemPath + id + '.json')
      .pipe(
        tap(_ => this.log('fetched details ...')),
        catchError(this.handleError<HackerNewsItem>('getDetails', null))
      );
  }

  private log(message: String, isError: boolean = false) {
    if(isError) {
      console.error(message);
    } else {
      console.info(message);
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`, true);
      return of(result as T);
    };
  }

}
