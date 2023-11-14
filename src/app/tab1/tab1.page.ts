import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  onSell()
  {
    this.router.navigate(['/tabs/tab3']);
  }

  onNotice()
  {
    this.router.navigate(['/notifications']);
  }

  viewAll()
  {
    this.router.navigate(['/tabs/tab2']);
  }

}
