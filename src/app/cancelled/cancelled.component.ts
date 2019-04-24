import { Component, OnInit } from '@angular/core';
import  MovieService  from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.scss'],
})
export class CancelledComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) {
  }

  list:[];
  res:any;
  ngOnInit() {
    this.movieService.getRemoteBooking().subscribe((result)=>{
     // console.log(result)
      this.res=result;
      this.list = this.res.result;
    });
    
  }
  onBookings(){
    this.router.navigate(['/tabs/tab3']);
  }
  onBack(){
    this.router.navigate(['/tabs/tab3']);
  }
}