import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const INTRO_KEY = 'recyclemint';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  verifyOTP: any = { }
  config = {
    length : 4,
    allowNumbersOnly : true,
    inputClass: 'otp-input-style',
  };
  
  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit()
  {
    if(this.authService.loggedIn())
    {
      this.router.navigate(['/']);
    }
    // else
    // {
    //   this.router.navigate(['/login']);
    // }
  }

  onLogin()
  {
    console.log(this.verifyOTP);
    localStorage.setItem(INTRO_KEY, 'true');
    this.router.navigate(['/complete-profile']);
  }

  onOtpChange(event: any)
  {
    this.verifyOTP = event;
    console.log(this.verifyOTP);
  }

}
