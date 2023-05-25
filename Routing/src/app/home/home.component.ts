import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private svc : AuthService){}
  
  empFirstName: string | any
  empLastName: string | any
  id: number | any
  statusDeveloper: boolean = false;
  statusConsultant: boolean = false
  statusTester: boolean = false
  statusManager: boolean = false
  empid = localStorage.getItem('employeeId') || '{}';
  role = localStorage.getItem("role")
  token=localStorage.getItem("jwtToken");
  status:boolean=true;
  
  
  
  async ngOnInit(): Promise<any> {

    //get the employee role from and localstorage and show links according to roles
    console.log("on init");
    if (this.role == "Developer") {
      this.statusDeveloper = true;
    }
    if (this.role == "Consiltant") {
      this.statusConsultant = true;
    }
    if (this.role == "Tester") {
      this.statusTester = true;
    }
    if (this.role == "Manager") {
      this.statusManager = true;
    }

    //get employee name from employee id which is stored in localstorage
    console.log(this.empid);
    this.id = parseInt(this.empid);
    this.svc.getEmpById(this.id).subscribe((Response) => {
      this.empFirstName = Response.employeeFirstName;
      this.empLastName = Response.employeeLastName;
      console.log(Response);
    })
  }

}
