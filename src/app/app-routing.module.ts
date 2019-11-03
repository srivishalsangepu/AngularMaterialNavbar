import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


const routes: Routes = [
  {path:"employees", component:EmpdetailsComponent},
  {path:"students",component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
