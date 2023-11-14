import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  userForm !: FormGroup;
  userMobileNum: any = { }
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit()
  {
    this.userForm = this.fb.group(
    {
      // phone:['']
    });
  }

  onSubmit()
  {
    console.log(this.userForm.value);
    console.log(this.userMobileNum);

    this.authService.loginService(this.userForm.value)
      .subscribe({
        next: (res) => {
          alert("User Registered Successfully !!!");
          this.router.navigate(['/otp']);
        },
        error: (err) => {
          console.log(err);
        }
      })

    }
  }
