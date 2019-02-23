import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { UserIComponent } from "./user-i/user-i.component";
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-one';
  toggle;
  constructor(
    private router: Router,
    private matD: MatDialog,
    private userS: UserService
  ){

  }

 
  search(){
    if(this.title.length > 2){
      this.toggle = true;
      this.router.navigate(['/search'], {queryParams: {
        query: this.title,
        location: "IND"
      }})
    }
    this.toggle = false;
  }


  showDialog(){
    this.matD.open(UserIComponent, {
      disableClose: true,
      data: {
        name: this.title,
        data: [],
        action: ()=>{}
      }
    })
  }

  checkUser(){
    this.userS.checkUser()
        .subscribe(
          res => {
            console.log(res);
          }
        )
  }
}
