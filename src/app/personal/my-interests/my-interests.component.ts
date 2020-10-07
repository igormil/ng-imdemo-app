import {Component, OnDestroy, OnInit} from '@angular/core';

import { HackerNewsService} from "../../hacker-news.service";
import { HackerNewsItem} from "../../hacker-news-item";
import { CounterService } from "../../counter.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit, OnDestroy {

  private readonly ngUnsubscribe$: Subject<void> = new Subject<void>();

  hackerNewsItems: HackerNewsItem[] = [];

  constructor(
    private hackerNewsService: HackerNewsService,
    private counterService: CounterService,
  ) { }

  getBestStories(): void {
    this.hackerNewsService.getBestStoriesIds().pipe(takeUntil(this.ngUnsubscribe$)).subscribe(hackerNewsIds => this.getDetails(hackerNewsIds));
  }

  getDetails(ids: String[]): void {
    for(let i = 0; i < 10; i++) {
      this.hackerNewsService.getDetails(ids[i]).pipe(takeUntil(this.ngUnsubscribe$)).subscribe(item => this.hackerNewsItems.push(item));
    }
  }

  titleClicked(id: number) {
    this.counterService.clicked(id);
  }

  ngOnInit(): void {
    this.getBestStories();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
