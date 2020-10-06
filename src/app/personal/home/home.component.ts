import { Component, OnInit } from '@angular/core';
import {CounterService} from "../../counter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interestClicks: number;

  interestVisits: number;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.counterService.clicks$.subscribe(clicks => this.interestClicks = clicks);
    this.counterService.visits$.subscribe(visits => this.interestVisits = visits);
  }

}
