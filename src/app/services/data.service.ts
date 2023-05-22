import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(
    private http: HttpClient
  ) { }


  post_signup(user: object): Observable<object> {
    return this.http.post(`192.168.1.5:3000/api`, user).pipe(take(1));
  }



  post_login(user: object): Observable<object> {
    return this.http.post(`192.168.1.5:3000/api`, user).pipe(take(1));

  }

}