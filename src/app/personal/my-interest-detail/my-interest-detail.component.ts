import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {HackerNewsItem} from "../../hacker-news-item";
import {HackerNewsService} from "../../hacker-news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-interest-detail',
  templateUrl: './my-interest-detail.component.html',
  styleUrls: ['./my-interest-detail.component.css']
})
export class MyInterestDetailComponent implements OnInit {

  hackerNewsItem: HackerNewsItem;

  constructor(
    private route: ActivatedRoute,
    private hackerNewsService: HackerNewsService,
    private location: Location,
  ) { }

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hackerNewsService.getDetails(id).subscribe(hackerNewsItem => this.hackerNewsItem = hackerNewsItem);
  }

  ngOnInit(): void {
    this.getDetails();
  }

  goBack(): void {
    this.location.back();
  }

}
