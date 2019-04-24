import { Component, OnInit } from '@angular/core';
import  MovieService  from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {

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
  // completed(){
  //   this.router.navigate(['completed']);
  // }
  onBack(){
    this.router.navigate(['/tabs/tab3']);
  }
}
