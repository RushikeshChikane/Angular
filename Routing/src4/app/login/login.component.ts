
  import { Component } from '@angular/core';
  import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
  
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent {
  
    loggedIn: boolean = false;
    role: any;
    status: boolean = false;
    signinstatus: boolean = false;
    signout: boolean = false;

   user : User ={
    email : '',
    password: ''
   }
  
   
   constructor (private svc: AuthService,private router:Router){}

   logIn(){
    this.svc.logIn(this.user).subscribe((response)=>{
      localStorage.setItem('jwtToken',response.token);
      this.loggedIn = true;
      this.signout = true;
      console.log(response.token)
      localStorage.setItem("jwt",response.token)
      console.log(response);
      const role=this.svc.getRoleFromToken();
      console.log(role);
    })
   }

   login() {
    this.status = true;
    this.signinstatus = true;
  }
  logout() {
    this.loggedIn = false;
    this.signinstatus = false;
    this.signout = false;
    this.status = false;
    localStorage.removeItem("jwtToken");
  }


  
  }









