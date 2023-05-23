import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private httpClient:HttpClient) { }

    logIn(user:User):Observable<any>{
      console.log("Inside Request")
      let url = "http://localhost:5291/api/Auth/authenticate/";
      return this.httpClient.post<User>(url,user);
    }

    
  }











