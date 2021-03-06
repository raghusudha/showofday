import { Component,OnInit } from '@angular/core';
import  MovieService  from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
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
 
  onCancelled(){
    this.router.navigate(['cancelled']);
  }
  onBookings(){
    this.router.navigate(['completed']);
  }
}
