import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sliders:any = [];
  constructor(private router:Router) {
    this.sliders = [{image: "../../assets/home2.jpg"},
  {image: "../../assets/home3.jpg"},
  { image: "../../assets/home.png" }];
 }

  ngOnInit() {}
  onSignup(){
  this.router.navigate(['./register']);
}
onSignin(){
  this.router.navigate(['./login']);
}
slidesDidLoad(myslides) {
  myslides.startAutoplay();
}
slidesDidLoad1(mslides) {
  mslides.startAutoplay();
}

}
