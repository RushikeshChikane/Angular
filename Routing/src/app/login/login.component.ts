
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
  
    validUser : boolean=false;
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
      //first save the jwt token in local storage
      localStorage.setItem('jwtToken',response.token);
      const role=this.svc.getRoleFromToken();//decode role from token which is stored in localstorage
      const EmployeeId = this.svc.getEmployeeIdFromToken();//decode employee id from token which is stored in localstorage
      localStorage.setItem('role',role);
      localStorage.setItem('employeeId',EmployeeId);
      this.validUser = true;
      this.loggedIn = true;
      this.signout = true;
      console.log(response.token);
      console.log(response);
      console.log(role);
    })
   }

   login() {
    this.status = true;
    this.signinstatus = true;
  }
  logout() {
    this.validUser=false;
    this.loggedIn = false;
    this.signinstatus = false;
    this.signout = false;
    this.status = false;
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("role");
    localStorage.removeItem("employeeId");
  }


  
  }









