import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "../../counter.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly ngUnsubscribe$: Subject<void> = new Subject<void>();

  interestClicks: number;

  interestVisits: number;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.counterService.clicks$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(clicks => this.interestClicks = clicks);
    this.counterService.visits$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(clicks => this.interestVisits = clicks);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
