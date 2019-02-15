import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-one';
  constructor(
    private router: Router
  ){

  }

  search(){
    if(this.title.length > 2){
      this.router.navigate(['/search'], {queryParams: {
        query: this.title,
        location: "IND"
      }})
    }
  }
}
