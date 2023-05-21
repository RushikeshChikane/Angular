import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{


  employees = [
    {id:1, firstName:'Pragati', lastName:'Bangar',contactNumber:8978987898},
    {id:2, firstName:'Rushikesh', lastName:'Chikane',contactNumber:8978987898},
    {id:3, firstName:'Akash', lastName:'Ajab',contactNumber:8978987898},
    {id:4, firstName:'Akshay', lastName:'Tanpure',contactNumber:8978987898},
  ];
  constructor(){}
  ngOnInit(): void {
  }

}












