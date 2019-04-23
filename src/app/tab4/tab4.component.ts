import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
})
export class Tab4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  onSignin(){
    this.router.navigate(['./login']);
  }
  onBookings(){
    this.router.navigate(['./tabs/tab3']);
  }
  onOffers(){
    this.router.navigate(['./tabs/tab2']);
  }
  onLogout(){
    this.router.navigate(['./home']);

  }
}
