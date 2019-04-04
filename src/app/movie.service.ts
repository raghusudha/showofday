import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {
  private movieUrl = 'http://localhost:3000/api/movies';
  private customerUrl = 'http://localhost:3000/api/customers';
  private bookingUrl='http://localhost:3000/api/bookings';
 
  movies:any=[{id:1,name:"Bahu bali 2",year:2017,image_url:"https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg",production_house:"ABC Movies",rating:5,type:"epic",language:"Telugu",date:"2017-09-30T18:30:00.000Z"},
  ];

customers:any=[{name:'sudha',password:'123456',address:'btm',email:'sudha@gmail.com',phone:'23456789'}];
bookings:any={customer_id:100,tickets:2,movie_id:355767778,movie_name:"arya",movie_time:"2pm",theatre:"sandhya multicomplex",screen:"500mm",city:"bangaluru",movie_date:"2019-04-07T18:30:00.000Z",date:"2019-03-31T18:30:00.000Z",amount:500,ticket_price:500}
  constructor(private http: HttpClient) { }

  movie=JSON.parse(localStorage.getItem('movies'));
 getMovies(){
   return this.movies;
 }
 getRemoteMovies(): Observable<[]>{
    return this.http.get<[]>(this.movieUrl); 		
  }
  getMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl + "/"+id);
  }
  addBooking(booking):Observable<any>{
    console.log(">> addBooking:" +JSON.stringify(booking));
    return this.http.post(this.bookingUrl,booking);
  }


  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }
 getDBCustomers(){
   this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
 }
 getRemoteCustomers():Observable<[]>{
   return this.http.get<[]>(this.customerUrl);

 }
 





}

