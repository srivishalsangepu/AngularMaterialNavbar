import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
title="Student Details";
isStudent:boolean=true;
  constructor() { }
  displayedColumns: string[] = ['Id', 'name', 'fees', 'grade','class'];

  studentdetails=[
   {id:"194",name:"Vijay", fees:"34000",grade:"9.2",class:"10"},
   {id:"162",name:"Devan", fees:"34000",grade:"4.6",class:"9"},
   {id:"142",name:"Rohit", fees:"34000",grade:"5.6",class:"10"},
   {id:"113",name:"Vikas", fees:"34000",grade:"3.7",class:"10"},
   {id:"115",name:"vikram", fees:"34000",grade:"8.9",class:"10"},
   {id:"117",name:"Vishwa", fees:"34000",grade:"7.8",class:"10"},
   {id:"110",name:"virat", fees:"34000",grade:"2.3",class:"10"},
   {id:"114",name:"vinod", fees:"54000",grade:"7.4",class:"10"},
   {id:"145",name:"nikhil", fees:"32000",grade:"4.2",class:"10"},
   {id:"122",name:"Shoban", fees:"24000",grade:"9.8",class:"10"},
   {id:"154",name:"SriVishal", fees:"45000",grade:"1.2",class:"10"},
   {id:"194",name:"Vijay", fees:"34000",grade:"9.2",class:"10"},
   {id:"162",name:"Devan", fees:"34000",grade:"4.6",class:"9"},
   {id:"142",name:"Rohit", fees:"34000",grade:"5.6",class:"10"},
   {id:"113",name:"Vikas", fees:"34000",grade:"3.7",class:"10"},
   {id:"115",name:"vikram", fees:"34000",grade:"8.9",class:"10"},
   {id:"117",name:"Vishwa", fees:"34000",grade:"7.8",class:"10"},
   {id:"110",name:"virat", fees:"34000",grade:"2.3",class:"10"},
   {id:"114",name:"vinod", fees:"54000",grade:"7.4",class:"10"},
   {id:"145",name:"nikhil", fees:"32000",grade:"4.2",class:"10"},
   {id:"122",name:"Shoban", fees:"24000",grade:"9.8",class:"10"},
   {id:"154",name:"SriVishal", fees:"45000",grade:"1.2",class:"10"}
  ]
  ngOnInit() {
  }

}
