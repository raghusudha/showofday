import { Component, OnInit  } from '@angular/core';
import  MovieService  from '../movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  list:any=[];
  id: number;
  private sub: any;
 movie:any=[];
  constructor(private movieService:MovieService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    this.list = this.movieService.getMovies();

    
  }
}
