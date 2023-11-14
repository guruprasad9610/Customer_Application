import { Injectable } from '@angular/core';
import { INTRO_KEY } from '../otp/otp.page';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../api.urls';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }


  loginService(Customers: any)
  {
    return this.http.post(`${apiUrls.baseURL}login`,Customers);
  }

  loggedIn()
  {
    return !!localStorage.getItem(INTRO_KEY);
  }
}
