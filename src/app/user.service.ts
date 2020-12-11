import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  isLoggedIn: boolean = false;
  http: HttpClient;
  currentUser:any;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(http: HttpClient) {
    this.http = http;
  }

  postLogin(data:any): Observable<any> {
    // console.log('LogSubm');
    // console.log({ ...obj.value });

    return this.http.post('http://localhost:3000/api/login', data,{ withCredentials: true }).pipe(
      tap((user) => {
        this.currentUser=user;
      })
    );
  }
  postRegister(obj: NgForm):Observable<any> {

    const email = obj.value.email;
    const password = obj.value.password;

   return this.http
      .post('http://localhost:3000/api/register', { email, password })
      .pipe();
  }
  getlogout():Observable<any>{
    return this.http.get(`http://localhost:3000/api/logout`, { withCredentials: true }).pipe(
      tap(() => this.currentUser = null)
    );
  }
}
