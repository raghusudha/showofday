import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss'],
})
export class ForgotpwdComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  onVerify(){
    this.router.navigate(['./login']);
  }

}
