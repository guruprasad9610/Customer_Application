import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit
{
  userProfile: any = {}
  constructor(private router: Router) { }

  ngOnInit() { }

  saveData()
  {
    console.log(this.userProfile);
    this.router.navigate(['/add-address']);
  }
}
