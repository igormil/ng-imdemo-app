import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {HackerNewsItem} from "../../hacker-news-item";
import {HackerNewsService} from "../../hacker-news.service";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-my-interest-detail',
  templateUrl: './my-interest-detail.component.html',
  styleUrls: ['./my-interest-detail.component.css']
})
export class MyInterestDetailComponent implements OnInit, OnDestroy {

  private readonly ngUnsubscribe$: Subject<void> = new Subject<void>();

  hackerNewsItem: HackerNewsItem;

  constructor(
    private route: ActivatedRoute,
    private hackerNewsService: HackerNewsService,
    private location: Location,
  ) { }

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hackerNewsService.getDetails(id).pipe(takeUntil(this.ngUnsubscribe$)).subscribe(hackerNewsItem => this.hackerNewsItem = hackerNewsItem);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getDetails();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
