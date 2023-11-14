import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit
{
  userAddress: any = {}
  session: any;
  constructor(private router: Router) { }

  ngOnInit() { }

  onAddress()
  {
    let userAddress = {pinCode: 751013, stateName: 'Odisha', cityName: 'Bhubaneswar, Khorda', houseName: 'OCAC TOWER, Acharya Vihar', streetName: 'Regional Research Laboratory'};
    console.log(this.userAddress);
    localStorage.setItem('session' ,JSON.stringify(userAddress));
    this.router.navigate(['/']);
  }

  showAddress()
  {
    let userAddress: any = localStorage.getItem('session');
    this.session = JSON.parse(userAddress);
    this.userAddress.patchValue();

  }

  onSkip()
  {
    this.router.navigate(['/']);
  }

}

// handleChange(e: any)
// {
//   console.log('ionChange fired with value: ' + e.detail.value);
// }

// handleCancel()
// {
//   console.log('ionCancel fired');
// }

// handleDismiss()
// {
//   console.log('ionDismiss fired');
// }
