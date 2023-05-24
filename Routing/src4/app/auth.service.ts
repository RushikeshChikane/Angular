import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { JwtHelperService } from '@auth0/angular-jwt';
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private httpClient:HttpClient,private JWTHelper : JwtHelperService) { }

    logIn(user:User):Observable<any>{
      console.log("Inside Request")
      let url = "http://localhost:5291/api/Auth/authenticate";
      return this.httpClient.post<User>(url,user);
    }


    getRoleFromToken(): string {
      const token = localStorage.getItem('jwtToken');  
     if (token) {
       const decodedToken: any = this.JWTHelper.decodeToken(token)
       const role = localStorage.setItem('Role', decodedToken.Role)
       return decodedToken.role;
     }
     return '';
    }

    
  }











