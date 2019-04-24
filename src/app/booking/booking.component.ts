import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import  MovieService  from '../movie.service';
 declare var RazorpayCheckout:any;
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  movie:any;
  private sub:any;
  id:number;
  data={
    tickets:0
  }
  constructor(private movieService:MovieService,private route: ActivatedRoute, private router:Router) { }

ngOnInit() {
    this.movie={
      image_url:'',
      name:'',
    }
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
      //  console.log("id is "+this.id);
       this.movieService.getMovieById(this.id).subscribe((movie)=>{
         this.movie=movie.result;
        //  console.log(this.movie);
       })
    });
  }
  
  amount=this.data.tickets*50
  addBooking(){
    var amountpert:any=this.movie.ticket_price;
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_1DP5mmOlF5G5ag',
      
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'pranav@razorpay.com',
        contact: '8879524924',
        name: 'Pranav Gupta'
      },
      theme: {
        color: '#F37254'
      }
    }
    
    var successCallback = function(success) {
      alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
    }
    
    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }
    
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
    
    this.router.navigate(['/tabs']);
    
    
    }
    
 
 onBack(){
  this.router.navigate(['/tabs']);
 }
}
