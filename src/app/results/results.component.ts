import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap, retryWhen, debounceTime } from "rxjs/operators";
import { NewsService } from '../news.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  newsType;
  country;
  content = [];
  constructor(
    private aRoute: ActivatedRoute,
    private newsS: NewsService
  ) { }

  ngOnInit() {
    this.aRoute.queryParams
    .pipe(
      debounceTime(1500),
      map(data=> [data.query, data.location]),
      switchMap(data => this.newsS.getContent(data[0])),
      map((res: any) => res.response.results),
      retryWhen(err => err)
    )
    .subscribe(
      (content) => {
          this.content = content;
      }
    )
  }

}
