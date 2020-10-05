import { Component, OnInit } from '@angular/core';

import { HackerNewsService} from "../../hacker-news.service";
import { HackerNewsItem} from "../../hacker-news-item";

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit {

  hackerNewsItems: HackerNewsItem[] = [];

  constructor(
    private hackerNewsService: HackerNewsService,
  ) { }

  getBestStories(): void {
    this.hackerNewsService.getBestStoriesIds().subscribe(hackerNewsIds => this.getDetails(hackerNewsIds));
  }

  getDetails(ids: String[]): void {
    for(let i = 0; i < 10; i++) {
      this.hackerNewsService.getDetails(ids[i]).subscribe(item => this.hackerNewsItems.push(item));
    }
  }

  ngOnInit(): void {
    this.getBestStories();
  }

}
