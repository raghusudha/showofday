import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  MovieService  from '../movie.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
customer={};
  constructor(private router: Router ,public alertController: AlertController,private movieService:MovieService) { }

  ngOnInit() {}
  onRegister(customer){
    this.movieService.addRemoteCustomer(customer).subscribe(()=>
    {
      
      this.router.navigate(['/tabs']);
    });
  
  
  }
}