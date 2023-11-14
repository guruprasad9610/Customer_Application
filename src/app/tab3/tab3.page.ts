import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  onNotice()
  {
    this.router.navigate(['/notifications']);
  }

  onSubmit()
  {
    this.router.navigate(['/order-details']);
  }

  viewAll()
  {
    this.router.navigate(['/tabs/tab2']);
  }

  closeAll()
  {
    this.router.navigate(['/tabs/tab2']);
  }

  public data = [
    'Aluminium cans',
    'Plastic bottles',
    'Newspaper',
    'Cardboard',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }



}
