import { Component, OnInit } from '@angular/core';
import  MovieService  from '../movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
list:any=[];
  id: number;
  private sub: any;
 movie:any=[];
  constructor(private movieService:MovieService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    this.list = this.movieService.getMovies();

    
  }
 onSelect(movie){
    this.router.navigate(['./booking/'+movie.id]);
    console.log(movie);
  }
  onOffers(){
    this.router.navigate(['./offers']);
  }
  

}
