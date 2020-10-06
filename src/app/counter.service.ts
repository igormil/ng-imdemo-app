import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private clicks = new BehaviorSubject<number>(0);

  clicks$ = this.clicks.asObservable();

  private visits = new BehaviorSubject<number>(0);

  visits$ = this.visits.asObservable();

  private visitedIds = new BehaviorSubject<number[]>([]);

  constructor() { }

  clicked(id: number): void {
    this.log("clicked", id);
    this.clicks.next(this.clicks.getValue() + 1);
    if(!this.visitedIds.getValue().includes(id)) {
      this.visitedIds.next( [
        ...this.visitedIds.getValue(),
        id
      ]);
      this.visits.next(this.visitedIds.getValue().length);
    }
    this.log("clicks", this.clicks.value);
    this.log("visits", this.visits.value);
  }

  log(message: String, value: number) {
    console.log(message + ": " + value)
  }

}
