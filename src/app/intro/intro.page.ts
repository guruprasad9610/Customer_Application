import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  public alertButtons = [
    {
      text: 'Deny',
      role: 'cancel',
      handler: () => {
        this.router.navigate(['/login']);
        console.log('Location Permission Denied');
      },
    },
    {
      text: 'Allow',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/swiper-pages']);
        console.log('Location Permission Allowed');
      },
    },
  ];

  setResult(ev: any)
  {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
