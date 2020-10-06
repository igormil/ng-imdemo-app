import { Component, OnInit } from '@angular/core';

import { HackerNewsService} from "../../hacker-news.service";
import { HackerNewsItem} from "../../hacker-news-item";
import { CounterService } from "../../counter.service";

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit {

  hackerNewsItems: HackerNewsItem[] = [];

  constructor(
    private hackerNewsService: HackerNewsService,
    private counterService: CounterService,
  ) { }

  getBestStories(): void {
    this.hackerNewsService.getBestStoriesIds().subscribe(hackerNewsIds => this.getDetails(hackerNewsIds));
  }

  getDetails(ids: String[]): void {
    for(let i = 0; i < 10; i++) {
      this.hackerNewsService.getDetails(ids[i]).subscribe(item => this.hackerNewsItems.push(item));
    }
  }

  titleClicked(id: number) {
    this.counterService.clicked(id);
  }

  ngOnInit(): void {
    this.getBestStories();
  }

}
