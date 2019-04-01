import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import  MovieService  from '../movie.service';

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
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.movieService.getMovieById(this.id).subscribe((movie)=>{
         this.movie=movie.result;
         console.log(this.movie);
       })
    });
  }
  amount=this.data.tickets*50
  addBooking(movie,t){
    console.log(movie,t);
    var movies={
    customer_id:2,
    tickets:t,
    movie_id:movie.id,
    movie_name:movie.name,
    movie_time:'12:50',
    theatre:'Cinepolis Meenakshi Mall',
    screen:'Screen 2',
    city:'Bangalore',
    movie_date:'2019-05-07',
    date:'2019-03-27',
    amount:this.amount,
    ticket_price:50
    }
    console.log('data sent====>',this.addBooking)
    this.movieService.addBooking(movies).subscribe((e)=>{console.log(JSON.stringify(e));
    this.router.navigate(['./offers'])
    });
 }
}
