import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MovieService from '../movie.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss'],
})
export class ForgotpwdComponent implements OnInit {
  customer = {phone:''};
  password: any = {};
  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() { }
  reset() {
    this.movieService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer) => {
      this.password = customer;
      console.log(customer);
      alert('This is Your PassWord:' + this.password[0].password);
    });
  }

  forget() {
    this.router.navigate(['/forgetpassword']);
  }
  register() {
    this.router.navigate(['/register']);
  }
  onBack() {
    this.router.navigate(['/login']);
  }
}



