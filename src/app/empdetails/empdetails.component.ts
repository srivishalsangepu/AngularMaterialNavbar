import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {
title="Employee details";
isEmployee:boolean=true;
  constructor() { }
  displayedColumns: string[] = ['Id', 'name', 'salary', 'position'];

  employees=[
   {id:"194",name:"Vijay", salary:"34000",position:"UI developer"},
   {id:"162",name:"Devan", salary:"34000",position:"UI developer"},
   {id:"142",name:"Rohit", salary:"34000",position:"UI developer"},
   {id:"113",name:"Vikas", salary:"34000",position:"UI developer"},
   {id:"115",name:"vikram", salary:"34000",position:"UI developer"},
   {id:"117",name:"Vishwa", salary:"34000",position:"UI developer"},
   {id:"110",name:"virat", salary:"34000",position:"UI developer"},
   {id:"114",name:"vinod", salary:"54000",position:"UI developer"},
   {id:"145",name:"nikhil", salary:"32000",position:"UI developer"},
   {id:"122",name:"Shoban", salary:"24000",position:"Front End developer"},
   {id:"154",name:"SriVishal", salary:"45000",position:"Java developer"}
 ]
  ngOnInit() {
  }

}
