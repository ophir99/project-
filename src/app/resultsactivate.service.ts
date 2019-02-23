import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class ResultsactivateService implements CanActivate {

  constructor(
    private snack: MatSnackBar
  ) { 

  }

  canActivate(){
    if(sessionStorage.getItem("token")){
      return true;
    }else{
        this.snack.open("Login and then try")
    }
  }
}


@Injectable(
  {
    providedIn: "root"
  }
)
export class HomeActivate implements CanActivate{

  canActivate(){
    if(sessionStorage.getItem("token")){
      return false;
    }else{
      return true;
    }
  }
}