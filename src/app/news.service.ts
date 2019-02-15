import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpC: HttpClient
  ) { }


  getContent = (section) => this
                    .httpC
                    .get(`https://content.guardianapis.com/search`, {
                      params: new HttpParams()
                              .append('api-key', '5c5fbd50-93a5-4da9-82d5-19c951b46360')
                              .append('section', section)
                    })
}

