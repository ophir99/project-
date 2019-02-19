import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://localhost:9800/'
  constructor(
    private httpC: HttpClient
  ) { }

  createUser = (data) => this.httpC.post(`${this.BASE_URL}user/create`, data)
  logUser = (data) => this.httpC.post(`${this.BASE_URL}user/login`, data)
  checkUser = () => this.httpC.get(`${this.BASE_URL}user/checkuser`, {
    headers: new HttpHeaders().append("Authorization", sessionStorage.getItem("myToken"))
  })
}
