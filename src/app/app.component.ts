import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "./counter.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private readonly ngUnsubscribe$: Subject<void> = new Subject<void>();

  title = 'ng-imdemo-app';

  interestsClicks: number;

  interestsVisits: number;

  constructor(
    private counterService: CounterService,
  ) {
  }

  ngOnInit(): void {
    this.counterService.clicks$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(clicks => this.interestsClicks = clicks);
    this.counterService.visits$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(visits => this.interestsVisits = visits);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }
}
