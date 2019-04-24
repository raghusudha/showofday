import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  MovieService  from '../movie.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router,public alertController: AlertController) { }
  customers=[];
  message;
  message1;
  customer={
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  }
  email="";
  password="";

ngOnInit() {
    this.movieService.getRemoteCustomers().subscribe((result)=>(this.customers=result));
  }
onLogin(customer){
  
  for(var i=0;i<this.customers.length;i++) {
    if((customer.email==this.customers[i].email) && (customer.password == this.customers[i].password)){
  
    this.router.navigate(['/tabs/tab1']);
    if (localStorage.getItem('user')==null)
    {
    localStorage.setItem('user', JSON.stringify(customer)); 
    }
    }
    else {
      
          this.message="Enter Email/Password";
          // this.message1="Login Failed";
    }
    
    }
    
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'This is an alert message.',
        subHeader: '',
        message: ' Enter Username/password',
        buttons: ['OK']
      });
  
      await alert.present();
}
async Alert() {
  const alert = await this.alertController.create({
    header: 'This is an alert message.',
    subHeader: '',
    message: ' Enter Correct Details',
    buttons: ['OK']
  });

  await alert.present();
}
}
