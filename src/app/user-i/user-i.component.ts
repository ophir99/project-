import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatSnackBar, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { ResultsComponent } from '../results/results.component';
export class A{
  a;
  b;
}
@Component({
  selector: 'app-user-i',
  templateUrl: './user-i.component.html',
  styleUrls: ['./user-i.component.css'],
  providers: [A]
})
export class UserIComponent implements OnInit {
  signInForm: FormGroup;
  signUpForm: FormGroup;

  signUpFormToggle = false;
  showSpinner = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)private matData: any,
    private fb: FormBuilder,
    private userS: UserService,
    private matS: MatSnackBar,
    private matD: MatDialogRef<UserIComponent>,
    private app: A
  ) { 
    console.log(this.app);
    this.signInForm = this.fb.group({
      email: [],
      password: []
    })
    this.signUpForm = this.fb.group({
      email: [],
      password: [],
      confirmPassword: []
    })
  }

  ngOnInit() {
    console.log(this.matData);
  }

  showSignUpForm(){
    this.signUpFormToggle = true;
  }
  showSignInForm(){
    this.signUpFormToggle = false;
  }

  register(){
    this.showSpinner = true
    console.log(this.signUpForm.value);
    this.userS.createUser(this.signUpForm.value)
        .subscribe(
          (res:any) => {
            console.log("Res", res.token);
            
        },
          err => {
            this.matS.open("Sorry, try again..", "",  {
              duration: 4000
            })
            setTimeout(()=>{
              this.showSpinner = false;
            }, 2000)
          },
          ()=>{
            this.matS.open("User is created..", "",  {
              duration: 4000
            })
            setTimeout(()=>{
              this.showSpinner = false;
              this.signUpFormToggle = !true;
            }, 2000)
          }
        )

  }

  login(){
    this.userS.logUser(this.signInForm.value)
              .subscribe(
                (res:any) => {
                  console.log(res)
                  this.matS.open("User logged...");
                  sessionStorage.setItem("token", res.token);
                  this.matD.close();
                }
              )
  }

}
