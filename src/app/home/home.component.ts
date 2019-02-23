import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sw: SwUpdate
  ) { }

  ngOnInit() {
    if(this.sw.isEnabled){
      this.sw.available.subscribe(
        res => {
          if(confirm("Do want to realod")){
            window.location.reload();
          }
        }
      )
    }
  }

}
