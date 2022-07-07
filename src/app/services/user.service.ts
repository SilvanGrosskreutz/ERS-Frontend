import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:8080/users/";

  activeUser:User|null = null;

  constructor(private http:HttpClient) { }

  login(user:User):Observable<User>{
    return this.http.post(this.url,user,{withCredentials:true}) as Observable<User>;
  }

  register(user:User):Observable<unknown>{
    return this.http.post(this.url+"register", user);
  }
}
