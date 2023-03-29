import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {MyTableComponent} from "./components/my-table/my-table.component";
import {MyActionComponent} from "./components/my-action/my-action.component";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table', component: MyTableComponent},
  {path: ':action/:id', component: MyActionComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
