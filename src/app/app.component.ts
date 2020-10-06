import { Component } from '@angular/core';
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-imdemo-app';

  interestsClicks: number;

  interestsVisits: number;

  constructor(
    private counterService: CounterService,
  ) {
  }

  ngOnInit(): void {
    this.counterService.clicks$.subscribe(clicks => this.interestsClicks = clicks);
    this.counterService.visits$.subscribe(visits => this.interestsVisits = visits);
  }
}
